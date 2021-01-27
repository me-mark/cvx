import _ from "lodash";

import documentActionTypes from './documentConstants';
import { ContainerActions, ContainerState } from './documentTypes';

export const initialState: ContainerState = {
  isUploadDocumentListModalOpen: false,
};

function documentReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case documentActionTypes.TOGGLE_UPLOAD_DOCUMENT_LIST_MODAL:
      return { ...state, isUploadDocumentListModalOpen: action.payload }
    case documentActionTypes.POST_DOCUMENT_LIST_LOADING:
      return { ...state, postDocumentListStatus: action.payload }
    case documentActionTypes.GET_DOCUMENT_GROUP_LIST_SUCCESS:
      return { ...state, documentGroupList: action.payload }
    case documentActionTypes.GET_DOCUMENT_LIST_SUCCESS:
      return { ...state, documentList: action.payload}
    case documentActionTypes.SET_CURRENT_DOCUMENT_GROUP:
      return {...state, currentDocumentGroup: action.payload}
    case documentActionTypes.GET_DOCUMENT_CATEGORY_SUCCESS:
      return {...state, documentCategoryOptions: action.payload}
    case documentActionTypes.GET_ALL_DOCUMENT_GROUP_SUCCESS:
      return {...state, documentGroupOptions: action.payload}
    default:
      return state;
  }
}

export default documentReducer;
