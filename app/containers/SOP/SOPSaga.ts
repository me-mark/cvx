import { all, put, select, takeLatest } from "redux-saga/effects";
import SOPActionTypes from "./SOPConstants";
import { callApi } from "utils/apiUtils";
import { ContainerState, SOPApplicantModel } from "./SOPTypes";
import { SOP_SUBTABS, SEARCH_PARAM_KEYS, SOP_SUBTAB_LABELS } from "containers/App/constants";
import { getSearchParamValue, setSearchParamValue } from "utils/searchParams";
import { RoutePaths } from "containers/App/routes";
import { getSOPCategoryList as getCategoryListAction, getApplicantsAction, setSOPCurrentSubTabId } from "./SOPActions";
import { ActionType } from 'typesafe-actions';

function* getSOPApplicants(action: ActionType<typeof getApplicantsAction>) {
  try {
    const { payload } = action;
    const store = yield select();
    const aggregationGroup = store.login.agGroupInfo;
    const searchParams = payload.location.search;
    const currentApplicantId = +getSearchParamValue(
      searchParams,
      SEARCH_PARAM_KEYS.APPLICATION_ID
    );

    const applicantList: SOPApplicantModel[] = yield callApi(`SOP/borrowers?AggregationGroupId=${aggregationGroup?.aggregationGroupId}`, 'GET',);
    const currentApplicant = applicantList.find(o => o.groupId === currentApplicantId);

    yield put({
      type: SOPActionTypes.GET_SOP_APPLICANTS_SUCCESS,
      payload: {
        applicantList,
        currentApplicant: currentApplicant || applicantList[0],
      } as ContainerState
    });
  } catch (error) {
    yield put({
      type: SOPActionTypes.GET_SOP_APPLICANTS_FAIL,
      error,
    });
  }
}

function* getSOPPeriods() {
  try {
    const store = yield select();
    const periodList = yield callApi(`SOP/periods?GroupId=${store.sop.currentApplicant.groupId}`, 'GET',);
    yield put({
      type: SOPActionTypes.GET_SOP_PERIODS_SUCCESS,
      payload: {
        periodList
      } as ContainerState
    });
    yield put({
      type: SOPActionTypes.SET_SOP_CURRENT_PERIOD,
      payload: periodList[0]
    })
  } catch (error) {
    yield put({
      type: SOPActionTypes.GET_SOP_PERIODS_FAIL,
      error,
    });
  }
}

function* getSOPSections(action) {
  try {
    yield put({ type: SOPActionTypes.SET_SOP_DETAIL_LOADING, payload: true });
    const { currentSubTabId, currentPeriod } = action.payload;
    const currentSubTab = SOP_SUBTABS.find(subtab => subtab.id === currentSubTabId) || SOP_SUBTABS[0];
    const subTabLabel = currentSubTab.label;
    const SOPData = yield callApi(`SOP/${subTabLabel}?SopPeriodId=${currentPeriod.statementPeriodID}`, 'GET',);
    yield put({
      type: SOPActionTypes.GET_SOP_SECTIONS_SUCCESS,
      payload: {
        currentSections: SOPData,
      } as ContainerState
    });
    yield put({ type: SOPActionTypes.SET_SOP_DETAIL_LOADING, payload: false });
  } catch (error) {
    yield put({
      type: SOPActionTypes.GET_SOP_SECTIONS_FAIL,
      error,
    });
  }
}

function* setCurrentSOPSubTabId(action: ActionType<typeof setSOPCurrentSubTabId>) {
  try {
    const { currentSubTabId, history, currentPeriod } = action.payload;
    const searchParams = window.location.search;
    const newSearchParams = setSearchParamValue(
      searchParams,
      SEARCH_PARAM_KEYS.SUB_TAB,
      String(currentSubTabId)
    );
    history.push(`${RoutePaths.SOP}?${newSearchParams}`);
    yield put({ type: SOPActionTypes.SET_SOP_DETAIL_LOADING, payload: true });
    yield put({ type: SOPActionTypes.SET_SOP_SUB_CURRENT_SUB_TAB_ID_SUCCESS, payload: currentSubTabId });

    // Get SOP
    const currentSubTab = SOP_SUBTABS.find(subtab => subtab.id === currentSubTabId) || SOP_SUBTABS[0];
    const subTabLabel = currentSubTab.label;
    const [SOPData, categoryList] = yield all([
      yield callApi(`SOP/${subTabLabel}?SopPeriodId=${currentPeriod.statementPeriodID}`, 'GET',),
      yield callApi(`SOP/categories?type=${subTabLabel}`, 'GET',),
    ])
    yield put({
      type: SOPActionTypes.GET_SOP_SECTIONS_SUCCESS,
      payload: {
        currentSections: SOPData,
      } as ContainerState
    });
    yield put({
      type: SOPActionTypes.GET_SOP_CATEGORYLIST_SUCCESS,
      payload: categoryList,
    });

    yield put({ type: SOPActionTypes.SET_SOP_DETAIL_LOADING, payload: false });
  } catch (error) {

  }
}

function* getSOPCategoryList(action: ActionType<typeof getCategoryListAction>) {
  try {
    const currentSubTabId = action.payload;
    const currentSubTab = SOP_SUBTABS.find(subtab => subtab.id === currentSubTabId) || SOP_SUBTABS[0];
    const subTabLabel = currentSubTab.label;
    const categoryList = yield callApi(`SOP/categories?type=${subTabLabel}`, 'GET',);

    yield put({
      type: SOPActionTypes.GET_SOP_CATEGORYLIST_SUCCESS,
      payload: categoryList,
    });
  } catch (error) {

  }
}

export default function* SOPSaga() {
  yield takeLatest(SOPActionTypes.GET_SOP_APPLICANTS, getSOPApplicants)
  yield takeLatest(SOPActionTypes.GET_SOP_PERIODS, getSOPPeriods);
  yield takeLatest(SOPActionTypes.GET_SOP_SECTIONS, getSOPSections);
  yield takeLatest(SOPActionTypes.SET_SOP_SUB_CURRENT_SUB_TAB_ID, setCurrentSOPSubTabId)
  yield takeLatest(SOPActionTypes.GET_SOP_CATEGORYLIST, getSOPCategoryList)
}
