import { queryRechange } from '@/services/rechange';

const RechangeModel = {

  namespace: 'rechange',

  state: {
    rechangeData:[],
    total:0,
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    *fetchLoadRechange(_, { call, put }) {
      const res = yield call(queryRechange,_.payload);
      yield put({
        type: 'changeRechangeData',
        payload: res.data,
      });
    },

  },

  //同步更行state中的数据
  reducers: {
    changeRechangeData(state, action) {
      return { 
        ...state, 
        rechangeData: action.payload.list,
        total:action.payload.total,
      };
    },
  },
};

export default RechangeModel;
