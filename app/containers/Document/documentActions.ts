import { CVXOptionModel } from "components/common/commonModels";
import { action } from "typesafe-actions";
import { REQUEST_STATUS } from "utils/constants";
import documentActionTypes from './documentConstants';
import { DocumentModel, DocumentUploadRequestModel, DocumentGroupModel } from "./documentTypes";

export const toggleUploadDocumentListModal = (isOpen: boolean) => action(documentActionTypes.TOGGLE_UPLOAD_DOCUMENT_LIST_MODAL, isOpen);

export const postDocumentListAction = (documentsUploadRequest: DocumentUploadRequestModel) => action(documentActionTypes.POST_DOCUMENT_LIST, documentsUploadRequest);
export const loadingPostDocumentListAction = (isLoading: REQUEST_STATUS) => action(documentActionTypes.POST_DOCUMENT_LIST_LOADING, isLoading);

export const getDocumentGroupListAction = () => action(documentActionTypes.GET_DOCUMENT_GROUP_LIST);
export const getDocumentGroupListSuccessAction = (documentGroupList: DocumentGroupModel[]) => action(documentActionTypes.GET_DOCUMENT_GROUP_LIST_SUCCESS, documentGroupList);

export const getDocumentListByGroupSuccessAction = (documentList: DocumentModel[]) => action(documentActionTypes.GET_DOCUMENT_LIST_SUCCESS, documentList);
export const getDocumentListByGroupAction = (groupId: number) => action(documentActionTypes.GET_DOCUMENT_LIST, groupId);

export const setCurrentDocumentGroup = (group: DocumentGroupModel) => action(documentActionTypes.SET_CURRENT_DOCUMENT_GROUP, group);

export const getDocumentCategoryAction = (groupId: DocumentGroupModel['documentGroupId']) => action(documentActionTypes.GET_DOCUMENT_CATEGORY, groupId);
export const getDocumentCategorySuccessAction = (categoryOptions: CVXOptionModel[]) => action(documentActionTypes.GET_DOCUMENT_CATEGORY_SUCCESS, categoryOptions);

export const deleteDocumentItemAction = (documentId: DocumentModel['documentId']) => action(documentActionTypes.DELETE_DOCUMENT_ITEM, documentId);
export const deleteDocumentItemSuccessAction = (documentId: DocumentModel['documentId']) => action(documentActionTypes.DELETE_DOCUMENT_ITEM_SUCCESS, documentId);

export const getDocumentGroupOptionsAction = () => action(documentActionTypes.GET_ALL_DOCUMENT_GROUP);
export const getDocumentGroupOptionsSuccessAction = (documentOptions: CVXOptionModel[]) => action(documentActionTypes.GET_ALL_DOCUMENT_GROUP_SUCCESS, documentOptions);
