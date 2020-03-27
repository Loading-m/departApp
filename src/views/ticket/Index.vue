<template>
  <div>
    <div class="header-wrapper">
      <headers :title="trainNumber" :on-back="onBack" v-if="searchParsed" />
    </div>
    <div class="detail-wrapper">
      <detail :arrive-date="arriveDate" :arrive-station="arriveStation" :arrive-time-str="arriveTimeStr"
              :depart-date="departDate" :depart-station="departStation" :depart-time-str="departTimeStr"
              :duration-str="durationStr" :train-number="trainNumber">
      </detail>
      <candidate :tickets="tickets" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Detail from "@/components/detail/Detail";
import Candidate from "@/views/ticket/Candidate";
import Headers from "@/components/header/Header";
import Navs from "@/components/nav/Nav";
import { h0 } from "@/utils/fp";
import dayjs from "dayjs";
import URI from 'urijs';

const {mapState, mapActions} = createNamespacedHelpers('ticket');
export default {
  name: "Index",
  components: {
    Detail,
    Candidate,
    Headers,
    Navs
  },
  data() {
    return {};
  },
  mounted() {
    const {aStation, dStation, date, trainNumber} = this.$route.query;
    this.ACTION_SET_DEPART_STATION(dStation);
    this.ACTION_SET_ARRIVE_STATION(aStation);
    this.ACTION_SET_DEPART_DATE(h0(dayjs(parseInt(date))).valueOf());
    this.ACTION_SET_TRAIN_NUMBER(trainNumber);
    this.ACTION_SET_SEARCH_PARSED(true);
    document.title = trainNumber + '';
    this.fetchData();
  },
  computed: {
    isPrevDisabled() {
      //出发日期早于今天不可点前一天
      return h0(this.departDate) <= h0();
    },
    isNextDisabled() {
      return h0(this.departDate) - h0() > 20 * 86400 * 1000;
    },
    ...mapState({
      departDate: state => state.departDate,
      arriveDate: state => state.arriveDate,
      departTimeStr: state => state.departTimeStr,
      arriveTimeStr: state => state.arriveTimeStr,
      departStation: state => state.departStation,
      arriveStation: state => state.arriveStation,
      trainNumber: state => state.trainNumber,
      durationStr: state => state.durationStr,
      tickets: state => state.tickets,
      isScheduleVisible: state => state.isScheduleVisible,
      searchParsed: state => state.searchParsed,
    }),
  },
  methods: {
    ...mapActions([
      'ACTION_SET_DEPART_DATE',
      'ACTION_SET_ARRIVE_DATE',
      'ACTION_SET_DEPART_TIME_STR',
      'ACTION_SET_ARRIVE_TIME_STR',
      'ACTION_SET_DEPART_STATION',
      'ACTION_SET_ARRIVE_STATION',
      'ACTION_SET_TRAIN_NUMBER',
      'ACTION_SET_TICKETS',
      'ACTION_SET_SET_SCHEDULE_VISIBLE',
      'ACTION_SET_TOGGLE_SCHEDULE_VISIBLE',
      'ACTION_SET_SEARCH_PARSED',
      'ACTION_SET_NEXT_DATE',
      'ACTION_SET_PREV_DATE',
      'ACTION_SET_DURATION_STR',
    ]),
    fetchData() {
      if (!this.searchParsed) {
        return;
      }
      const url = new URI('/rest/ticket').setSearch('date', dayjs(this.departDate).format('YYYY-MM-DD')).setSearch('trainNumber', this.trainNumber).toString();
      fetch(url).then(res => res.json().then(result => {
        const {detail, candidates} = result;
        const {departTimeStr, arriveTimeStr, arriveDate, durationStr} = detail;
        this.ACTION_SET_ARRIVE_DATE(arriveDate);
        this.ACTION_SET_DEPART_TIME_STR(departTimeStr);
        this.ACTION_SET_ARRIVE_TIME_STR(arriveTimeStr);
        this.ACTION_SET_TICKETS(candidates);
        this.ACTION_SET_DURATION_STR(durationStr);
      }));
    },
    onBack() {
      this.$router.go(-1);
    },
    prev() {
      if (this.isPrevDisabled) {
        return;
      }
      this.ACTION_SET_PREV_DATE();
    },
    next() {
      if (this.isNextDisabled) {
        return;
      }
      this.ACTION_SET_NEXT_DATE();
    },
  }
};
</script>

<style scoped>
  .header-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
  }

  .nav-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }

  .mask {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .detail-wrapper {
    position: absolute;
    top: 45px;
    left: 0;
    right: 0
  }
</style>
