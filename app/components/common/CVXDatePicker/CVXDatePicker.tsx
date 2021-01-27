import "./CVXDatePicker.scss";

import React from "react";
import { DatePicker } from "antd";
import { DateTimeFormat } from "../../../constants";
import { CVXDatePickerModel } from "../commonModels";

export const CVXDatePicker = (props: CVXDatePickerModel) => {
  const { id, title, placeholder, disabled, onChange, value, defaultValue, className } = props;
  return (
    <div className="custome-calendar-picker">
      {title && <div className="custome-calendar-picker__title">{title}</div>}
      <DatePicker
        disabled={disabled || false}
        format={DateTimeFormat.DATE}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value ? value : undefined}
      />
    </div>
  );
};
