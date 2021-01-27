import "../CvxCheckBox.scss";
import React from "react";
import { Checkbox } from "antd";
import { CVXCheckBoxModel } from "../../commonModels";


export function CVXSingleCheckBox (props: CVXCheckBoxModel) {
  const { disabled, defaultChecked, label, value, onChange } = props;
  return (
    <>
      <Checkbox
        disabled={disabled || false}
        defaultChecked={defaultChecked || false}
        value={value}
        onChange={onChange}>
        <span>{label}</span>
      </Checkbox>
    </>
  );
};