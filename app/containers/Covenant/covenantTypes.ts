import { ActionType } from 'typesafe-actions';
import * as covenantActions from './covenantActions';

export enum CovenantStatusEnum {
  All = 'All',
  New = 'New',
  Active = 'Active',
  Amended = 'Amended',
  Withdrawn = 'Withdrawn',
  Closed = 'Closed',
  Incomplete = 'Incomplete'
}

export interface CovenantModel {
  applicationId?: number;
  complianceId?: number;
  complianceStatus?: string;
  covenantId?: number
  covenantType?: string;
  covenantTypeId?: number;
  customerOrGroupName?: string;
  description?: string;
  dueDate?: string;
  expiredDate?: string;
  frequency?: string;
  ownerId?: number;
  ownerName?: string;
  ownerType?: number;
  reportWithinDays?: number;
  standardCovenantId?: number;
  startDate?: string;
  status?: string;
  testValue?: string;
  title?: string;
}

/* --- STATE --- */
interface CovenantState {
  covenantList?: CovenantModel[],
  covenantActiveKey?: any,
  covenantDetails?: CovenantModel,
}

/* --- ACTIONS --- */
type CovenantActions = ActionType<typeof covenantActions>;

/* --- EXPORTS --- */
type ContainerState = CovenantState;
type ContainerActions = CovenantActions;

export { ContainerState, ContainerActions };
