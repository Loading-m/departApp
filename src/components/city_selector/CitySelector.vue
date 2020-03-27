<template>
  <div v-if="!isLoading" class="city-selector" :class="{ 'hidden': !show }">
    <div class="city-search">
      <div class="search-back" @click="onBack">
        <svg width="42" height="42">
          <polyline points="25,13 16,21 25,29" stroke="#fff" stroke-width="2" fill="none" />
        </svg>
      </div>
      <div class="search-input-wrapper">
        <input type="text"
               class="search-input"
               placeholder="城市,车站的中文/拼音"
               v-model="searchKey"
        />
      </div>
      <i class="search-clean" :class="{ 'hidden': realKeyLength.length === 0}" @click="cleanSearchKey">
        &#xf063;
      </i>
    </div>
    <suggest :search-key="realKeyLength" :on-select="onSelect" v-if="realKeyLength.length !== 0" />
    <city-list :sections="cityData.cityList" :on-select="onSelect" :toAlpha="toAlpha" v-if="cityData" />
  </div>
</template>

<script>
import CityList from "@/components/city_selector/CityList";
import Suggest from "@/components/city_selector/Suggest";

export default {
  name: "CitySelector",
  components: {
    CityList,
    Suggest
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    cityData: {
      type: Object,
      default: () => {
        return null;
      }
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    onBack: {
      type: Function,
      required: true
    },
    fetchCityData: {
      type: Function,
      required: true
    },
    onSelect: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      searchKey: ''
    };
  },
  watch: {
    listenShowCityDataIsLoading(val) {
      if (!val.show || val.cityData || val.isLoading) { //没显示或者有数据或者在加载
        return;
      }
      this.fetchCityData();
    }
  },
  methods: {
    cleanSearchKey() {
      this.searchKey = '';
    },
    toAlpha(alpha) {
      document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
    }
  },
  computed: {
    realKeyLength() {
      return this.searchKey.trim();
    },
    listenShowCityDataIsLoading() {
      const {show, cityData, isLoading} = this;
      return {show, cityData, isLoading};
    }
  }
};
</script>

<style scoped lang="scss">
  .hidden {
    display: none;
  }

  .city-selector {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    background-color: #fff;
    width: 100%;
    z-index: 1000;
  }

  .city-search {
    position: relative;
    height: 34px;
    line-height: 34px;
    width: 100%;
    background: #00a8bc;
    color: #fff;
    font-size: 18px;
    text-align: center;
    padding: 5px 0;
  }

  .search-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 42px;
    cursor: pointer;
  }

  .search-input-wrapper {
    font-size: 12px;
    height: 32px;
    border-radius: 5px;
    margin-left: 42px;
    margin-right: 15px;
    padding-left: 5px;
    background: #fff;
    text-align: left;
  }

  .search-input {
    width: 80%;
    font-size: 12px;
    height: 32px;
    border: 0;
    color: #333;
    outline: 0;
    background: 0;
    vertical-align: top;
    line-height: 1.5;
    padding: 0;
    padding-left: 5px;
  }

  @font-face {
    font-family: yofont;
    src: url(data:font/woff;base64,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) format('woff');
  }

  .search-clean {
    position: absolute;
    right: 20px;
    top: 4px;
    color: #ccc;
    font-family: 'yofont';
    font-style: normal;
  }

</style>
