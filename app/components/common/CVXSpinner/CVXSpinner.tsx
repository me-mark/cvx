import "./CVXSpinner.scss";
import React from "react";
import { Spin } from "antd";

export const CVXSpinner = () => {
  return <div className="cvx-spinner"><Spin size="large"/></div>;
};
