import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { Saga } from 'redux-saga';
import { SagaInjectionModes } from 'redux-injectors';

import { ContainerState as LanguageProviderState } from 'containers/LanguageProvider/types';
import { ContainerState as LoginState } from 'containers/Login/loginTypes';
import { ContainerState as CovenantState } from 'containers/Covenant/covenantTypes';
import { ContainerState as ComplianceState } from 'containers/Compliance/complianceTypes';
import { ContainerState as SOPState } from 'containers/SOP/SOPTypes';
import { ContainerState as DashboardState } from 'containers/Dashboard/dashboardTypes';
import { ContainerState as DocumentState } from 'containers/Document/documentTypes';

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: Saga;
  mode?: SagaInjectionModes;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  readonly language: LanguageProviderState;
  readonly login: LoginState;
  readonly covenant: CovenantState;
  readonly compliance: ComplianceState;
  readonly sop: SOPState;
  readonly dashboard: DashboardState;
  readonly loading: boolean;
  readonly document: DocumentState;
}
