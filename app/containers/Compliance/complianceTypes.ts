import { ActionType } from 'typesafe-actions';
import * as complianceActions from './complianceActions';

/* --- STATE --- */
interface ComplianceState {
  covenantComplianceList?: ComplianceDetailModel[],
  covenantComplianceActiveKey?: any,
  complianceDetails?: ComplianceDetailModel,
}

export interface ComplianceDetailModel {
  covenantId?: number,
  complianceId?: number,
  title?: string,
  standardCovenantId?: number,
  covenantType?: string,
  status?: string,
  complianceStatus?: string,
  covenantInstanceStatus?: string;
  testValue?: number,
  asAtDate?: string,
  reportWithin?: number,
  dueDate?: string,
  frequency?: string,
  description?: string,
  letterOfWaiverSent?: string,
  letterOfNonWaiverSent?: string,
  actionPlanCreated?: boolean,
  actionPlan?: string,
  extensionDate?: string,
  receivedDate?: string,
  note?: string;
}

/* --- ACTIONS --- */
type AddComplianceActions = ActionType<typeof complianceActions>;

/* --- EXPORTS --- */
type ContainerState = ComplianceState;
type ContainerActions = AddComplianceActions;

export { ContainerState, ContainerActions };
