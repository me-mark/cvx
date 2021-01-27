import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./CVXTextInput.scss";
import classNames from "classnames";

import { CVXTextInputModel } from "../commonModels";

export const CVXTextInput = (props: CVXTextInputModel) => {
  const {
    title,
    name,
    disabled,
    defaultValue,
    type,
    placeholder,
    onChange,
    maxLength,
    size,
    prefix,
    className,
    isTypePass = false,
  } = props;
  if (isTypePass) {
    return (
      <div className={classNames("custom-input", className)}>
        {title && <div className="custom-input__title">{title}</div>}
        <Input.Password
          name={name}
          maxLength={maxLength}
          size={size}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          disabled={disabled || false}
          prefix={prefix || <></>}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>
    );
  } else {
    return (
      <div className={classNames("custom-input", className)}>
        {title && <div className="custom-input__title">{title}</div>}
        <Input
          name={name}
          maxLength={maxLength}
          size={size}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          disabled={disabled || false}
          prefix={prefix || <></>}
        />
      </div>
    );
  }
};
