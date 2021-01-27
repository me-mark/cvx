import "./CVXSelectBox.scss";
import React, { useState } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";
import { ArrowUp } from "components/svgIcon";
import { CVXSelectBoxModel } from "../commonModels";

export function CVXSelectBox(props: CVXSelectBoxModel) {
  const { options, onChange, width, disabled, defaultValue } = props;
  const style = {
    width: width ? width : "100%",
    display: "flex",
    alignItems: "center",
  };
  const [openDropdown, setDropdownOpen] = useState(true);
  const arrowClassName = !openDropdown ? "" : "rotate-180";
  return (
    <Select
      disabled={disabled || false}
      onChange={onChange}
      bordered={false}
      className={"select-box"}
      style={style}
      dropdownClassName={"dropdown"}
      suffixIcon={<ArrowUp className={arrowClassName} />}
      onDropdownVisibleChange={() => setDropdownOpen(!openDropdown)}
      defaultValue={defaultValue ? defaultValue : options.length > 0 && options[0].id}
    >
      {options &&
        options.length &&
        options.map((option) => (
          <Select.Option
            value={option.value}
            key={option.id}
            className={"option"}
          >
            {option.label}
          </Select.Option>
        ))}
    </Select>
  );
}

CVXSelectBox.prototype = {
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
