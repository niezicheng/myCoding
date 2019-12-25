import { querylogs } from '@/services/logs';

const StaffModel = {

  namespace: 'logs',

  state: {
    logsData:[],
    total:0,
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    //异步获取logs数据信息并将返回结果分发给同步generator函数同步store中state的数据
    *fetchLoadLogs(_, { call, put }) {
      const res = yield call(querylogs,_.payload);
      yield put({
        type: 'changeLogsData',
        payload: res.data,
      });
    },

  },

  //同步更行state中的数据
  reducers: {
    changeLogsData(state, action) {
      return { 
        ...state, 
        logsData: action.payload.list,
        total:action.payload.total,
      };
    },

  },
};

export default StaffModel;
