import "./CVXInputNumber.scss";
import React from "react";
import { InputNumber } from "antd";
import { InputNumberProps } from "antd/lib/input-number";

export function CVXInputNumber(props: InputNumberProps) {
  const { formatter, className, defaultValue } = props;
  return (
    <div className="cvx-input-number">
      <InputNumber
        className={className}
        formatter={formatter}
        defaultValue={defaultValue}
      />
    </div>
  );
}
