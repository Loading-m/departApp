<template>
  <ul class="city-ul">
    <li class="city-li" :data-cate="title">
      {{title}}
    </li>
    <city-item v-for="city of cities" :key="city.name" :name="city.name" :on-select="onSelect" />
  </ul>
</template>

<script>
import CityItem from "@/components/city_selector/CityItem";

export default {
  name: "CitySection",
  components: {
    CityItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cities: {
      type: Array,
      default: () => {
        return [];
      }
    },
    onSelect: {
      type: Function,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
  .city-ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .city-li {
    display: block;
    height: 44px;
    line-height: 44px;
    padding-left: 25px;
    border-bottom: 1px solid #e3e6e9;
    margin-left: 15px;
  }

  .city-li:first-child {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    background-color: #f2f8fb;
    padding: 0 15px;
    margin-left: 0;
    position: sticky;
    top: -1px;
    border-bottom: 0;
  }
</style>
