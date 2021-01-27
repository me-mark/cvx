import "../CvxCheckBox.scss";
import React from "react";
import { CVXSingleCheckBox } from "../CVXSingleCheckBox";
import { CVXCheckBoxListModel } from "../../commonModels";


export function CVXCheckBoxList(props: CVXCheckBoxListModel) {
  const { data, onChange } = props;
  const handleChange = (id: any) => {
    onChange(id);
  };
  return (
    <div className="ant-checkbox-group-item">
      {
        data.map((item: any) => (
          <div className="div-checkbox-group-item" key={item.id}>
            <CVXSingleCheckBox
              disabled={item.disabled}
              defaultChecked={item.defaultChecked}
              label={item.label}
              value={data.id}
              onChange={() => handleChange(item.id)}
              key={item.id}/>
          </div>
      ))}
    </div>
  );
};
