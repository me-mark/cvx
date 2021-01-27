enum DocumentActionTypes {
  'TOGGLE_UPLOAD_DOCUMENT_LIST_MODAL' = 'TOGGLE_UPLOAD_DOCUMENT_LIST_MODAL',

  'POST_DOCUMENT_LIST' = 'POST_DOCUMENT_LIST',
  'POST_DOCUMENT_LIST_LOADING' = 'POST_DOCUMENT_LIST_LOADING',
  'POST_DOCUMENT_LIST_SUCCESS' = 'POST_DOCUMENT_LIST_SUCCESS',
  'POST_DOCUMENT_LIST_FAILED' = 'POST_DOCUMENT_LIST_SUCCESS_FAILED',

  'GET_DOCUMENT_GROUP_LIST' = 'GET_DOCUMENT_GROUP_LIST',
  'GET_DOCUMENT_GROUP_LIST_SUCCESS' = 'GET_DOCUMENT_GROUP_LIST_SUCCESS',
  'GET_DOCUMENT_GROUP_LIST_FAILED' = 'GET_DOCUMENT_GROUP_LIST_FAILED',

  'GET_DOCUMENT_LIST' = 'GET_DOCUMENT_LIST',
  'GET_DOCUMENT_LIST_SUCCESS' = 'GET_DOCUMENT_LIST_SUCCESS',
  'GET_DOCUMENT_LIST_FAILED' = 'GET_DOCUMENT_LIST_FAILED',

  'SET_CURRENT_DOCUMENT_GROUP' = 'SET_CURRENT_DOCUMENT_GROUP',

  'DELETE_DOCUMENT_ITEM' = 'DELETE_DOCUMENT_ITEM',
  'DELETE_DOCUMENT_ITEM_SUCCESS' = 'DELETE_DOCUMENT_ITEM_SUCCESS',
  'DELETE_DOCUMENT_ITEM_FAILED' = 'DELETE_DOCUMENT_ITEM_FAILED',

  'GET_DOCUMENT_CATEGORY' = 'GET_DOCUMENT_CATEGORY',
  'GET_DOCUMENT_CATEGORY_SUCCESS' = 'GET_DOCUMENT_CATEGORY_SUCCESS',
  'GET_DOCUMENT_CATEGORY_FAILED' = 'GET_DOCUMENT_CATEGORY_FAILED',

  'GET_ALL_DOCUMENT_GROUP' = 'GET_ALL_DOCUMENT_GROUP',
  'GET_ALL_DOCUMENT_GROUP_SUCCESS' = 'GET_ALL_DOCUMENT_GROUP_SUCCESS',
  'GET_ALL_DOCUMENT_GROUP_FAILED' = 'GET_ALL_DOCUMENT_GROUP_FAILED',
}

export default DocumentActionTypes;