import "./CVXButton.scss";
import React from "react";
import { CVXButtonModel } from "../commonModels";
import { Button } from "antd";
import classnames from 'classnames';

export function CVXButton(props: CVXButtonModel) {
  const { placeholder, onClick, icon, type, className, loading } = props;
  return <Button
    className={classnames('cvx-button', className)}
    onClick={onClick}
    icon={icon}
    type={type}
    loading={loading}
  >{placeholder}</Button>;
}
