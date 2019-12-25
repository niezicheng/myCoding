import { queryStaff,changeStaffEnabled,addOrUpdateData } from '@/services/staff';

const StaffModel = {

  namespace: 'staff',

  state: {
    staffData:[],
    total:0,
  },

  //获取异步请求并分发同步action更改state中的数据信息
  effects: {
    *fetchLoadStaff(_, { call, put }) {
      // console.log(111111111);
      const res = yield call(queryStaff,_.payload);
      // console.log(res,'+++++++++++++');
      yield put({
        type: 'changeStaffData',
        payload: res.data,
      });
    },

    //改变状态【enabled】
    *fetchChangeStatus(_, { call, put }) {
      // console.log(_.payload,'========');
      yield call(changeStaffEnabled,_.payload.forms);
      yield put({
        type: 'fetchLoadStaff',
        payload: _.payload.page,
      });
    },

    //添加或修改数据
    *fetchAddOrUpdateData(_, { call, put }) {
      console.log(_.payload,'========');
      yield call(addOrUpdateData,_.payload.values);
      yield put({
        type: 'fetchLoadStaff',
        payload: _.payload.page,
      });
    },

  },

  //同步更行state中的数据
  reducers: {
    changeStaffData(state, action) {
      return { 
        ...state, 
        staffData: action.payload.list,
        total:action.payload.total,
      };
    },
  },
};

export default StaffModel;
