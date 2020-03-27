import {
  TRAIN_NUMBER,
  DEPART_STATION,
  ARRIVE_STATION,
  SEAT_TYPE,
  DEPART_DATE,
  ARRIVE_DATE,
  DEPART_TIME_STR,
  ARRIVE_TIME_STR,
  DURATION_STR,
  PRICE,
  PASSENGERS,
  MENU,
  IS_MENU_VISIBLE,
  SEARCH_PARSED,
  PASSENGER_ID_SEED
} from './mutation-types';

let order = {
  namespaced: true,
  state: {
    trainNumber: "0",
    departStation: "",
    arriveStation: "",
    seatType: "",
    departDate: Date.now(),
    arriveDate: Date.now(),
    //异步
    departTimeStr: "",
    arriveTimeStr: "",
    durationStr: "",
    price: 0,
    //乘客信息
    passengers: [],
    menu: null,
    isMenuVisible: false,
    searchParsed: false,
    passengerIdSeed: 0
  },
  mutations: {
    [TRAIN_NUMBER](state, payload) {
      state.trainNumber = payload;
    },
    [DEPART_STATION](state, payload) {
      state.departStation = payload;
    },
    [ARRIVE_STATION](state, payload) {
      state.arriveStation = payload;
    },
    [SEAT_TYPE](state, payload) {
      state.seatType = payload;
    },
    [DEPART_DATE](state, payload) {
      state.departDate = payload;
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
    [DURATION_STR](state, payload) {
      state.durationStr = payload;
    },
    [PRICE](state, payload) {
      state.price = payload;
    },
    [PASSENGERS](state, payload) {
      state.passengers = payload;
    },
    [MENU](state, payload) {
      state.menu = payload;
    },
    [IS_MENU_VISIBLE](state, payload) {
      state.isMenuVisible = payload;
    },
    [SEARCH_PARSED](state, payload) {
      state.searchParsed = payload;
    },
    [PASSENGER_ID_SEED](state, payload) {
      state.passengerIdSeed = payload;
    },
  },
  actions: {
    ACTION_SET_TRAIN_NUMBER({commit, state}, train_number) {
      commit(TRAIN_NUMBER, train_number);
    },
    ACTION_SET_DEPART_STATION({commit, state}, depart_station) {
      commit(DEPART_STATION, depart_station);
    },
    ACTION_SET_ARRIVE_STATION({commit, state}, arrive_station) {
      commit(ARRIVE_STATION, arrive_station);
    },
    ACTION_SET_SEAT_TYPE({commit, state}, seat_type) {
      commit(SEAT_TYPE, seat_type);
    },
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
    ACTION_SET_DURATION_STR({commit, state}, duration_str) {
      commit(DURATION_STR, duration_str);
    },
    ACTION_SET_PRICE({commit, state}, price) {
      commit(PRICE, price);
    },
    ACTION_SET_PASSENGERS({commit, state}, passengers) {
      commit(PASSENGERS, passengers);
    },
    ACTION_SET_MENU({commit, state}, menu) {
      commit(MENU, menu);
    },
    ACTION_SET_IS_MENU_VISIBLE({commit, state}, is_menu_visible) {
      commit(IS_MENU_VISIBLE, is_menu_visible);
    },
    ACTION_SET_SEARCH_PARSED({commit, state}, search_parsed) {
      commit(SEARCH_PARSED, search_parsed);
    },
    ACTION_REMOVE_PASSENGER({dispatch, commit, state}, id) {
      const passengers = state.passengers;
      const newPassengers = passengers.filter(passenger => {
        return passenger.id !== id && passenger.followAdult !== id;
      });
      dispatch("ACTION_SET_PASSENGERS", newPassengers);
    },
    ACTION_SHOW_MENU({dispatch, commit, state}, menu) {
      dispatch('ACTION_SET_MENU', menu);
      dispatch('ACTION_SET_IS_MENU_VISIBLE', true);
    },
    ACTION_SHOW_GENDER_MENU({dispatch, commit, state}, id) {
      const passengers = state.passengers;
      const passenger = passengers.find(passenger => {
        return passenger.id === id;
      });
      if (!passenger) {
        return;
      }
      dispatch('ACTION_SHOW_MENU', {
        onPress(gender) {
          dispatch('ACTION_UPDATE_PASSENGER', {id: passenger.id, data: {gender}});
          dispatch('ACTION_HIDE_MENU');
        },
        options: [
          {
            title: '男',
            value: 'male',
            active: 'male' === passenger.gender
          },
          {
            title: '女',
            value: 'female',
            active: 'female' === passenger.gender
          }
        ]
      });
    },
    ACTION_SHOW_FOLLOW_ADULT_MENU({dispatch, commit, state}, id) {
      const passengers = state.passengers;
      const passenger = passengers.find(passenger => {
        return passenger.id === id;
      });
      if (!passenger) {
        return;
      }
      dispatch('ACTION_SHOW_MENU', {
        onPress(followAdultId) {
          const curPassengers = passengers.filter(passenger => passenger.id === followAdultId);
          dispatch('ACTION_UPDATE_PASSENGER', {
            id: passenger.id,
            data: {followAdult: {id: followAdultId, name: curPassengers.name}}
          });
          dispatch('ACTION_HIDE_MENU');
        },
        options: passengers.filter(passenger => passenger.ticketType === 'adult').map(adult => {
          return {
            title: adult.name,
            value: adult.id,
            active: adult.id === passenger.followAdult.id
          };
        })
      });
    },
    ACTION_SHOW_TICKET_TYPE_MENU({dispatch, commit, state}, id) {
      const passengers = state.passengers;
      const passenger = passengers.find(passenger => {
        return passenger.id === id;
      });
      if (!passenger) {
        return;
      }
      dispatch('ACTION_SHOW_MENU', {
        onPress(ticketType) {
          if ('adult' === ticketType) {
            dispatch('ACTION_UPDATE_PASSENGER', {
              id: passenger.id,
              data: {licenceNo: '', ticketType},
              keysToBeRemoved: ['gender', 'followAdult', 'birthday']
            });
          } else {
            const adult = passengers.find(passenger => passenger.id !== id && passenger.ticketType === 'adult');
            if (adult) {
              dispatch('ACTION_UPDATE_PASSENGER', {
                id: passenger.id,
                data: {ticketType, gender: '', followAdult: adult.id, birthday: ''},
                keysToBeRemoved: ['licenceNo']
              });
            } else {
              alert('没有其他成人乘客,不允许切换');
            }
          }
          dispatch('ACTION_HIDE_MENU');
        },
        options: [
          {
            title: '成人票',
            value: 'adult',
            active: 'adult' === passenger.ticketType
          },
          {
            title: '儿童票',
            value: 'child',
            active: 'child' === passenger.ticketType
          }
        ]
      });
    },
    ACTION_HIDE_MENU({dispatch, commit, state}) {
      dispatch('ACTION_SET_IS_MENU_VISIBLE', false);
    },
    ACTION_UPDATE_PASSENGER({dispatch, commit, state}, {id, data, keysToBeRemoved = []}) {
      const passengers = state.passengers;
      for (let i = 0; i < passengers.length; i++) {
        if (passengers[i].id === id) {
          let newPassengers = [...passengers];
          newPassengers[i] = Object.assign({}, passengers[i], data);
          for (let key of keysToBeRemoved) {
            delete newPassengers[i][key];
          }
          dispatch('ACTION_SET_PASSENGERS', newPassengers);
          break;
        }
      }
    },
    ACTION_SET_CREATE_ADULT({dispatch, commit, state}) {
      const passengers = state.passengers;
      for (let passenger of passengers) {
        const keys = Object.keys(passenger);
        for (let key of keys) {
          if (!passenger[key]) {
            alert('请完整填写当前已存在乘客的信息');
            return;
          }
        }
      }
      dispatch('ACTION_SET_PASSENGERS', [
        ...passengers,
        {
          id: ++state.passengerIdSeed,
          name: "",
          ticketType: 'adult',
          licenceNo: '',
          seat: 'Z'
        }
      ]);
    },
    ACTION_SET_CREATE_CHILD({dispatch, commit, state}) {
      const passengers = state.passengers;
      let adultFound = null;
      for (let passenger of passengers) {
        const keys = Object.keys(passenger);
        for (let key of keys) {
          if (!passenger[key]) {
            alert('请完整填写当前已存在乘客的信息');
            return;
          }
        }
        if (passenger.ticketType === 'adult') {
          adultFound = {id: passenger.id, name: passenger.name};
        }
      }
      if (!adultFound) {
        alert('请至少正确添加一个同行成人');
        return;
      }
      dispatch('ACTION_SET_PASSENGERS', [
        ...passengers,
        {
          id: ++state.passengerIdSeed,
          name: "",
          gender: 'none',
          birthday: '',
          followAdult: adultFound,
          ticketType: 'child',
          seat: 'Z'
        }
      ]);
    },
    ACTION_FETCH_INITIAL({dispatch, commit, state}, url) {
      fetch(url).then(res => {
        res.json().then(data => {
          const {
            departTimeStr,
            arriveTimeStr,
            arriveDate,
            price,
            durationStr
          } = data;
          dispatch('ACTION_SET_DEPART_TIME_STR', departTimeStr);
          dispatch('ACTION_SET_ARRIVE_TIME_STR', arriveTimeStr);
          dispatch('ACTION_SET_ARRIVE_DATE', arriveDate);
          dispatch('ACTION_SET_PRICE', price);
          dispatch('ACTION_SET_DURATION_STR', durationStr);
        });
      });
    }
  },
};
export { order };
