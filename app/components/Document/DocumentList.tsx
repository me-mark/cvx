import iconCircleCross from '../../images/icon-circle-cross.svg';
import './DocumentList.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Popconfirm } from 'antd';
import _ from 'lodash';
import moment from 'moment';

import { DocumentModel } from 'containers/Document/documentTypes';
import makeSelectDocument from 'containers/Document/documentSelectors';
import { deleteDocumentItemAction, getDocumentListByGroupAction } from 'containers/Document/documentActions';
import { DATE_FORMAT } from 'utils/constants';

const documentSelector = createStructuredSelector({
  document: makeSelectDocument(),
});

function DocumentItem(props: { document: DocumentModel }) {
  const { name, expiryDate, description, documentId, pathFile } = props.document;
  const dispatch = useDispatch();
  const handleOpenFile = () => {
    window.open(pathFile);
  }
  const onConfirm = () => {
    dispatch(deleteDocumentItemAction(documentId));
  }
  return (
    <div className="document-list__item">
      <div className="document-list__name" onClick={handleOpenFile}>{name}</div>
      <div className="document-list__expires">{moment(expiryDate).format(DATE_FORMAT)}</div>
      <div className="document-list__description">{description}</div>
      <Popconfirm
        title="Are you sure to delete this document?"
        onConfirm={onConfirm}
        okText="Yes"
        cancelText="No"
      >
        <div className="document-list__close"><img src={iconCircleCross} /></div>
      </Popconfirm>
    </div>
  )
}

export function DocumentList(props) {
  const {
    document: { documentList, currentDocumentGroup },
  } = useSelector(documentSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentDocumentGroup) {
      dispatch(getDocumentListByGroupAction(currentDocumentGroup?.documentGroupId));
    }
  }, [currentDocumentGroup])
  return (
    <>
      <div className="document-list">
        <div className="document-list__title">{currentDocumentGroup?.name} ({`${documentList?.length || 0}`})</div>
        <div className="document-list__header">
          <div>Document name </div>
          <div>Expires</div>
          <div>Description</div>
        </div>
        <div className="document-list__items">
          {documentList && documentList?.length > 0 && documentList.map(document => <DocumentItem document={document} />)}
        </div>
      </div>
    </>
  )
}
