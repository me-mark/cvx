import { ActionType } from 'typesafe-actions';
import * as loginActions from './loginActions';

export interface Subject {
  readonly id: number;
  readonly limit: number;
  readonly name: string;
}

export interface UserInfoModel {
  email?: string;
  fullName?: string;
  isActive?: boolean;
  login?: string;
  userId?: number;
  userRoles?: string[];
  username?: string;
  loginId?: string;
}

export interface CustomerInfoModel {
  customerId: number;
  name?: string;
  cic?: string;
  address?: string;
  suburb?: string;
  postCode?: string;
  state?: string;
  country?: string;
  email?: string;
  bankUnitId?: number;
  status?: number;
}

export interface CustomerMemberModel {
  customerId: number;
  name?: string
  isMainCustomer?: boolean;
  memberGroupRole?: number;
}

export interface AgGroupModel {
  name?: string;
  groupCode?: string;
  aggregationGroupId: number,
  customerMembers?: CustomerMemberModel[];
}

/* --- STATE --- */
interface LoginState {
  userName?: any;
  password?: any;
  rememberMe?: any;
  necessaryDataIsProvidedToSubmitLogin?: any;
  isLoggedIn?: any;
  userInfo?: UserInfoModel;
  authModuleList?: string[];
  customerInfo?: CustomerInfoModel;
  agGroupInfo?: AgGroupModel;
}

/* --- ACTIONS --- */
type AddLoginActions = ActionType<typeof loginActions>;

/* --- EXPORTS --- */
type ContainerState = LoginState;
type ContainerActions = AddLoginActions;

export { ContainerState, ContainerActions };
