/*
 *
 * AddLogin reducer
 *
 */

import objectAssign from "object-assign";
import globalKeys from 'types/globalKeys';
import loginActionTypes from './loginConstants';
import { ContainerState } from './loginTypes';

export const initialState: ContainerState = {
  password: null,
  isLoggedIn: !!localStorage.getItem(globalKeys.USER_INFO_KEY),
  userInfo: JSON.parse(localStorage.getItem(globalKeys.USER_INFO_KEY) || '{}'),
  authModuleList: [],
  customerInfo: JSON.parse(localStorage.getItem(globalKeys.CUSTOMER_INFO_KEY) || '{}'),
  agGroupInfo: JSON.parse(localStorage.getItem(globalKeys.AGGROUP_INFO_KEY) || '{}'),
};

function loginReducer(
  state: ContainerState = initialState,
  action: any,
): ContainerState {
  switch (action.type) {
    case loginActionTypes.CHECK_LOGIN_MANUAL_SUCCESS:
      return objectAssign({}, state, {
        isLoggedIn: action.isLoggedIn,
        userInfo: action.userInfo,
      });
    case loginActionTypes.LOGOUT_SUCCESS:
      return objectAssign({}, state, {
        isLoggedIn: false,
        userInfo: null,
      });
    case loginActionTypes.CHECK_LOGIN_MANUAL_FAILED:
      return objectAssign({}, state, { isloginError: action.isloginError });
    case loginActionTypes.GET_AUTH_MODULE_LIST_SUCCESS:
      return objectAssign({}, state, { authModuleList: action.payload });
    case loginActionTypes.GET_CUSTOMER_INFO_SUCCESS:
      return { ...state, customerInfo: action.payload };
    case loginActionTypes.GET_AGROUP_INFO_SUCCESS:
      return { ...state, agGroupInfo: action.payload };
    default:
      return state;
  }
}

export default loginReducer;
