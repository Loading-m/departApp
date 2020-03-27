<template>
  <div>
    <headers title="火车票" :on-back="onBack" />
    <div class="form">
      <Journey :froms="froms" :to="to" :exchange-froms-to="exchange_froms_to"
               :show-city-selector="show_city_selector" />
      <DepartDate :time="departDate" :on-click="set_is_date_selector_visible" />
      <HighSpeed :high-speed="highSpeed" :toggle="toggle_high_speed" />
      <Submit :get-form-data="getFormData" />
    </div>
    <city-selector :show="isCitySelectorVisible" :city-data="cityData" :is-loading="isLoadingCityData"
                   :on-back="citySelectorOnBack"
                   :fetch-city-data="fetch_city_data"
                   :on-select="set_selected_city"
    />
    <date-selector :show="isDateSelectorVisible" :on-back="dateSelectorOnBack"
                   :on-select="onSelectDate" />
  </div>
</template>

<script>
import Headers from "@/components/header/Header";
import CitySelector from "@/components/city_selector/CitySelector";
import DateSelector from "@/components/date_selector/DateSelector";
import DepartDate from "@/views/index/DepartDate";
import HighSpeed from "@/views/index/HighSpeed";
import Journey from "@/views/index/Journey";
import Submit from "@/views/index/Submit";
import { createNamespacedHelpers } from 'vuex';
import { h0 } from '@/utils/fp';

const {mapState, mapActions} = createNamespacedHelpers('index');
export default {
  name: "Index",
  components: {
    CitySelector,
    Headers,
    DepartDate,
    HighSpeed,
    Journey,
    Submit,
    DateSelector
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      froms: state => state.froms,
      to: state => state.to,
      isCitySelectorVisible: state => state.isCitySelectorVisible,
      isDateSelectorVisible: state => state.isDateSelectorVisible,
      cityData: state => state.cityData,
      isLoadingCityData: state => state.isLoadingCityData,
      departDate: state => state.departDate,
      highSpeed: state => state.highSpeed,
    })
  },
  methods: {
    ...mapActions([
      'exchange_froms_to',
      'set_is_city_selector_visible',
      'fetch_city_data',
      'set_selected_city',
      'show_city_selector',
      'set_is_date_selector_visible',
      'set_depart_date',
      'toggle_high_speed'
    ]),
    onBack() {
      window.history.back();
    },
    citySelectorOnBack() {
      this.set_is_city_selector_visible(false);
    },
    dateSelectorOnBack() {
      this.set_is_date_selector_visible(false);
    },
    onSelectDate(day) {
      if (!day) {
        return;
      }
      if (day < h0()) {
        return;
      }
      this.set_depart_date(day);
      this.set_is_date_selector_visible(false);
    },
    getFormData() {
      this.$router.push({name: 'query'});
    }
  }
};
</script>

<style scoped lang="scss">
  .form {
    padding: 5px 15px 0;
    background: white;
  }

  .header-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
  }
</style>
