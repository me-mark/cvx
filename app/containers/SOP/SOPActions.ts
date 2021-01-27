import { action } from 'typesafe-actions';
import ActionTypes from './SOPConstants';
import { ContainerState, SOPApplicantModel, SOPCategoryModel, SOPPeriodModel } from './SOPTypes';

export const getApplicantsAction = (payload) => action(ActionTypes.GET_SOP_APPLICANTS, payload);
export const getApplicantsSuccess = (payload: ContainerState) => action(ActionTypes.GET_SOP_APPLICANTS_SUCCESS, payload);

export const getPeriods = () => action(ActionTypes.GET_SOP_PERIODS);
export const getPeriodsSuccess = (periodList: SOPPeriodModel[]) => action(ActionTypes.GET_SOP_PERIODS_SUCCESS, periodList);

export const getSections = (payload: { currentSubTabId?: number, currentPeriod: SOPPeriodModel }) => action(ActionTypes.GET_SOP_SECTIONS, payload);
export const getSectionsSuccess = (sopData: ContainerState) => action(ActionTypes.GET_SOP_SECTIONS_SUCCESS, sopData);

export const setSOPCurrentSubTabId = (payload: { currentSubTabId?: number, history: any, currentPeriod: SOPPeriodModel }) => action(ActionTypes.SET_SOP_SUB_CURRENT_SUB_TAB_ID, payload);
export const setSOPCurrentSubTabIdSuccess = (subTabId: number) => action(ActionTypes.SET_SOP_SUB_CURRENT_SUB_TAB_ID_SUCCESS, subTabId);

export const setSOPCurrentPeriod = (payload: SOPPeriodModel) => action(ActionTypes.SET_SOP_CURRENT_PERIOD, payload);

export const addSOPSection = () => action(ActionTypes.ADD_SOP_SECTION);

export const getSOPCategoryList = (currentSubTabId?: number) => action(ActionTypes.GET_SOP_CATEGORYLIST, currentSubTabId);
export const getSOPCategoryListSuccess = (categoryList: SOPCategoryModel[]) => action(ActionTypes.GET_SOP_CATEGORYLIST_SUCCESS, categoryList);

export const setSOPDetailLoading = (payload: boolean) => action(ActionTypes.SET_SOP_DETAIL_LOADING, payload);

export const setSOPCurrentApplicant = (payload: SOPApplicantModel) => action(ActionTypes.SET_SOP_CURRENT_APPLICANT, payload);