import "./CVXCard.scss";
import React from "react";
import classnames from "classnames";
import { CVXCardModel } from "../commonModels";

export const CVXCard = (props: CVXCardModel) => {
  const { title, isActive, onClick } = props;

  return (
    <div
      className={classnames("cvx-card", { "cvx-card__active": isActive })}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "initial" }}
    >
      {title}
    </div>
  );
};
