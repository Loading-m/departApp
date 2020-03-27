<template>
  <div class="city-list">
    <div class="city-cate">
      <city-section v-for="section of sections" :title="section.title" :cities="section.citys" :on-select="onSelect"
                    :key="section.title" />
    </div>
    <div class="city-index">
      <alpha-index v-for="alpha of alphabet" :alpha="alpha" :on-click="toAlpha" :key="alpha" />
    </div>
  </div>
</template>

<script>
import CitySection from "@/components/city_selector/CitySection";
import AlphaIndex from "@/components/city_selector/AlphaIndex";

export default {
  name: "CityList",
  components: {
    CitySection,
    AlphaIndex
  },
  props: {
    sections: {
      type: Array,
      default: () => {
        return [];
      }
    },
    onSelect: {
      type: Function,
      required: true
    },
    toAlpha: {
      type: Function,
      required: true
    }
  },
  mounted() {
    this.alphabet = Array.from(new Array(26), (ele, index) => {
      return String.fromCharCode(65 + index);
    });
  },
  data() {
    return {
      alphabet: []
    };
  },
  methods: {}
};
</script>

<style scoped>
  .city-list {
    margin-right: 30px;
  }
  .city-index {
    width: 30px;
    position: fixed;
    right: 0;
    top: 44px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
</style>
