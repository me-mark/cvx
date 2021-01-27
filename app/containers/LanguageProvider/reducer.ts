/*
 *
 * LanguageProvider reducer
 *
 */
import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';
import { DEFAULT_LOCALE } from '../../locales';
import cacheUtils from 'utils/cacheUtils';
const userInfo = cacheUtils.getUserInfo();
const setLaguageInit = () => {
  if (userInfo) {
    const userInfoJson = JSON.parse(userInfo);
    if (userInfoJson.profile && userInfoJson.profile.language) {
      return userInfoJson.profile.language;
    } else {
      return DEFAULT_LOCALE;
    }
  } else {
    return DEFAULT_LOCALE;
  }
};
export const initialState: ContainerState = {
  locale: setLaguageInit(),
};
function languageProviderReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_LOCALE:
      return {
        locale: action.payload,
      };
    default:
      return state;
  }
}
export default languageProviderReducer;
