import {
  DEPART_DATE,
  ARRIVE_DATE,
  DEPART_TIME_STR,
  ARRIVE_TIME_STR,
  DEPART_STATION,
  ARRIVE_STATION,
  TRAIN_NUMBER,
  TICKETS,
  IS_SCHEDULE_VISIBLE,
  SEARCH_PARSED,
  DURATION_STR
} from './mutation-types';
import { h0 } from "@/utils/fp";

let ticket = {
  namespaced: true,
  state: {
    departDate: Date.now(),//出发日期
    arriveDate: Date.now(),//到达时起
    departTimeStr: "",
    arriveTimeStr: "",
    departStation: "",
    arriveStation: "",
    trainNumber: "0",//车次
    durationStr: "",//运行时间
    tickets: [],//座次,
    isScheduleVisible: false,//时刻表
    searchParsed: false,//是否解析成功
  },
  mutations: {
    [DEPART_DATE](state, payload) {
      state.departDate = payload;
    },
    [DURATION_STR](state, payload) {
      state.durationStr = payload;
    },
    [ARRIVE_DATE](state, payload) {
      state.arriveDate = payload;
    },
    [DEPART_TIME_STR](state, payload) {
      state.departTimeStr = payload;
    },
    [ARRIVE_TIME_STR](state, payload) {
      state.arriveTimeStr = payload;
    },
    [DEPART_STATION](state, payload) {
      state.departStation = payload;
    },
    [ARRIVE_STATION](state, payload) {
      state.arriveStation = payload;
    },
    [TRAIN_NUMBER](state, payload) {
      state.trainNumber = payload;
    },
    [TICKETS](state, payload) {
      state.tickets = payload;
    },
    [IS_SCHEDULE_VISIBLE](state, payload) {
      state.isScheduleVisible = payload;
    },
    [SEARCH_PARSED](state, payload) {
      state.searchParsed = payload;
    },
  },
  actions: {
    ACTION_SET_DEPART_DATE({commit, state}, depart_date) {
      commit(DEPART_DATE, depart_date);
    },
    ACTION_SET_ARRIVE_DATE({commit, state}, arrive_date) {
      commit(ARRIVE_DATE, arrive_date);
    },
    ACTION_SET_DEPART_TIME_STR({commit, state}, depart_time_str) {
      commit(DEPART_TIME_STR, depart_time_str);
    },
    ACTION_SET_ARRIVE_TIME_STR({commit, state}, arrive_time_str) {
      commit(ARRIVE_TIME_STR, arrive_time_str);
    },
    ACTION_SET_DEPART_STATION({commit, state}, depart_station) {
      commit(DEPART_STATION, depart_station);
    },
    ACTION_SET_ARRIVE_STATION({commit, state}, arrive_station) {
      commit(ARRIVE_STATION, arrive_station);
    },
    ACTION_SET_TRAIN_NUMBER({commit, state}, train_number) {
      commit(TRAIN_NUMBER, train_number);
    },
    ACTION_SET_TICKETS({commit, state}, tickets) {
      commit(TICKETS, tickets);
    },
    ACTION_SET_SET_SCHEDULE_VISIBLE({commit, state}, is_schedule_visible) {
      commit(IS_SCHEDULE_VISIBLE, is_schedule_visible);
    },
    ACTION_SET_TOGGLE_SCHEDULE_VISIBLE({commit, state}) {
      commit(IS_SCHEDULE_VISIBLE, !state.isScheduleVisible);
    },
    ACTION_SET_SEARCH_PARSED({commit, state}, search_parsed) {
      commit(SEARCH_PARSED, search_parsed);
    },
    ACTION_SET_DURATION_STR({commit, state}, duration_str) {
      commit(DURATION_STR, duration_str);
    },
    ACTION_SET_NEXT_DATE({commit, state}) {
      commit(DEPART_DATE, h0(state.departDate) + 86400 * 1000);
    },
    ACTION_SET_PREV_DATE({commit, state}) {
      commit(DEPART_DATE, h0(state.departDate) - 86400 * 1000);
    },
  },
};
export { ticket };
