import { queryAccount } from '@/services/account';

const AccountModel = {

  namespace: 'account',

  state: {
    accountData:[],
    total:0,
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    *fetchLoadAccount(_, { call, put }) {
      const res = yield call(queryAccount,_.payload);
      yield put({
        type: 'changeAccountData',
        payload: res.data,
      });
    },

  },

  //同步更行state中的数据
  reducers: {
    changeAccountData(state, action) {
      return { 
        ...state, 
        accountData: action.payload.list,
        total:action.payload.total,
      };
    },
  },
};

export default AccountModel;
