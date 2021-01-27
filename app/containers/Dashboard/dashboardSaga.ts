import { put, select, takeLatest } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import { callApi } from "utils/apiUtils";
import { getDashboardCovenantSummary, getDashboardDocumentSummary } from "./dashboardActions";
import dashboardActionTypes from './dashboardConstants';

function* getDashboardCovenantSummarySaga() {
  try {
    const store = yield select();
    const agGroupInfo = store.login.agGroupInfo;
    const covenantSummary = yield callApi(`covenants/summary?AggregationGroupId=${agGroupInfo!.aggregationGroupId}`, 'GET',);
    yield put({
      type: dashboardActionTypes.GET_DASHBOARD_COVENENT_SUMMARY_SUCCESS,
      payload: covenantSummary,
    });
  } catch (error) {
    console.log(error);
  }
}
function* getDashboardSOPSummarySaga() {
  try {
    const SOPSummary = yield callApi(`sop/summary`, 'GET',);
    yield put({
      type: dashboardActionTypes.GET_DASHBOARD_SOP_SUMMARY_SUCCESS,
      payload: SOPSummary,
    });
  } catch (error) {

  }
}
function* getDashboardDocumentSummarySaga() {
  try {
    const store = yield select();
    const aggregationGroup = store.login.agGroupInfo;
    const documentSummary = yield callApi(`documents/summary?AggregatioGroupId=${aggregationGroup?.aggregationGroupId}`, 'GET',);
    yield put({
      type: dashboardActionTypes.GET_DASHBOARD_DOCUMENT_SUMMARY_SUCCESS,
      payload: documentSummary,
    });
  } catch (error) {

  }
}

export default function* dashboardSaga() {
  yield takeLatest(dashboardActionTypes.GET_DASHBOARD_COVENENT_SUMMARY, getDashboardCovenantSummarySaga)
  yield takeLatest(dashboardActionTypes.GET_DASHBOARD_SOP_SUMMARY, getDashboardSOPSummarySaga)
  yield takeLatest(dashboardActionTypes.GET_DASHBOARD_DOCUMENT_SUMMARY, getDashboardDocumentSummarySaga)
}