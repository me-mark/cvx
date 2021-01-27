import './UploadDocumentListModal.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Modal, Upload, Form } from 'antd';
import { RcFile, UploadProps } from 'antd/lib/upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { CVXButton, CVXDatePicker, CVXSelectBoxWithTitle, CVXTextArea } from 'components/common';
import makeSelectDocument from 'containers/Document/documentSelectors';
import makeSelectLogin from 'containers/Login/loginSelectors';
import { getDocumentCategoryAction, getDocumentGroupOptionsAction, loadingPostDocumentListAction, postDocumentListAction, toggleUploadDocumentListModal } from 'containers/Document/documentActions';
import { REQUEST_STATUS } from 'utils/constants';

const documentSelector = createStructuredSelector({
  document: makeSelectDocument(),
  login: makeSelectLogin(),
});

export function UploadDocumentListModal(props) {
  const {
    document: { isUploadDocumentListModalOpen, postDocumentListStatus, documentGroupOptions, documentCategoryOptions },
    login: { customerInfo }
  } = useSelector(documentSelector);
  const dispatch = useDispatch();

  const [fileList, setFileList] = useState<RcFile[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<number | null>();
  const [form] = Form.useForm();

  const resetForm = () => {
    setFileList([]);
    setSelectedGroup(null);
    form.resetFields();
  }

  const handleCloseModal = () => {
    dispatch(toggleUploadDocumentListModal(false));
    dispatch(loadingPostDocumentListAction(REQUEST_STATUS.failed));
    resetForm();
  }

  const handleOnSelectGroup = (groupId, option) => {
    setSelectedGroup(groupId);
    dispatch(getDocumentCategoryAction(+option.key));
    form.resetFields(['documentCategory']);
  }

  const customFooter =
    <div className="text-center">
      <CVXButton placeholder="Cancel" onClick={handleCloseModal} />
      <CVXButton
        placeholder="Upload"
        type="primary"
        onClick={() => form.submit()}
        loading={postDocumentListStatus === REQUEST_STATUS.loading}
      />
    </div>

  const uploadProps: UploadProps = {
    fileList,
    multiple: true,
    beforeUpload: (file, fileList) => {
      setFileList(fileList);
      return false;
    },
    onRemove: (file: RcFile) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    showUploadList: {
      removeIcon: <FontAwesomeIcon icon={faTrashAlt} />
    },
    accept: '.pdf, .txt, .xls, .xlsx, .doc, .docx, .rtf, .jpg, .jpeg, .png, .tiff, .tif, .ppt, .pptx'
  }

  const onFinish = (values: any) => {
    const authInfo = {
      ownerType: 'borrower',
      ownerID: customerInfo?.customerId,
      uploadedBy: customerInfo?.customerId,
    }
    const originalFiles = values.files.fileList.map(o => o.originFileObj);
    dispatch(postDocumentListAction({
      ...values,
      ...authInfo,
      files: originalFiles,
    }));
  };

  useEffect(() => {
    if (postDocumentListStatus === REQUEST_STATUS.success) {
      setFileList([]);
      resetForm();
    }
  }, [postDocumentListStatus]);

  useEffect(() => {
    dispatch(getDocumentGroupOptionsAction());
  }, [])

  if (!documentGroupOptions || !documentGroupOptions?.length) {
    return <></>;
  }

  return (
    <Modal
      visible={isUploadDocumentListModalOpen}
      onCancel={handleCloseModal}
      title="Upload Documents"
      wrapClassName="cvx-modal"
      footer={customFooter}
      width={1000}
    >
      <Form form={form} name="upload-documents" onFinish={onFinish}>
        <Form.Item name="files" rules={[{ required: true, message: 'At least 1 file' }]} noStyle>
          <Upload {...uploadProps}>
            {
              fileList.length === 0 ? <div className="upload-document-list-modal__select-files">Select your files</div>
                : <div className="upload-document-list-modal__title">You are about to upload files:</div>
            }
          </Upload>
        </Form.Item>
        <div className="upload-document-list-modal__title">
          Please select the Category and Group for the document
        </div>
        <div className="upload-document-list-modal__group-category">
          <CVXSelectBoxWithTitle
            title="Group"
            options={documentGroupOptions}
            onSelect={handleOnSelectGroup}
            value={selectedGroup}
          />
          <Form.Item name="documentCategory" noStyle>
            <CVXSelectBoxWithTitle
              title="Category"
              options={documentCategoryOptions || []}
            />
          </Form.Item>
        </div>
        <div className="upload-document-list-modal__title">
          Document Description
      </div>
        <div className="upload-document-list-modal__description">
          <Form.Item name="description" noStyle>
            <CVXTextArea title="Description" />
          </Form.Item>
        </div>
        <div className="upload-document-list-modal__expiry-date">
          <div className="upload-document-list-modal__title">Expiry Date</div>
          <Form.Item name="expiryDate" noStyle>
            <CVXDatePicker title="Expiry Date" disabled={true}/>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}