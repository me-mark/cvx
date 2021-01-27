import "./CVXDivCollapseExpand.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { CVXDivCollapseExpandDivModel } from "../commonModels";

const style = {
  display: "none",
  cursor: "pointer",
  height: "0px",
  transition: "height 2s",
};

export const CVXDivCollapseExpand = (props: CVXDivCollapseExpandDivModel) => {
  const { title, onClick, isExpand, content } = props;
  return (
    <>
      <div className="handle-collapse-expand" onClick={() => onClick()}>
        <div className="handle-collapse-expand__title">
          <h2 className="title-2 text-color-6 margin-2 cvx__main-title-2">{title}</h2>
        </div>
        <div className="handle-collapse-expand__icon">
          <FontAwesomeIcon
            icon={isExpand ? faArrowAltCircleDown : faArrowAltCircleUp}
            color="#70abbb"
          />
        </div>
      </div>
      <div
        className="compliance-detail-collap-expand"
        style={!isExpand ? style : {}}
      >
        {content}
      </div>
    </>
  );
};
