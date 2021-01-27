import './UploadDocument.scss';
import { CVXButton, CVXUploadInput } from 'components/common';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleUploadDocumentListModal } from 'containers/Document/documentActions';
import { UploadDocumentListModal } from './UploadDocumentListModal';

interface UploadDocumentProps {

}

export function UploadDocument(props: UploadDocumentProps) {
  const dispatch = useDispatch();
  return (
    <div className="upload-document">
      <div className="upload-document__title">
        Upload document
    </div>
      <div className="upload-document__content">
        <div className="upload-document__placeholder">
          Allowed file types: pdf, doc, docx, xls, xlsx, ppt, pptx, jpg, jpeg, png, tif, bmp. Allowed file size: 10 MB.
      </div>
        <div className="upload-document__upload">
          <div className="upload-document__upload-field">
            <div className="custom-upload" onClick={() => dispatch(toggleUploadDocumentListModal(true))}>
              <div className="custom-upload__title">Upload document</div>
              <div className="custom-upload__placeholder">Click here to upload</div>
            </div>
          </div>
          <CVXButton placeholder="Upload" className="upload-document__button" />
        </div>
      </div>
      <UploadDocumentListModal/>
    </div>
  );
}