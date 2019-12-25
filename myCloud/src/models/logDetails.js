import { querylogDetails } from '@/services/logDetails';

const StaffModel = {

  namespace: 'logDetails',

  state: {
    logDetailsData:[],
    total:0,
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    //异步获取logDetails数据信息并将返回结果分发给同步generator函数同步store中state的数据
    *fetchLoadLogDetails(_, { call, put }) {
      const res = yield call(querylogDetails,_.payload);
      yield put({
        type: 'changeLogDetailsData',
        payload: res.data,
      });
    },

  },

  //同步更行state中的数据
  reducers: {
    changeLogDetailsData(state, action) {
      return { 
        ...state, 
        logDetailsData: action.payload.list,
        total:action.payload.total,
      };
    },

  },
};

export default StaffModel;
