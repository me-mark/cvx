import "./CVXTextArea.scss";
import React from "react";
import { Input } from "antd";
import { CVXTextAreaModel } from "../commonModels";

const { TextArea } = Input;

export const CVXTextArea = (props: CVXTextAreaModel) => {
  const { id, title, placeholder, rows, disabled, onChange, value } = props;
  return (
    <div className="app-info-input-wrapper-textarea">
      <div className="custom-textarea__title">{title}</div>
      <TextArea
        id={id}
        rows={rows}
        disabled={disabled || false}
        placeholder={placeholder}
        onChange={onChange}
        value={value || null}
        autoSize={{minRows: 5}}
      />
    </div>
  );
};
