import "./CVXTableGroupedRow.scss";
import React, { useState, CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { CVXTableGroupedRowModel } from "../../commonModels";

export function CVXTableGroupedRow(props: CVXTableGroupedRowModel) {
  const {
    data,
    onClickChildRow,
    activeKey,
    primaryKey,
    widthPercentages,
    isOpenFirstGroup,
    tdStyles,
  } = props;
  const style = {
    backgroundColor: "#1a5c6f",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: 14,
    height: 50,
    padding: 10
  };
  const [openChildrenRow, toggleOpenChildrenRow] = useState(
    isOpenFirstGroup || false
  );

  return (
    <>
      <tr onClick={() => toggleOpenChildrenRow(!openChildrenRow)}>
        <td colSpan={"100%" as any} style={style}>
          {data.name}
          <span className="float-right">
            <FontAwesomeIcon
              icon={openChildrenRow ? faArrowAltCircleUp : faArrowAltCircleDown}
              color="white"
            />
          </span>
        </td>
      </tr>
      <tr className="custom-row__tr-space"/>
      {openChildrenRow &&
        data.items.map((dataItem: any, index: any) => (
          <RowItem
            dataItem={dataItem}
            onClickChildRow={onClickChildRow}
            primaryKey={primaryKey}
            widthPercentages={widthPercentages}
            selected={dataItem[primaryKey] === activeKey || null}
            tdStyles={tdStyles}
          />
        ))}
    </>
  );
}

interface RowItemProps {
  dataItem: string;
  onClickChildRow: (value: any) => {};
  primaryKey: any;
  widthPercentages?: any[];
  selected?: boolean | null;
  tdStyles?: CSSProperties[];
}

function RowItem(props: RowItemProps) {
  const {
    dataItem,
    onClickChildRow,
    primaryKey,
    widthPercentages,
    selected,
    tdStyles,
  } = props;
  const keys = Object.keys(dataItem);
  const values = Object.values(dataItem);
  return (
    <>
      <tr
        className={classNames("custom-row", { "custom-selected-row-grouped": selected })}
        onClick={() => onClickChildRow(dataItem[primaryKey])}
      >
        {dataItem &&
          values.length > 0 &&
          values.map((key, index) => {
            const borderClass =
              index === 0 || index === keys.length - 1 ? "" : "td-border";
            const boldFieldClass = index === 1 ? "bold-field" : "";
            const tdStyle = tdStyles?.length && tdStyles[index] ?
              tdStyles[index] :
              {
                width:
                  `${widthPercentages && widthPercentages[index]}%` ||
                  "initial",
              };
            return (
              <td
                key={index}
                style={tdStyle}
              >
                <span className={boldFieldClass}>{key}</span>
                <span className={borderClass}></span>
              </td>
            );
          })}
      </tr>
      <tr className='custom-row__tr-space'/>
    </>
  );
}
