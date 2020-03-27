import { h0 } from "@/utils/fp";
import { ORDER_DEPART, ORDER_DURATION } from '@/views/query/constant';
import Vue from 'vue';
import {
  FROMS,
  TO,
  DEPART_DATE,
  HIGH_SPEED,
  TRAIN_LIST,
  ORDER_TYPE,
  ONLY_TICKETS,
  TICKET_TYPES,
  CHECKED_TICKET_TYPES,
  TRAIN_TYPES,
  CHECKED_TRAIN_TYPES,
  DEPART_STATIONS,
  CHECKED_DEPART_STATIONS,
  ARRIVE_STATIONS,
  CHECKED_ARRIVE_STATIONS,
  DEPART_TIME_START,
  DEPART_TIME_END,
  ARRIVE_TIME_START,
  ARRIVE_TIME_END,
  IS_FILTERS_VISIBLE,
  SEARCH_PARSED
} from './mutation-types';

let query = {
  namespaced: true,
  state: {
    froms: '',
    to: '',
    departDate: h0(Date.now()),
    highSpeed: false,//只看高铁
    trainList: [],//车次列表
    orderType: ORDER_DEPART,//订单类型
    onlyTickets: false, //只看有票
    ticketTypes: [],
    checkedTicketTypes: {},
    //车次类型
    trainTypes: [],
    //选中的类型
    checkedTrainTypes: {},
    //出发时间
    departTimeStart: 0,
    departTimeEnd: 24,
    //到达时间
    arriveTimeStart: 0,
    arriveTimeEnd: 24,
    //综合筛选浮层显示隐藏
    isFiltersVisible: false,
    //解析query
    searchParsed: false
  },
  mutations: {
    [FROMS](state, payload) {
      state.froms = payload;
    },
    [TO](state, payload) {
      state.to = payload;
    },
    [DEPART_DATE](state, payload) {
      state.departDate = payload;
    },
    [HIGH_SPEED](state, payload) {
      state.highSpeed = payload;
    },
    [TRAIN_LIST](state, payload) {
      state.trainList = payload;
    },
    [ORDER_TYPE](state, payload) {
      state.orderType = payload;
    },
    [ONLY_TICKETS](state, payload) {
      state.onlyTickets = payload;
    },
    [TICKET_TYPES](state, payload) {
      state.ticketTypes = payload;
    },
    [CHECKED_TICKET_TYPES](state, payload) {
      state.checkedTicketTypes = payload;
    },
    [TRAIN_TYPES](state, payload) {
      state.trainTypes = payload;
    },
    [CHECKED_TRAIN_TYPES](state, payload) {
      state.checkedTrainTypes = payload;
    },
    [DEPART_STATIONS](state, payload) {
      state.departStations = payload;
    },
    [CHECKED_DEPART_STATIONS](state, payload) {
      state.checkedDepartStations = payload;
    },
    [ARRIVE_STATIONS](state, payload) {
      state.arriveStations = payload;
    },
    [CHECKED_ARRIVE_STATIONS](state, payload) {
      state.checkedArriveStations = payload;
    },
    [DEPART_TIME_START](state, payload) {
      state.departTimeStart = payload;
    },
    [DEPART_TIME_END](state, payload) {
      state.departTimeEnd = payload;
    },
    [ARRIVE_TIME_START](state, payload) {
      state.arriveTimeStart = payload;
    },
    [ARRIVE_TIME_END](state, payload) {
      state.arriveTimeEnd = payload;
    },
    [IS_FILTERS_VISIBLE](state, payload) {
      state.isFiltersVisible = payload;
    },
    [SEARCH_PARSED](state, payload) {
      state.searchParsed = payload;
    },
  },
  actions: {
    action_froms({commit, state}, froms) {
      commit(FROMS, froms);
    },
    action_to({commit, state}, to) {
      commit(TO, to);
    },
    action_depart_date({commit, state}, depart_date) {
      commit(DEPART_DATE, depart_date);
    },
    action_high_speed({commit, state}, high_speed) {
      commit(HIGH_SPEED, high_speed);
    },
    action_toggle_high_speed({dispatch, commit, state}) {
      commit(HIGH_SPEED, !state.highSpeed);
      if (state.highSpeed) {
        Vue.set(state.checkedTrainTypes, 1, true);
        Vue.set(state.checkedTrainTypes, 5, true);
      } else {
        Vue.delete(state.checkedTrainTypes, 1);
        Vue.delete(state.checkedTrainTypes, 5);
      }
      dispatch('action_checked_train_types', state.checkedTrainTypes);
    },
    action_train_list({commit, state}, train_list) {
      commit(TRAIN_LIST, train_list);
    },
    action_toggle_order_type({commit, state}) {
      if (state.orderType === ORDER_DEPART) {
        commit(ORDER_TYPE, ORDER_DURATION);
      } else {
        commit(ORDER_TYPE, ORDER_DEPART);
      }
    },
    action_toggle_only_tickets({commit, state}) {
      commit(ONLY_TICKETS, !state.onlyTickets);
    },
    action_ticket_types({commit, state}, ticket_types) {
      commit(TICKET_TYPES, ticket_types);
    },
    action_checked_ticket_types({commit, state}, checked_ticket_types) {
      commit(CHECKED_TICKET_TYPES, checked_ticket_types);
    },
    action_train_types({commit, state}, train_types) {
      commit(TRAIN_TYPES, train_types);
    },
    action_checked_train_types({commit, state}, checked_train_types) {
      commit(CHECKED_TRAIN_TYPES, checked_train_types);
      state.highSpeed = !!(state.checkedTrainTypes[1] && state.checkedTrainTypes[5]);
    },
    action_depart_time_start({commit, state}, depart_time_start) {
      commit(DEPART_TIME_START, depart_time_start);
    },
    action_depart_time_end({commit, state}, depart_time_end) {
      commit(DEPART_TIME_END, depart_time_end);
    },
    action_arrive_time_start({commit, state}, arrive_time_start) {
      commit(ARRIVE_TIME_START, arrive_time_start);
    },
    action_arrive_time_end({commit, state}, arrive_time_end) {
      commit(ARRIVE_TIME_END, arrive_time_end);
    },
    action_toggle_is_filters_visible({commit, state}) {
      commit(IS_FILTERS_VISIBLE, !state.isFiltersVisible);
    },
    action_search_parsed({commit, state}, search_parsed) {
      commit(SEARCH_PARSED, search_parsed);
    },
    async action_next_date({dispatch, commit, state}) {
      await commit(DEPART_DATE, h0(state.departDate) + 86400 * 1000);
      dispatch('index/set_depart_date', state.departDate, {root: true});
    },
    async action_prev_date({dispatch, commit, state}) {
      await commit(DEPART_DATE, h0(state.departDate) - 86400 * 1000);
      dispatch('index/set_depart_date', state.departDate, {root: true});
    },
  },
};
export { query };
