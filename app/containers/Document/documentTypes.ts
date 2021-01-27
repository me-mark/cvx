import { RcFile } from "antd/lib/upload";
import { CVXOptionModel } from "components/common/commonModels";
import { ActionType } from "typesafe-actions";
import { REQUEST_STATUS } from "utils/constants";
import * as documentActions from './documentActions';

export interface DocumentModel {
  documentId: number;
  documentCategoryId?: number;
  ownerType?: string;
  ownerId?: number;
  name?: string;
  mimetype?: string;
  expiryDate?: string;
  description?: string;
  pathFile?: string;
}

export interface DocumentGroupModel {
  documentGroupId: number,
  name?: string,
  total?: number,
}
export interface DocumentUploadRequestModel {
  documentCategory?: number;
  ownerType?: string;
  ownerID?: number;
  expiryDate?: string;
  description?: string;
  uploadedBy?: string;
  files?: RcFile[];
}
export interface DocumentCategoryModel {
  documentCategoryId: number,
  name?: string;
}
export interface DocumentState {
  isUploadDocumentListModalOpen?: boolean;
  postDocumentListStatus?: REQUEST_STATUS;
  documentGroupList?: DocumentGroupModel[];
  documentList?: DocumentModel[];
  currentDocumentGroup?: DocumentGroupModel;
  documentGroupOptions?: CVXOptionModel[];
  documentCategoryOptions?: CVXOptionModel[];
}

/* --- ACTIONS --- */
type DocumentActions = ActionType<typeof documentActions>;

/* --- EXPORTS --- */
type ContainerState = DocumentState;
type ContainerActions = DocumentActions;

export { ContainerState, ContainerActions };