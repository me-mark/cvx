import ActionTypes from './SOPConstants';
import { ContainerState, ContainerActions } from './SOPTypes';
import _ from "lodash";
import { getSearchParamValue } from 'utils/searchParams';
import { SEARCH_PARAM_KEYS } from 'containers/App/constants';

export const initialState: ContainerState = {
  currentSections: [],
  currentSubTabId: +getSearchParamValue(window.location.search, SEARCH_PARAM_KEYS.SUB_TAB),
  sopDetailLoading: false,
};

function SOPReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.SET_SOP_SUB_CURRENT_SUB_TAB_ID_SUCCESS:
      return { ...state, currentSubTabId: action.payload }
    case ActionTypes.SET_SOP_CURRENT_PERIOD:
      return { ...state, currentPeriod: action.payload }
    case ActionTypes.GET_SOP_SECTIONS_SUCCESS:
      return { ...state, ...action.payload };
    case ActionTypes.GET_SOP_APPLICANTS_SUCCESS:
      return { ...state, ...action.payload };
    case ActionTypes.GET_SOP_PERIODS_SUCCESS:
      return { ...state, ...action.payload };
    case ActionTypes.GET_SOP_CATEGORYLIST_SUCCESS:
      return { ...state, categoryList: action.payload };
    case ActionTypes.SET_SOP_DETAIL_LOADING:
      return { ...state, sopDetailLoading: action.payload };
    case ActionTypes.SET_SOP_CURRENT_APPLICANT:
      return { ...state, currentApplicant: action.payload };
    case ActionTypes.ADD_SOP_SECTION:
      return {
        ...state, currentSections: [...state.currentSections || [], {
          amount: 0,
          categoryId: '',
          categoryCode: '',
          comment: '',
          financialInstitution: '',
          itemId: 0,
          itemDefinitionID: 0,
        }]
      }
    default:
      return state;
  }
}

export default SOPReducer;
