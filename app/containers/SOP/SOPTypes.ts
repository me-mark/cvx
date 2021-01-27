import { ActionType } from 'typesafe-actions';
import * as actions from './SOPActions';

export interface SOPSectionItemModel {
  amount?: number;
  categoryId?: string;
  categoryCode?: string;
  comment?: string;
  financialInstitution?: string;
  itemId: number;
  itemDefinitionID?: number;

  categoryDisplayName?: string;
  itemType?: string;
  periodId?: number;
}

export interface SOPPeriodModel {
  asOfDate?: string;
  statementPeriodID: number;
  totalNetAssets?: number;
  totalExpenses?: number;
  totalIncome?: number;
  totalNetLiabilities?: number;

  borrowerID?: number;
  borrowerName?: string;
  isJointBorrower?: boolean;
}

export interface SOPApplicantModel {
  fullName: string;
  groupId: number;
  ownerType: number;
}

export interface SOPCategoryModel {
  sopCategoryName?: string;
  type?: string;
  sopCategoryId: string | number;
  code?: string;
  displayName?: string;
  displayOrder?: string | number;
}

/* --- STATE --- */
interface SOPState {
  currentApplicant?: SOPApplicantModel;
  currentPeriod?: SOPPeriodModel;
  currentSections?: SOPSectionItemModel[];
  currentSubTabId?: number;
  applicantList?: SOPApplicantModel[];
  periodList?: SOPPeriodModel[];
  categoryList?: SOPCategoryModel[];
  sopDetailLoading?: boolean;
}

/* --- ACTIONS --- */
type SOPActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = SOPState;
type ContainerActions = SOPActions;

export { ContainerState, ContainerActions };
