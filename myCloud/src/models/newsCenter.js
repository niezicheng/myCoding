import { querynewsCenter,addOrUpdateNews,deleteNews } from '@/services/newsCenter';

const NewsCenterModel = {

  namespace: 'newsCenter',

  state: {
    newsCenterData:[],
    total:0,
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    //异步获取logs数据信息并将返回结果分发给同步generator函数同步store中state的数据
    *fetchLoadNewsCenter(_, { call, put }) {
      const res = yield call(querynewsCenter,_.payload);
      yield put({
        type: 'changeNewsCenterData',
        payload: res.data,
      });
    },

    *fetchAddOrUpdateNews(_, { call, put }) {
      yield call(addOrUpdateNews,_.payload.values);
      yield put({
        type: 'fetchLoadNewsCenter',
        payload:_.payload.page,
      });
    },

    *fetchDeleteNews(_,{ call, put }){
      yield call(deleteNews,_.payload.param);
      yield put({
        type:'fetchLoadNewsCenter',
        payload:_.payload.page,
      });
    }

  },

  //同步更行state中的数据
  reducers: {
    changeNewsCenterData(state, action) {
      return { 
        ...state, 
        newsCenterData: action.payload.list,
        total:action.payload.total,
      };
    },

  },
};

export default NewsCenterModel;
