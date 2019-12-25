import { Effect } from 'dva';
import { Reducer } from 'redux';
import { getArticle,deleteData } from '../services/article';

// import { queryCurrent, query as queryArticles } from '@/services/Article';

export interface CurrentArticle {
  // avatar?: string;
  // name?: string;
  // title?: string;
  // group?: string;
  // signature?: string;
  // tags?: {
  //   key: string;
  //   label: string;
  // }[];
  // Articleid?: string;
  // unreadCount?: number;
}

export interface ArticleModelState {
  // currentArticle?: CurrentArticle;
}

export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  effects: {
    getArticleData: Effect;
    deleteArticleData: Effect;
  };
  reducers: {
    changeArticleData:Reducer<ArticleModelState>;
  };
}

const ArticleModel: ArticleModelType = {
  namespace: 'article',

  state: {
    msg:'hello',
    articleData: [],
  },

  effects: {
    *getArticleData(_, { call, put }) {
      let res = yield call(getArticle,_.payload);
      yield put({
        type:'changeArticleData',
        payload:res.data.list,
      });
    },
    
    *deleteArticleData(_, { call, put }) {
      // console.log(2);
      yield call(deleteData,_.payload);
      yield put({
        type:'getArticleData',
        payload:{
          page:0,
          pageSize:100,
        },
      });
    },

    // *fetch(_, { call, put }) {
    //   const response = yield call(queryArticles);
    //   yield put({
    //     type: 'save',
    //     payload: response,
    //   });
    // },
    // *fetchCurrent(_, { call, put }) {
    //   const response = yield call(queryCurrent);
    //   yield put({
    //     type: 'saveCurrentArticle',
    //     payload: response,
    //   });
    // },
  },

  reducers: {
    changeArticleData(state,action){
      return {
        ...state,
        articleData:action.payload,
      };
    },
  },
};

export default ArticleModel;
