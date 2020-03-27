<template>
  <div class="app">
    <div class="header-wrapper">
      <headers title="订单填写" :on-back="onBack" />
    </div>
    <div class="detail-wrapper">
      <detail :arrive-date="arriveDate" :arrive-station="arriveStation" :arrive-time-str="arriveTimeStr"
              :depart-date="departDate" :depart-station="departStation" :depart-time-str="departTimeStr"
              :duration-str="durationStr" :train-number="trainNumber">
      </detail>
    </div>
    <ticket :price="price" :type="seatType" class="top" />
    <passengers :passengers="passengers"
                :create-adult="ACTION_SET_CREATE_ADULT"
                :create-child="ACTION_SET_CREATE_CHILD"
                :on-remove="ACTION_REMOVE_PASSENGER"
                :on-update="ACTION_UPDATE_PASSENGER"
                :show-gender-menu="ACTION_SHOW_GENDER_MENU"
                :show-ticket-type-menu="ACTION_SHOW_TICKET_TYPE_MENU"
                :show-follow-adult-menu="ACTION_SHOW_FOLLOW_ADULT_MENU"
    />
    <choose v-if="passengers.length > 0" :passengers="passengers" :update-passenger="ACTION_UPDATE_PASSENGER" />
    <account :length="passengers.length" :price="price"/>
    <menus
      :show="isMenuVisible"
      :options="menu.options"
      :on-press="menu.onPress"
      :hide-menu="ACTION_HIDE_MENU"
      v-if="menu"
    >
    </menus>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import dayjs from 'dayjs';
import URI from 'urijs';
import Detail from "@/components/detail/Detail";
import Ticket from "@/views/order/Ticket";
import Passengers from "@/views/order/Passengers";
import Menus from "@/views/order/Menu";
import Choose from "@/views/order/Choose";
import Account from "@/views/order/Account";

const {mapState, mapActions} = createNamespacedHelpers('order');
const {mapState: mTState} = createNamespacedHelpers('ticket');
import Headers from "@/components/header/Header";

export default {
  name: "Index",
  components: {
    Headers,
    Detail,
    Ticket,
    Passengers,
    Menus,
    Choose,
    Account
  },
  data() {
    return {};
  },
  mounted() {
    const {type} = this.$route.query;
    this.ACTION_SET_TRAIN_NUMBER(this.tNumber);
    this.ACTION_SET_DEPART_STATION(this.dStation);
    this.ACTION_SET_ARRIVE_STATION(this.aStation);
    this.ACTION_SET_DEPART_DATE(dayjs(this.date).valueOf());
    this.ACTION_SET_SEAT_TYPE(type);
    this.ACTION_SET_SEARCH_PARSED(true);

  },
  watch: {
    searchParsed(val) {
      if (val) {
        const url = new URI('/rest/order').setSearch('dStation', this.departStation).setSearch('aStation', this.arriveStation).setSearch('type', this.seatType).setSearch('date', dayjs(this.departDate).format('YYYY-MM-DD')).toString();
        this.ACTION_FETCH_INITIAL(url);
      }
    }
  },
  computed: {
    ...mTState({
      date: state => state.departDate,
      dStation: state => state.departStation,
      aStation: state => state.arriveStation,
      tNumber: state => state.trainNumber,
    }),
    ...mapState({
      trainNumber: state => state.trainNumber,
      departStation: state => state.departStation,
      arriveStation: state => state.arriveStation,
      seatType: state => state.seatType,
      departDate: state => state.departDate,
      arriveDate: state => state.arriveDate,
      departTimeStr: state => state.departTimeStr,
      arriveTimeStr: state => state.arriveTimeStr,
      durationStr: state => state.durationStr,
      price: state => state.price,
      passengers: state => state.passengers,
      menu: state => state.menu,
      isMenuVisible: state => state.isMenuVisible,
      searchParsed: state => state.searchParsed,
    }),
  },
  methods: {
    ...mapActions([
      'ACTION_SET_TRAIN_NUMBER',
      'ACTION_SET_DEPART_STATION',
      'ACTION_SET_ARRIVE_STATION',
      'ACTION_SET_SEAT_TYPE',
      'ACTION_SET_DEPART_DATE',
      'ACTION_SET_ARRIVE_DATE',
      'ACTION_SET_DEPART_TIME_STR',
      'ACTION_SET_ARRIVE_TIME_STR',
      'ACTION_SET_DURATION_STR',
      'ACTION_SET_PRICE',
      'ACTION_SET_PASSENGERS',
      'ACTION_SET_MENU',
      'ACTION_SET_IS_MENU_VISIBLE',
      'ACTION_SET_SEARCH_PARSED',
      'ACTION_FETCH_INITIAL',
      'ACTION_SET_CREATE_ADULT',
      'ACTION_SET_CREATE_CHILD',
      'ACTION_REMOVE_PASSENGER',
      'ACTION_UPDATE_PASSENGER',
      'ACTION_SHOW_MENU',
      'ACTION_HIDE_MENU',
      'ACTION_SHOW_GENDER_MENU',
      'ACTION_SHOW_FOLLOW_ADULT_MENU',
      'ACTION_SHOW_TICKET_TYPE_MENU'
    ]),
    onBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
  .header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .app-content {
    padding-bottom: 60px;
  }

  .detail-wrapper {
    position: absolute;
    top: 45px;
    left: 0;
    right: 0
  }

</style>
