import "./CVXUploadInput.scss";
import React from "react";
import { Upload } from "antd";
import { CVXUploadInputModel } from "../commonModels";

export const CVXUploadInput = (props: CVXUploadInputModel) => {
  const { disabled } = props;
  return (
    <Upload disabled={disabled || false}>
      <div className="custom-upload">
        <div className="custom-upload__title">Upload document</div>
        <div className="custom-upload__placeholder">Click here to upload</div>
      </div>
    </Upload>
  );
};
