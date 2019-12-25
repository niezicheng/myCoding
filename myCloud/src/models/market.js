import { queryMarket,deleteMarket } from '@/services/Market';

const MarketModel = {

  namespace: 'market',

  state: {
    marketData:[],
    total:0,
    record:[]
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    *fetchLoadMarket(_, { call, put }) {
      // console.log(111111111);
      const res = yield call(queryMarket,_.payload);
      // console.log(res,'+++++++++++++');
      yield put({
        type: 'changeMarketData',
        payload: res.data,
      });
    },

    //异步删除数据
    // *fetchLoadMarket(_, { call, put }) {
    //   // console.log(111111111);
    //   const res = yield call(deleteMarket,_.payload.params);
    //   // console.log(res,'+++++++++++++');
    //   yield put({
    //     type: 'fetchLoadMarket',
    //     payload: _.payload.pages,
    //   });
    // },

  },



  //同步更行state中的数据
  reducers: {
    changeMarketData(state, action) {
      return { 
        ...state, 
        marketData: action.payload.list,
        total:action.payload.total,
      };
    },
    //更行state中的record数据
    changeRecord(state,action){
      return {
        ...state,
        record:action.payload,
      }
    }

  },
};

export default MarketModel;
