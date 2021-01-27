import { message } from 'antd';
import { put, select, takeLatest } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";

import { CVXOptionModel } from 'components/common/commonModels';
import { REQUEST_STATUS } from 'utils/constants';
import { callApi } from "utils/apiUtils";
import { getDocumentCategoryAction, postDocumentListAction } from "./documentActions";
import DocumentActionTypes from './documentConstants';
import { DocumentCategoryModel, DocumentGroupModel } from './documentTypes';

function* postDocumentList(action: ActionType<typeof postDocumentListAction>) {
  try {
    yield put({ type: DocumentActionTypes.POST_DOCUMENT_LIST_LOADING, payload: REQUEST_STATUS.loading });
    const documentUploadRequest = action.payload;
    yield callApi(`documents/upload`, 'POST', documentUploadRequest, { isFormData: true });

    yield put({ type: DocumentActionTypes.POST_DOCUMENT_LIST_LOADING, payload: REQUEST_STATUS.success });
    yield put({ type: DocumentActionTypes.TOGGLE_UPLOAD_DOCUMENT_LIST_MODAL, payload: false });
    yield put({ type: DocumentActionTypes.GET_DOCUMENT_GROUP_LIST });

    const store = yield select();
    yield put({ type: DocumentActionTypes.SET_CURRENT_DOCUMENT_GROUP, payload: store.document.documentGroupList![0] });
    yield put({ type: DocumentActionTypes.GET_DOCUMENT_LIST, payload: store.document.documentGroupList![0].documentGroupId });
    message.success({ content: 'Your files successfully uploaded.' });
  } catch (error) {
    if (error.status === 400) {
      message.error('Failed to upload files.');
      yield put({ type: DocumentActionTypes.POST_DOCUMENT_LIST_LOADING, payload: REQUEST_STATUS.failed });
    }
    console.info(error);
  }
}

function* getDocumentGroupList() {
  try {
    const store = yield select();
    const customerInfo = store.login.customerInfo;
    const documentGroupList = yield callApi(`documents/groups?CustomerId=${customerInfo?.customerId}&OwnerType=borrower`, 'GET',);

    yield put({
      type: DocumentActionTypes.GET_DOCUMENT_GROUP_LIST_SUCCESS,
      payload: documentGroupList,
    });

    if (!store.document.currentDocumentGroup) {
      yield put({ type: DocumentActionTypes.SET_CURRENT_DOCUMENT_GROUP, payload: store.document.documentGroupList![0] });
    }

  } catch (error) {
    yield put({
      type: DocumentActionTypes.GET_DOCUMENT_GROUP_LIST_FAILED,
    });
  }
}

function* getDocumentListByGroup(action) {
  try {
    const store = yield select();
    const customerInfo = store.login.customerInfo;
    const { payload } = action;
    const documentList = yield callApi(`documents?GroupId=${payload}&CustomerId=${customerInfo?.customerId}&OwnerType=borrower`, 'GET',);

    yield put({
      type: DocumentActionTypes.GET_DOCUMENT_LIST_SUCCESS,
      payload: documentList,
    });
  } catch (error) {
    yield put({
      type: DocumentActionTypes.GET_DOCUMENT_LIST_FAILED,
    });
  }
}

function* getDocumentCategoryByGroup(action: ActionType<typeof getDocumentCategoryAction>) {
  try {
    const { payload } = action;
    const categoryList: DocumentCategoryModel[] = yield callApi(`documents/categories?GroupId=${payload}`, 'GET',);

    const categoryOptions: CVXOptionModel[] = [];
    categoryList.map(o => categoryOptions.push({ id: o.documentCategoryId, value: o.documentCategoryId, label: o.name }));

    yield put({
      type: DocumentActionTypes.GET_DOCUMENT_CATEGORY_SUCCESS,
      payload: categoryOptions,
    });
  } catch (error) {
    yield put({
      type: DocumentActionTypes.GET_DOCUMENT_CATEGORY_FAILED,
    });
  }
}

function* getAllDocumentGroup() {
  try {
    const documentGroupList: DocumentGroupModel[] = yield callApi(`documents/allgroups`, 'GET',);

    const documentGroupOptions: CVXOptionModel[] = [];
    documentGroupList.map(o => documentGroupOptions.push({ id: o.documentGroupId, value: o.documentGroupId, label: o.name }));

    yield put({
      type: DocumentActionTypes.GET_ALL_DOCUMENT_GROUP_SUCCESS,
      payload: documentGroupOptions,
    });
  } catch (error) {
    yield put({
      type: DocumentActionTypes.GET_ALL_DOCUMENT_GROUP_FAILED,
    });
  }
}

function* deleteDocumentItem(action) {
  try {
    const { payload } = action;
    yield callApi(`documents/delete?DocumentID=${payload}`, 'PUT',);

    yield put({
      type: DocumentActionTypes.DELETE_DOCUMENT_ITEM_SUCCESS,
    });
    yield put({ type: DocumentActionTypes.GET_DOCUMENT_GROUP_LIST });
    const store = yield select();
    yield put({ type: DocumentActionTypes.GET_DOCUMENT_LIST, payload: store.document.currentDocumentGroup.documentGroupId });
    message.success({ content: 'Your files successfully deleted.' });
  } catch (error) {
    if (error.status === 400) {
      message.error('Failed to delete files.');
    }
    yield put({
      type: DocumentActionTypes.DELETE_DOCUMENT_ITEM_FAILED,
    });
  }
}

export default function* documentSaga() {
  yield takeLatest(DocumentActionTypes.POST_DOCUMENT_LIST, postDocumentList);
  yield takeLatest(DocumentActionTypes.GET_DOCUMENT_GROUP_LIST, getDocumentGroupList);
  yield takeLatest(DocumentActionTypes.GET_DOCUMENT_LIST, getDocumentListByGroup);
  yield takeLatest(DocumentActionTypes.GET_DOCUMENT_CATEGORY, getDocumentCategoryByGroup);
  yield takeLatest(DocumentActionTypes.GET_ALL_DOCUMENT_GROUP, getAllDocumentGroup);
  yield takeLatest(DocumentActionTypes.DELETE_DOCUMENT_ITEM, deleteDocumentItem);
}