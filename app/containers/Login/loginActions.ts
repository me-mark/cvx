
import { action } from 'typesafe-actions';
import LoginActionTypes from './loginConstants';
import { AgGroupModel, CustomerInfoModel } from './loginTypes';

export function checkLoginManual(loginInfo) {
  return {
    type: LoginActionTypes.CHECK_LOGIN_MANUAL,
    loginInfo,
  };
}

export function checkLoginManualSuccess(userInfo) {
  return {
    type: LoginActionTypes.CHECK_LOGIN_MANUAL_SUCCESS,
    userInfo,
  };
}

export function checkLoginManualFailed() {
  return {
    type: LoginActionTypes.CHECK_LOGIN_MANUAL_FAILED,
  };
}

export function logout() {
  return {
    type: LoginActionTypes.LOGOUT,
  };
}

export function logoutSuccess() {
  return {
    type: LoginActionTypes.LOGOUT_SUCCESS,
  };
}

export const getAuthModuleList = () => action(LoginActionTypes.GET_AUTH_MODULE_LIST);
export const getAuthModuleListSuccess = () => action(LoginActionTypes.GET_AUTH_MODULE_LIST_SUCCESS);

export const getCustomerInfo = (payload: { userId: number }) => action(LoginActionTypes.GET_CUSTOMER_INFO, payload);
export const getCustomerInfoSuccess = (payload: CustomerInfoModel) => action(LoginActionTypes.GET_CUSTOMER_INFO, payload);

export const getAgGroupInfo = (payload: { customerId: number }) => action(LoginActionTypes.GET_AGROUP_INFO, payload);
export const getAgGroupInfoSuccess = (payload: AgGroupModel) => action(LoginActionTypes.GET_AGROUP_INFO_SUCCESS, payload);
