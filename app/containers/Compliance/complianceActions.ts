import { ComplianceActionTypes } from "./complianceContants";

export function getCovenantComplianceList() {
  return {
    type: ComplianceActionTypes.GET_COVENANT_COMPLIANCE_LIST,
  };
}

export function getCovenantListSuccess(covenantComplianceList) {
  return {
    type: ComplianceActionTypes.GET_COVENANT_COMPLIANCE_LIST_SUCCESS,
    covenantComplianceList,
  };
}

export function getCovenantComplianceListFailed() {
  return {
    type: ComplianceActionTypes.GET_COVENANT_COMPLIANCE_LIST_FAILED,
  };
}

export function setCovenantComplianceActiveKey(covenantComplianceActiveKey) {
  return {
    type: ComplianceActionTypes.SET_COVENANT_COMPLIANCE_ACTIVE_KEY,
    covenantComplianceActiveKey,
  };
}

export function getComplianceDetails(complianceId) {
  return {
    type: ComplianceActionTypes.GET_COMPLIANCE_DETAILS,
    complianceId,
  };
}

export function getComplianceDetailsSuccess(complianceDetails) {
  return {
    type: ComplianceActionTypes.GET_COMPLIANCE_DETAILS_SUCCESS,
    complianceDetails,
  };
}

export function getComplianceDetailsFailed() {
  return {
    type: ComplianceActionTypes.GET_COMPLIANCE_DETAILS_FAILED,
  };
}
