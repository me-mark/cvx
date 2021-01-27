import { ActionType } from "typesafe-actions";
import * as dashboardActions from './dashboardActions';

export interface CovenantSummaryModel {
  aggregationGroupName?: string,
  aggregationGroupId: number,
  aggregationGroupCode?: string,
  upcomingCovenantCount?: number | string,
  overdueCovenantCount?: number | string,
}

export interface SOPSummaryModel {
  aggregationGroupName?: string;
  aggregationGroupId: number;
  aggregationGroupCode?: string;
  sopPeriodsCount?: number | string;
  sopEmptyPeriodsCount?: number | string;
}

export interface DocumentSummaryModel {
  aggregationGroupName?: string;
  aggregationGroupId: number;
  aggregationGroupCode?: string;
  totalUploadedDocumentsCount?: number | string;
  outstandingDocumentsCount?: number | string;
}
interface DashboardState {
  covenantSummary?: CovenantSummaryModel;
  SOPSummary?: SOPSummaryModel;
  documentSummary?: DocumentSummaryModel;
}

/* --- ACTIONS --- */
type DashboardActions = ActionType<typeof dashboardActions>;

/* --- EXPORTS --- */
type ContainerState = DashboardState;
type ContainerActions = DashboardActions;

export { ContainerState, ContainerActions };