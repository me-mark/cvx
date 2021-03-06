/*
 *
 * AddLogin constants
 *
 */

enum LoginActionTypes {
  CHECK_LOGIN_MANUAL = "CHECK_LOGIN_MANUAL",
  CHECK_LOGIN_MANUAL_SUCCESS = "CHECK_LOGIN_MANUAL_SUCCESS",
  CHECK_LOGIN_MANUAL_FAILED = "CHECK_LOGIN_MANUAL_FAILED",

  LOGOUT = "LOGOUT",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  LOGOUT_FAILED = "LOGOUT_FAILED",

  GET_AUTH_MODULE_LIST = 'GET_AUTH_MODULE_LIST',
  GET_AUTH_MODULE_LIST_SUCCESS = 'GET_AUTH_MODULE_LIST_SUCCESS',

  GET_CUSTOMER_INFO = 'GET_CUSTOMER_INFO',
  GET_CUSTOMER_INFO_SUCCESS = 'GET_CUSTOMER_INFO_SUCCESS',

  GET_AGROUP_INFO = 'GET_AGROUP_INFO',
  GET_AGROUP_INFO_SUCCESS = 'GET_AGROUP_INFO_SUCCESS',
}

export default LoginActionTypes;
