import "./CVXTableHeader.scss";
import React from "react";
import { CVXTableHeaderModel } from "../../commonModels";

export function CVXTableHeader(props: CVXTableHeaderModel) {
  const { data, widthPercentages, thStyles } = props;
  return (
    <tr className="custom-table__header">
      {data &&
        data.length &&
        data.map((value: any, index: number) => {
          const thStyle = thStyles?.length && thStyles[index] ? thStyles[index] : 
          widthPercentages
            ? { width: `${widthPercentages[index]}%` }
            : {};
          return <th style={thStyle}>{value}</th>;
        })}
    </tr>
  );
}
