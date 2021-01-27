import { action } from "typesafe-actions";
import dashboardActionTypes from './dashboardConstants';
import { CovenantSummaryModel, DocumentSummaryModel, SOPSummaryModel } from './dashboardTypes';

export const getDashboardCovenantSummary = () => action(dashboardActionTypes.GET_DASHBOARD_COVENENT_SUMMARY);
export const getDashboardCovenantSummarySuccess = (covenantSummary: CovenantSummaryModel) => action(dashboardActionTypes.GET_DASHBOARD_COVENENT_SUMMARY_SUCCESS, covenantSummary);

export const getDashboardSOPSummary = () => action(dashboardActionTypes.GET_DASHBOARD_SOP_SUMMARY);
export const getDashboardSOPSummarySuccess = (sopSummary: SOPSummaryModel) => action(dashboardActionTypes.GET_DASHBOARD_SOP_SUMMARY_SUCCESS, sopSummary);

export const getDashboardDocumentSummary = () => action(dashboardActionTypes.GET_DASHBOARD_DOCUMENT_SUMMARY);
export const getDashboardDocumentSummarySuccess = (documentSummary: DocumentSummaryModel) => action(dashboardActionTypes.GET_DASHBOARD_DOCUMENT_SUMMARY_SUCCESS, documentSummary);