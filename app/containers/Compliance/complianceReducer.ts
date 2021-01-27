/*
 *
 * AddCompliance reducer
 *
 */

import { ComplianceActionTypes } from './complianceContants';
import { ContainerState } from './complianceTypes';

export const initialState: ContainerState = {
  covenantComplianceList: [],
  covenantComplianceActiveKey: null,
};

function complianceReducer(
  state: ContainerState = initialState,
  action: any,
): ContainerState {
  switch (action.type) {
    case ComplianceActionTypes.GET_COVENANT_COMPLIANCE_LIST_SUCCESS:
      return {
        ...state,
        covenantComplianceList: action.covenantComplianceList,
      };
    case ComplianceActionTypes.GET_COMPLIANCE_DETAILS_SUCCESS:
      return { ...state, complianceDetails: action.complianceDetails };
    case ComplianceActionTypes.SET_COVENANT_COMPLIANCE_ACTIVE_KEY:
      return {
        ...state,
        covenantComplianceActiveKey: action.covenantComplianceActiveKey,
      };
    default:
      return state;
  }
}

export default complianceReducer;
