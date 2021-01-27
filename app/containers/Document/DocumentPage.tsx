import './DocumentPage.scss';
import React from 'react';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import documentReducer from './documentReducer';
import { UploadDocument, Groups, DocumentList } from '../../components';
import documentSaga from './documentSaga';

const DocumentPage = () => {
	useInjectReducer({ key: "document", reducer: documentReducer });
	useInjectSaga({ key: "document", saga: documentSaga });
	return (
		<div className="page-wrapper">
			<UploadDocument />
			<div className="upload-document__title">
				Documents
    	</div>
			<div className="documents">
				<Groups />
				<DocumentList />
			</div>
		</div>
	)
}

export default DocumentPage;