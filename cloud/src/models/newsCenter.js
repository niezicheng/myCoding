import { queryNewsCenter,deleteNews,addNews } from '@/services/newsCenter';

const NewsModel = {

  namespace: 'newsCenter',

  state: {
    newsData:[],
    total:0,
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    //异步获取logs数据信息并将返回结果分发给同步generator函数同步store中state的数据
    *fetchLoadNews(_, { call, put }) {
      const res = yield call(queryNewsCenter,_.payload);
      yield put({
        type: 'changeNewsData',
        payload: res.data,
      });
    },

    *fetchDeleteNews(_, { call, put }) {
      yield call(deleteNews,_.payload.parems);
      yield put({
        type: 'fetchLoadNews',
        payload:_.payload.page,
      });
    },

    *fetchAddNews(_, { call, put }) {
      yield call(addNews,_.payload.value);
      yield put({
        type: 'fetchLoadNews',
        payload:_.payload.page,
      });
    },

  },

  //同步更行state中的数据
  reducers: {
    changeNewsData(state, action) {
      return { 
        ...state, 
        newsData: action.payload.list,
        total:action.payload.total,
      };
    },

  },
};

export default NewsModel;
