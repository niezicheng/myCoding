import { queryOrder } from '@/services/order';

const OrderModel = {

  namespace: 'order',

  state: {
    orderData:[],
    total:0,
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    *fetchLoadOrder(_, { call, put }) {
      const res = yield call(queryOrder,_.payload);
      yield put({
        type: 'changeOrderData',
        payload: res.data,
      });
    },

  },

  //同步更行state中的数据
  reducers: {
    changeOrderData(state, action) {
      return { 
        ...state, 
        orderData: action.payload.list,
        total:action.payload.total,
      };
    },
  },
};

export default OrderModel;
