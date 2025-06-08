import { getCities } from '@/utils/mockData';

let index = {
  namespaced: true,
  state: {
    froms: '北京',
    to: '上海',
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    highSpeed: false,
    departDate: Date.now()
  },
  mutations: {
    froms(state, payload) {
      state.froms = payload;
    },
    to(state, payload) {
      state.to = payload;
    },
    isCitySelectorVisible(state, payload) {
      state.isCitySelectorVisible = payload;
    },
    currentSelectingLeftCity(state, payload) {
      state.currentSelectingLeftCity = payload;
    },
    cityData(state, payload) {
      state.cityData = payload;
    },
    isLoadingCityData(state, payload) {
      state.isLoadingCityData = payload;
    },
    isDateSelectorVisible(state, payload) {
      state.isDateSelectorVisible = payload;
    },
    highSpeed(state, payload) {
      state.highSpeed = payload;
    },
    departDate(state, payload) {
      state.departDate = payload;
    },
    exchangeFromsTo(state, payload) {
      state.froms = payload.to;
      state.to = payload.froms;
    }
  },
  actions: {
    async fetch_city_data({dispatch, commit, state}) {
      if (state.isLoadingCityData) {
        return;
      }
      const cache = JSON.parse(localStorage.getItem('city_data_cache') || '{}');
      if (Date.now() <= cache.expires) {
        dispatch('set_city_data', cache.data);
        return;
      }
      dispatch('set_is_loading_city_data', true);
      
      try {
        // 使用mock数据
        const result = await getCities();
        if (result.success) {
          await dispatch('set_city_data', result.data);
          localStorage.setItem(
            'city_data_cache', JSON.stringify({
              expires: Date.now() + 60 * 1000,
              data: result.data
            })
          );
        }
      } catch (error) {
        console.error('获取城市数据失败:', error);
      } finally {
        await dispatch('set_is_loading_city_data', false);
      }
    },
    set_froms({commit}, froms) {
      commit('froms', froms);
    },
    set_to({commit}, to) {
      commit('to', to);
    },
    exchange_froms_to({commit, state}) {
      commit('exchangeFromsTo', {
        froms: state.froms,
        to: state.to
      });
    },
    set_is_city_selector_visible({commit}, is_city_selector_visible) {
      commit('isCitySelectorVisible', is_city_selector_visible);
    },
    set_city_data({commit}, city_data) {
      commit('cityData', city_data);
    },
    set_is_loading_city_data({commit}, is_loading_city_data) {
      commit('isLoadingCityData', is_loading_city_data);
    },
    set_current_selecting_left_city({commit}, current_selecting_left_city) {
      commit('currentSelectingLeftCity', current_selecting_left_city);
    },
    toggle_high_speed({commit, state}) {
      commit('highSpeed', !state.highSpeed);
    },
    set_is_date_selector_visible({commit}, is_date_selector_visible) {
      commit('isDateSelectorVisible', is_date_selector_visible);
    },
    set_depart_date({commit, state}, depart_date) {
      commit('departDate', depart_date);
    },
    set_selected_city({dispatch, commit, state}, city) {
      const {currentSelectingLeftCity} = state;
      if (currentSelectingLeftCity) {
        dispatch('set_froms', city);
      } else {
        dispatch('set_to', city);
      }
      dispatch('set_is_city_selector_visible', false);
    },
    show_city_selector({dispatch, commit, state}, currentSelectingLeftCity) {
      dispatch('set_is_city_selector_visible', true);
      dispatch('set_current_selecting_left_city', currentSelectingLeftCity);
    }
  },
};
export { index };
