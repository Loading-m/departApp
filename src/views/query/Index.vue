<template>
  <div v-if="searchParsed">
    <div class="header-wrapper">
      <headers :title="froms+'>'+to" :on-back="onBack" />
    </div>
    <navs class="nav-wrapper" :date="departDate" :is-next-disabled="isNextDisabled" :is-prev-disabled="isPrevDisabled"
          :next="next"
          :prev="prev" />
    <list :list="trainList" />
    <bottom :high-speed="highSpeed"
            :order-type="orderType"
            :only-tickets="onlyTickets"
            :is-filters-visible="isFiltersVisible"
            :toggle-high-speed="action_toggle_high_speed"
            :toggle-only-tickets="action_toggle_only_tickets"
            :toggle-order-type="action_toggle_order_type"
            :ticket-types="ticketTypes"
            :checked-ticket-types="checkedTicketTypes"
            :train-types="trainTypes"
            :checked-train-types="checkedTrainTypes"
            :depart-time-start="departTimeStart"
            :depart-time-end="departTimeEnd"
            :arrive-time-start="arriveTimeStart"
            :arrive-time-end="arriveTimeEnd"
            :action-arrive-time-end="action_arrive_time_end"
            :action-arrive-time-start="action_arrive_time_start"
            :action-checked-ticket-types="action_checked_ticket_types"
            :action-checked-train-types="action_checked_train_types"
            :action-depart-time-end="action_depart_time_end"
            :action-depart-time-start="action_depart_time_start"
            :toggle-is-filters-visible="action_toggle_is_filters_visible" />
  </div>
</template>

<script>
import Headers from "@/components/header/Header";
import Navs from "@/components/nav/Nav";
import List from "@/views/query/List";
import Bottom from "@/views/query/Bottom";
import { createNamespacedHelpers } from 'vuex';
import dayjs from 'dayjs';
import { h0 } from "@/utils/fp";
import URI from 'urijs';

const {mapState: mapSIndex} = createNamespacedHelpers('index');
const {mapState, mapActions} = createNamespacedHelpers('query');
export default {
  name: "Index",
  components: {
    Navs,
    List,
    Bottom,
    Headers
  },
  computed: {
    ...mapSIndex({
      prevFroms: state => state.froms,
      prevTo: state => state.to,
      prevDepartDate: state => state.departDate,
      prevHighSpeed: state => state.highSpeed,
    }),
    ...mapState({
      froms: state => state.froms,
      to: state => state.to,
      departDate: state => state.departDate,
      highSpeed: state => state.highSpeed,
      trainList: state => state.trainList,
      orderType: state => state.orderType,
      onlyTickets: state => state.onlyTickets,
      ticketTypes: state => state.ticketTypes,
      checkedTicketTypes: state => state.checkedTicketTypes,
      trainTypes: state => state.trainTypes,
      checkedTrainTypes: state => state.checkedTrainTypes,
      departTimeStart: state => state.departTimeStart,
      departTimeEnd: state => state.departTimeEnd,
      arriveTimeStart: state => state.arriveTimeStart,
      arriveTimeEnd: state => state.arriveTimeEnd,
      isFiltersVisible: state => state.isFiltersVisible,
      searchParsed: state => state.searchParsed,
    }),
    isPrevDisabled() {
      //出发日期早于今天不可点前一天
      return h0(this.departDate) <= h0();
    },
    isNextDisabled() {
      return h0(this.departDate) - h0() > 20 * 86400 * 1000;
    },
    listenLoadingList() {
      const {searchParsed, orderType, onlyTickets, checkedTicketTypes, checkedTrainTypes, departTimeStart, departTimeEnd, arriveTimeStart, arriveTimeEnd, froms, to, departDate, highSpeed} = this;
      return {
        froms,
        to,
        departDate,
        highSpeed,
        searchParsed,
        orderType,
        onlyTickets,
        checkedTicketTypes,
        checkedTrainTypes,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd
      };
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.action_froms(this.prevFroms);
    this.action_to(this.prevTo);
    this.action_depart_date(h0(dayjs(this.prevDepartDate).valueOf()));
    this.action_high_speed(this.prevHighSpeed);
    this.action_search_parsed(true);
  },
  destroyed() {
  },
  watch: {
    listenLoadingList(val) {
      if (!val.searchParsed) {
        return;
      }
      const url = new URI('/rest/query').setSearch('from', this.froms).setSearch('to', this.to).setSearch('date', dayjs(this.departDate).format('YYYY-MM-DD')).setSearch('highSpeed', this.highSpeed).setSearch('orderType', this.orderType)
        .setSearch('onlyTickets', this.onlyTickets)
        .setSearch('checkedTicketTypes', Object.keys(this.checkedTicketTypes).join())
        .setSearch('checkedTrainTypes', Object.keys(this.checkedTrainTypes).join())
        .setSearch('departTimeStart', this.departTimeStart)
        .setSearch('departTimeEnd', this.departTimeEnd)
        .setSearch('arriveTimeStart', this.arriveTimeStart).setSearch('arriveTimeEnd', this.arriveTimeEnd).toString();
      fetch(url).then(res => res.json().then(result => {
        const {
          dataMap: {
            directTrainInfo: {
              trains,
              filter: {
                ticketType,
                trainType,
              }
            }
          }
        } = result;
        this.action_train_list(trains);
        this.action_ticket_types(ticketType);
        this.action_train_types(trainType);
      }));
    }
  },
  methods: {
    ...mapActions([
      'action_froms',
      'action_to',
      'action_depart_date',
      'action_high_speed',
      'action_toggle_high_speed',
      'action_train_list',
      'action_toggle_order_type',
      'action_toggle_only_tickets',
      'action_ticket_types',
      'action_checked_ticket_types',
      'action_train_types',
      'action_checked_train_types',
      'action_depart_time_start',
      'action_depart_time_end',
      'action_arrive_time_start',
      'action_arrive_time_end',
      'action_toggle_is_filters_visible',
      'action_search_parsed',
      'action_next_date',
      'action_prev_date'
    ]),
    onBack() {
      this.$router.go(-1);
    },
    prev() {
      if (this.isPrevDisabled) {
        return;
      }
      this.action_prev_date();
    },
    next() {
      if (this.isNextDisabled) {
        return;
      }
      this.action_next_date();
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

  .nav-wrapper {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }

</style>
