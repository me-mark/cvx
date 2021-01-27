import "./CVXSelectBoxWithTitle.scss";
import React, { useState } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";
import { ArrowUp } from "components/svgIcon";
import { CVXSelectBoxWithTitleModel } from "../commonModels";

export function CVXSelectBoxWithTitle(props: CVXSelectBoxWithTitleModel) {
  const { options, defaultValue, onChange, onSelect, width, title = "THIS IS TITLE", disabled } = props;
  const style = {
    width: width ? width : "100%",
  };
  const [openDropdown, setDropdownOpen] = useState(true);
  const arrowClassName = !openDropdown ? "" : "rotate-180";
  return (
    <div className="select-box">
      <div className="select-box__title">{title}</div>
      <Select
        disabled={disabled || false}
        onChange={onChange}
        onSelect={onSelect}
        defaultValue={defaultValue}
        bordered={false}
        style={style}
        dropdownClassName={"dropdown"}
        suffixIcon={<ArrowUp className={arrowClassName} />}
        onDropdownVisibleChange={() => setDropdownOpen(!openDropdown)}
      >
        {options &&
          options.length &&
          options.map((option: any) => (
            <Select.Option
              value={option.value}
              key={option.id}
              className={"option"}
            >
              {option.label}
            </Select.Option>
          ))}
      </Select>
    </div>
  );
}

CVXSelectBoxWithTitle.prototype = {
  options: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
    ]),
    label: PropTypes.string,
  }),
  onChange: PropTypes.func,
  width: PropTypes.string,
};
