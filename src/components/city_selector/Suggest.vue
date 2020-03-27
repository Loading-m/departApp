<template>
  <div class="city-suggest">
    <ul class="city-suggest-ul">
      <suggest-item v-for="item of result" :key="item.display"
                    :name="item.display" :on-click="onSelect"
      />
    </ul>
  </div>
</template>

<script>
import SuggestItem from "@/components/city_selector/SuggestItem";

export default {
  name: "Suggest",
  components: {
    SuggestItem
  },
  props: {
    searchKey: {
      type: String,
      required: true
    },
    onSelect: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      result: []
    };
  },
  watch: {
    searchKey(val) {
      fetch('/rest/search?key=' + encodeURIComponent(val)).then(res => {
        res.json().then(data => {
          const {
            result,
            searchKey: sKey
          } = data;
          if (sKey === val) {
            if (result.length) {
              this.result = result;
            }
          }
        });
      });
    }
  },
  methods: {}
};
</script>

<style scoped>
  .city-suggest {
    background-color: #fff;
    font-size: 14px;
    position: absolute;
    top: 44px;
    width: 100%;
    bottom: 0;
    z-index: 100;
  }

  .city-suggest-ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
