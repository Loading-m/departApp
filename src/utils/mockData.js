// Mock数据 - 火车票查询应用
import { h0 } from './fp';

// 城市数据
export const cities = [
  { name: '北京', key: 'beijing' },
  { name: '上海', key: 'shanghai' },
  { name: '广州', key: 'guangzhou' },
  { name: '深圳', key: 'shenzhen' },
  { name: '杭州', key: 'hangzhou' },
  { name: '南京', key: 'nanjing' },
  { name: '武汉', key: 'wuhan' },
  { name: '成都', key: 'chengdu' },
  { name: '西安', key: 'xian' },
  { name: '天津', key: 'tianjin' }
];

// 车次类型
export const trainTypes = [
  { text: 'G-高速动车', value: 1 },
  { text: 'D-动车', value: 5 },
  { text: 'T-特快', value: 2 },
  { text: 'K-快速', value: 3 },
  { text: '其他', value: 4 }
];

// 座位类型
export const ticketTypes = [
  { text: '硬座', value: 1 },
  { text: '硬卧', value: 2 },
  { text: '软座', value: 3 },
  { text: '软卧', value: 4 },
  { text: '二等座', value: 5 },
  { text: '一等座', value: 6 },
  { text: '商务座', value: 7 },
  { text: '无座', value: 8 }
];

// 车站数据
export const stations = [
  '北京站',
  '北京西站', 
  '北京南站',
  '上海站',
  '上海虹桥站',
  '广州站',
  '广州南站',
  '深圳北站',
  '杭州东站',
  '南京南站',
  '武汉站',
  '成都东站',
  '西安北站',
  '天津站'
];

// 模拟车次列表数据
export const mockTrainList = [
  {
    trainNumber: 'G1',
    departTime: '08:00',
    arriveTime: '12:30',
    duration: '4小时30分',
    departStation: '北京南站',
    arriveStation: '上海虹桥站',
    priceMsg: '553',
    ticketsInfo: {
      '商务座': { price: '1748', count: '有' },
      '一等座': { price: '933', count: '有' },
      '二等座': { price: '553', count: '有' }
    },
    date: h0(Date.now()),
    isHighSpeed: true
  },
  {
    trainNumber: 'G3',
    departTime: '09:00',
    arriveTime: '13:45',
    duration: '4小时45分',
    departStation: '北京南站',
    arriveStation: '上海虹桥站',
    priceMsg: '553',
    ticketsInfo: {
      '商务座': { price: '1748', count: '3' },
      '一等座': { price: '933', count: '有' },
      '二等座': { price: '553', count: '有' }
    },
    date: h0(Date.now()),
    isHighSpeed: true
  },
  {
    trainNumber: 'D311',
    departTime: '14:20',
    arriveTime: '22:35',
    duration: '8小时15分',
    departStation: '北京站',
    arriveStation: '上海站',
    priceMsg: '234',
    ticketsInfo: {
      '软卧': { price: '427', count: '有' },
      '硬卧': { price: '275', count: '7' },
      '硬座': { price: '141', count: '有' }
    },
    date: h0(Date.now()),
    isHighSpeed: false
  },
  {
    trainNumber: 'K21',
    departTime: '18:38',
    arriveTime: '09:20',
    duration: '14小时42分',
    departStation: '北京站',
    arriveStation: '上海站',
    priceMsg: '156',
    ticketsInfo: {
      '软卧': { price: '427', count: '无' },
      '硬卧': { price: '275', count: '2' },
      '硬座': { price: '156', count: '有' },
      '无座': { price: '156', count: '有' }
    },
    date: h0(Date.now()),
    isHighSpeed: false
  },
  {
    trainNumber: 'G7',
    departTime: '16:00',
    arriveTime: '20:28',
    duration: '4小时28分',
    departStation: '北京南站',
    arriveStation: '上海虹桥站',
    priceMsg: '553',
    ticketsInfo: {
      '商务座': { price: '1748', count: '无' },
      '一等座': { price: '933', count: '15' },
      '二等座': { price: '553', count: '有' }
    },
    date: h0(Date.now()),
    isHighSpeed: true
  }
];

// 模拟订单数据
export const mockOrders = [
  {
    id: '2024010112345678',
    status: '已支付',
    trainNumber: 'G1',
    departDate: h0(Date.now() + 86400000), // 明天
    departTime: '08:00',
    arriveTime: '12:30',
    departStation: '北京南站',
    arriveStation: '上海虹桥站',
    seatType: '二等座',
    seatNumber: '02车06A',
    passengerName: '张三',
    idNumber: '110101199001010001',
    price: 553,
    createTime: Date.now() - 3600000 // 1小时前
  },
  {
    id: '2024010112345679',
    status: '已出票',
    trainNumber: 'G15',
    departDate: h0(Date.now() + 172800000), // 后天
    departTime: '10:15',
    arriveTime: '14:42',
    departStation: '北京南站',
    arriveStation: '上海虹桥站',
    seatType: '一等座',
    seatNumber: '01车03A',
    passengerName: '李四',
    idNumber: '110101199002020002',
    price: 933,
    createTime: Date.now() - 7200000 // 2小时前
  }
];

// 热门路线
export const hotRoutes = [
  { from: '北京', to: '上海', count: 1234 },
  { from: '北京', to: '广州', count: 987 },
  { from: '上海', to: '深圳', count: 876 },
  { from: '北京', to: '西安', count: 765 },
  { from: '上海', to: '杭州', count: 654 },
  { from: '广州', to: '深圳', count: 543 }
];

// 模拟API延迟
export const delay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// 模拟车次搜索API
export const searchTrains = async (params) => {
  await delay(800);
  
  // 根据参数过滤数据
  let result = [...mockTrainList];
  
  if (params.highSpeed) {
    result = result.filter(train => train.isHighSpeed);
  }
  
  if (params.onlyTickets) {
    result = result.filter(train => {
      return Object.values(train.ticketsInfo).some(ticket => 
        ticket.count !== '无' && ticket.count !== '0'
      );
    });
  }
  
  return {
    success: true,
    data: result,
    message: '查询成功'
  };
};

// 模拟获取城市列表API
export const getCities = async () => {
  await delay(300);
  return {
    success: true,
    data: cities,
    message: '获取城市列表成功'
  };
};

// 模拟获取订单列表API
export const getOrders = async () => {
  await delay(500);
  return {
    success: true,
    data: mockOrders,
    message: '获取订单列表成功'
  };
};

// 模拟提交订单API
export const submitOrder = async (orderData) => {
  await delay(1500);
  
  const newOrder = {
    id: Date.now().toString(),
    status: '待支付',
    ...orderData,
    createTime: Date.now()
  };
  
  return {
    success: true,
    data: newOrder,
    message: '订单提交成功'
  };
}; 