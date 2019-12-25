import { findArticle } from '../services/article';

export default {

  namespace: 'article',

  state: {
    msg:'hello',
    articleData:[]
  },

  //异步action
  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },


    //payload：action.payload 
    //call：调用service层中的方法。service里面是异步请求
    //put：转发action的
    *getData({ payload }, { call, put }){
      //call的第一个参数是service层的方法，第二个参数是service层的方法需要的参数
      let res = yield call(findArticle,payload);
      yield put({
        type:'changeArticleData',
        payload:res
      });
    },
  },
  //同步action
  reducers: {
    //changeMsg就是action的type
    changeMsg(state,action){
      return {
        ...state,
        msg: action.payload
      }
    },
    changeArticleData(state,action){
      return {
        ...state,
        articleData: action.payload
      }
    },


  },

};
