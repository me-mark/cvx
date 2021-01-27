import "./CVXTableRow.scss";
import React from "react";
import classnames from "classnames";
import _ from 'lodash';
import { CVXTableRowModel } from "../../commonModels";

export function CVXTableRow(props: CVXTableRowModel) {
  const { data, onSelect, activeKey, tdStyles, widthPercentages } = props;
  const keys = Object.keys(data);
  const values: any[] = Object.values(data);
  const isSelected = activeKey === data.id;
  const handleOnSelect = () => {
    onSelect();
  };
  return (
    <tr
      className={classnames("custom-row", {
        "custom-selected-row": isSelected,
      })}
      onClick={handleOnSelect}
    >
      {data &&
        values.length > 0 &&
        values.map((value: string | number | { info: any, additionInfo: any }, index) => {
          const borderClass = index === keys.length - 1 ? "" : "td-border";
          const boldFieldClass = index === 1 ? "bold-field" : "";
          const tdStyle = tdStyles?.length && tdStyles[index] ?
            tdStyles[index] :
            {
              width:
                `${widthPercentages && widthPercentages[index]}%` ||
                "initial",
            };
          if (!_.isObject(value)) {
            return (
              <td key={index} style={tdStyle}>
                <span className={boldFieldClass}>{value}</span>
                <span className={borderClass}></span>
              </td>
            );
          }
          return (
            <td key={index} style={tdStyle}>
              <div className={boldFieldClass}>{value.info}</div>
              <div className="custom-row__addition-info">
                {value.additionInfo}
              </div>
              <div className={borderClass}></div>
            </td>
          );
        })}
    </tr>
  );
}
