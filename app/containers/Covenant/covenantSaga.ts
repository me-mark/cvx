import { put, select, takeEvery } from "redux-saga/effects";
import { CovenantActionTypes } from "./covenantConstants";
import { callApi } from "utils/apiUtils";

function* getCovenantList() {
  try {
    const store = yield select();
    const agGroupInfo = store.login.agGroupInfo;
    const covenantList = yield callApi(`covenants/aggroup?AggregationGroupId=${agGroupInfo?.aggregationGroupId}&maxRecordCount=0&pageNum=100`, 'GET',);

    yield put({
      type: CovenantActionTypes.GET_COVENANT_LIST_SUCCESS,
      covenantList,
    });
  } catch (error) {
    yield put({
      type: CovenantActionTypes.GET_COVENANT_LIST_FAILED,
      error,
    });
  }
}

function* getCovenantDetails(action) {
  try {
    const covenantDetails = yield callApi(`covenants/detail?CovenantId=${action.covenantId}`, 'GET')
    yield put({
      type: CovenantActionTypes.GET_COVENANT_DETAILS_SUCCESS,
      covenantDetails,
    });
  } catch (error) {
    yield put({
      type: CovenantActionTypes.GET_COVENANT_DETAILS_FAILED,
      error,
    });
  }
}

export default function* covenantSaga() {
  yield takeEvery("GET_COVENANT_LIST", getCovenantList);
  yield takeEvery("GET_COVENANT_DETAILS", getCovenantDetails);
}
