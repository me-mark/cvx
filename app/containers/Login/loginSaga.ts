import { notification } from "antd";
import { ActionType } from "typesafe-actions";
import { put, select, takeLatest } from "redux-saga/effects";
import { RoutePaths } from "containers/App/routes";
import { callApi } from "utils/apiUtils";
import globalKeys from "types/globalKeys";
import loginActionTypes from './loginConstants';
import { getAgGroupInfo, getCustomerInfo } from "./loginActions";
import { AgGroupModel, CustomerInfoModel, UserInfoModel } from "./loginTypes";
import Axios from 'axios';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function* loginManual(action) {
  try {
    let loginCredential = {
      email: action.loginInfo.username,
      password: action.loginInfo.password,
    };

    const loginResponse = yield Axios.post(`${process.env.PUBLIC_API}Auth/Login`, loginCredential);
    // callApi(`Auth/Login`, 'POST', loginCredential);
    const { userInfo, token } = loginResponse.data;
    const { id, userName, email, userId } = userInfo;
    const { value: tokenValue } = token;
    if (email === loginCredential.email) {
      const currentRoute = window.location.pathname;
      const fullName = currentRoute.includes(RoutePaths.SOP) ? 'Marvel Group' : userName;
      yield put({
        type: loginActionTypes.CHECK_LOGIN_MANUAL_SUCCESS,
        userInfo: { ...userInfo, fullName },
        isLoggedIn: true,
      });
      let modifiedUserInfo: UserInfoModel = {
        userId: userId,
        fullName: fullName || '',
        email: email,
        username: userName,
        loginId: id,
      };
      localStorage.setItem(globalKeys.USER_INFO_KEY, JSON.stringify(modifiedUserInfo));
      localStorage.setItem(globalKeys.ACCESS_TOKEN, tokenValue);
      yield put({ type: loginActionTypes.GET_CUSTOMER_INFO, payload: { userId: modifiedUserInfo.userId } });
    } else {
      notification.error({
        message: "Login Failed",
        description: "The username or password you entered is invalid.",
      });

      yield put({
        type: loginActionTypes.CHECK_LOGIN_MANUAL_FAILED,
        isloginError: true,
      });
    }
  } catch (error) {
    yield put({
      type: loginActionTypes.CHECK_LOGIN_MANUAL_FAILED,
      error,
    });
  }
}

function* getAuthModuleListSaga() {
  try {
    // Hard code userId=1 to wait new endpoint
    // const userInfo = getLocalStorageUserInfo();
    const data = yield callApi(`Auth/menu?UserId=1`, 'GET');
    yield sleep(500);
    yield put({
      type: loginActionTypes.GET_AUTH_MODULE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
  }
}

function* logout() {
  try {
    const store = yield select();
    const userInfo = store.login.userInfo;
    const logoutBody = { userId: userInfo?.loginId };
    yield callApi(`Auth/Logout`, 'POST', logoutBody);
    yield localStorage.removeItem(globalKeys.ACCESS_TOKEN);
    yield localStorage.removeItem(globalKeys.USER_INFO_KEY);
    yield localStorage.removeItem(globalKeys.CUSTOMER_INFO_KEY);
    yield localStorage.removeItem(globalKeys.AGGROUP_INFO_KEY);

    yield put({ type: loginActionTypes.LOGOUT_SUCCESS });
  } catch {
    put({ type: loginActionTypes.LOGOUT_FAILED });
  }
}

function* getCustomerInfoSaga(action: ActionType<typeof getCustomerInfo>) {
  try {
    // Hard code userId=1 to wait new endpoint
    // const { payload } = action;
    // const customerInfo: CustomerInfoModel = yield callApi(`Auth/Customer?UserId=${payload.userId}`, 'GET');
    const customerInfo: CustomerInfoModel = yield callApi(`Auth/Customer?UserId=1`, 'GET')
    if (customerInfo) {
      yield put({
        type: loginActionTypes.GET_CUSTOMER_INFO_SUCCESS,
        payload: customerInfo
      })
      yield put({ type: loginActionTypes.GET_AGROUP_INFO, payload: { customerId: customerInfo.customerId } });
      localStorage.setItem(globalKeys.CUSTOMER_INFO_KEY, JSON.stringify(customerInfo));
    }
  } catch {
    put({ type: loginActionTypes.LOGOUT_FAILED });
  }
}

function* getAgroupInfoSaga(action: ActionType<typeof getAgGroupInfo>) {
  try {
    const { payload } = action;
    const agGroupInfo: AgGroupModel = yield callApi(`Auth/AgGroup?CustomerId=${payload.customerId}`, 'GET')
    if (agGroupInfo) {
      yield put({
        type: loginActionTypes.GET_AGROUP_INFO_SUCCESS,
        payload: agGroupInfo
      })
      localStorage.setItem(globalKeys.AGGROUP_INFO_KEY, JSON.stringify(agGroupInfo));
    }
  } catch {
    put({ type: loginActionTypes.LOGOUT_FAILED });
  }
}

export default function* loginSaga() {
  yield takeLatest(loginActionTypes.CHECK_LOGIN_MANUAL, loginManual);
  yield takeLatest(loginActionTypes.LOGOUT, logout);
  yield takeLatest(loginActionTypes.GET_AUTH_MODULE_LIST, getAuthModuleListSaga);
  yield takeLatest(loginActionTypes.GET_CUSTOMER_INFO, getCustomerInfoSaga);
  yield takeLatest(loginActionTypes.GET_AGROUP_INFO, getAgroupInfoSaga);
}