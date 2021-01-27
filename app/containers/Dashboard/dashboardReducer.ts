import dashboardActionTypes from './dashboardConstants';
import { ContainerState, ContainerActions } from './dashboardTypes';
import _ from "lodash";

export const initialState: ContainerState = {
};

function dashboardReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case dashboardActionTypes.GET_DASHBOARD_COVENENT_SUMMARY_SUCCESS:
      return { ...state, covenantSummary: action.payload }
    case dashboardActionTypes.GET_DASHBOARD_SOP_SUMMARY_SUCCESS:
      return { ...state, SOPSummary: action.payload }
    case dashboardActionTypes.GET_DASHBOARD_DOCUMENT_SUMMARY_SUCCESS:
      return { ...state, documentSummary: action.payload }
    default:
      return state;
  }
}

export default dashboardReducer;
