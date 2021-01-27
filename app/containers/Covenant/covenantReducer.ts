/*
 *
 * Covenant reducer
 *
 */

import { CovenantActionTypes } from './covenantConstants';
import { ContainerState } from './covenantTypes';

export const initialState: ContainerState = {
  covenantActiveKey: null,
  covenantDetails: {},
  covenantList: []
};

function covenantReducer(
  state: ContainerState = initialState,
  action: any,
): ContainerState {
  switch (action.type) {
    case CovenantActionTypes.GET_COVENANT_LIST_SUCCESS:
      return { ...state, covenantList: action.covenantList };
    case CovenantActionTypes.GET_COVENANT_DETAILS_SUCCESS:
      return { ...state, covenantDetails: action.covenantDetails };
    case CovenantActionTypes.SET_COVENANT_ACTIVE_KEY:
      return { ...state, covenantActiveKey: action.covenantActiveKey };
    default:
      return state;
  }
}

export default covenantReducer;
