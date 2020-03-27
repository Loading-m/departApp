import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { index } from './index/index.js';
import { query } from './query/index.js';
import { ticket } from './ticket/index.js';
import { order } from './order/index.js';

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const persisted = createPersistedState({
  storage: window.sessionStorage,
  paths: ['index.froms', 'index.to', 'index.highSpeed', 'index.departDate', 'query.froms', 'query.to', 'query.departDate', 'query.highSpeed', 'query.trainList', 'query.onlyTickets', 'ticket.departDate', 'ticket.departStation', 'ticket.arriveStation', 'ticket.trainNumber'],
});
const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    index: index,
    query: query,
    ticket: ticket,
    order: order,
  },
  plugins: debug ? [createLogger(), persisted] : [persisted]
});
