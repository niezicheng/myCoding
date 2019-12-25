import { queryShopManage } from '@/services/shopManage';

const ShopManageModel = {

  namespace: 'shopManage',

  state: {
    shopManageData:[],
    total:0,
    record:[]
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    //异步获取logs数据信息并将返回结果分发给同步generator函数同步store中state的数据
    *fetchLoadShopManage(_, { call, put }) {
      // console.log(11111);
      const res = yield call(queryShopManage,_.payload);
      // console.log(res,'======')
      yield put({
        type: 'changeShopManageData',
        payload: res.data,
      });
    },

  },

  //同步更行state中的数据
  reducers: {
    changeShopManageData(state, action) {
      return { 
        ...state, 
        shopManageData: action.payload.list,
        total:action.payload.total,
      };
    },

    changeRecord(state,action){
      return {
        ...state,
        record:action.payload,
      }
    }

  },
};

export default ShopManageModel;
