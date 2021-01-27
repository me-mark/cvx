import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from './constants';
import { USER_INFO_KEY } from "../containers/App/constants";
import globalKeys from 'types/globalKeys';

export default {
  /**
   * Get cookie
   * @param {String} key
   * @returns {Object} Cookie
   */
  getCookie(key) {
    return Cookies.get(key);
  },

  getCookieJson(key) {
    return Cookies.getJSON(key);
  },

  /**
   * Set cookie
   * @param {String} key
   * @param {Object} value
   * @param {Object} options
   */
  setCookie(key, value, options) {
    Cookies.set(key, value, options);
  },

  /**
   * Remove cookie.
   * @param  {String} key
   * @param  {Object} options
   */
  removeCookie(key, options) {
    Cookies.remove(key, options);
  },

  /**
   * Set access token
   * @param {String} token
   */
  setAccessToken(token) {
    localStorage.setItem(ACCESS_TOKEN, token);
  },

  /**
   * Get current token
   * @returns {Object} token
   */
  getAccessToken() {
    return localStorage.getItem(globalKeys.ACCESS_TOKEN);
  },

  /**
   * Remove access token
   */
  removeAccessToken() {
    localStorage.removeItem(globalKeys.ACCESS_TOKEN);
  },

  /**
   * Get user info
   */
  getUserInfo() {
    return localStorage.getItem(USER_INFO_KEY);
  },
    /**
   * Set user info
   */
  setUserInfo(profile) {
    return localStorage.setItem(USER_INFO_KEY, profile);
  },
};
