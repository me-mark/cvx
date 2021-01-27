import { CovenantActionTypes } from "./covenantConstants";

export function getCovenantList() {
  return {
    type: CovenantActionTypes.GET_COVENANT_LIST,
  };
}

export function getCovenantListSuccess(covenantList) {
  return {
    type: CovenantActionTypes.GET_COVENANT_LIST_SUCCESS,
    covenantList,
  };
}

export function getCovenantListFailed() {
  return {
    type: CovenantActionTypes.GET_COVENANT_LIST_FAILED,
  };
}

export function getCovenantDetails(covenantId) {
  return {
    type: CovenantActionTypes.GET_COVENANT_DETAILS,
    covenantId,
  };
}

export function getCovenantDetailsSuccess(covenantDetails) {
  return {
    type: CovenantActionTypes.GET_COVENANT_DETAILS_SUCCESS,
    covenantDetails,
  };
}

export function getCovenantDetailsFailed() {
  return {
    type: CovenantActionTypes.GET_COVENANT_DETAILS_FAILED,
  };
}

export function setCovenantActiveKey(covenantActiveKey) {
  return {
    type: CovenantActionTypes.SET_COVENANT_ACTIVE_KEY,
    covenantActiveKey,
  };
}
