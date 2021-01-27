import { put, select, takeEvery } from "redux-saga/effects";
import { ComplianceActionTypes } from "./complianceContants";
import { callApi } from "utils/apiUtils";

function* getCovenantComplianceList() {
  try {
    const store = yield select();
    const agGroupInfo = store.login.agGroupInfo;
    const covenantComplianceList = yield callApi(`compliance/list?AggregationGroupId=${agGroupInfo?.aggregationGroupId}&ComplianceStatus=0&maxRecordCount=0&pageNum=100`, 'GET');
    yield put({
      type: ComplianceActionTypes.GET_COVENANT_COMPLIANCE_LIST_SUCCESS,
      covenantComplianceList,
    });
  } catch (error) {
    yield put({
      type: ComplianceActionTypes.GET_COVENANT_COMPLIANCE_LIST_FAILED,
      error,
    });
  }
}

function* getComplianceDetails(action) {
  try {
    const complianceDetails = yield callApi(`compliance/detail?complianceInstanceID=${action.complianceId}`, 'GET', );
    yield put({
      type: ComplianceActionTypes.GET_COMPLIANCE_DETAILS_SUCCESS,
      complianceDetails,
    });
  } catch (error) {
    yield put({
      type: ComplianceActionTypes.GET_COMPLIANCE_DETAILS_FAILED,
      error,
    });
  }
}

export default function* complianceSaga() {
  yield takeEvery(
    ComplianceActionTypes.GET_COVENANT_COMPLIANCE_LIST,
    getCovenantComplianceList
  );
  yield takeEvery(
    ComplianceActionTypes.GET_COMPLIANCE_DETAILS,
    getComplianceDetails
  );
}
