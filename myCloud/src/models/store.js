import { findStoreByBusinessId } from '@/services/store';

const StoreModel = {

  namespace: 'store',

  state: {
    storeData:[],
    total:0,
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    *fetchLoadStore(_, { call, put }) {
      const res = yield call(findStoreByBusinessId,_.payload);
      yield put({
        type: 'changeStoreData',
        payload: res.data,
      });
    },

  },

  //同步更行state中的数据
  reducers: {
    changeStoreData(state, action) {
      return { 
        ...state, 
        storeData: action.payload.list,
        total:action.payload.total,
      };
    },
  },
};

export default StoreModel;
