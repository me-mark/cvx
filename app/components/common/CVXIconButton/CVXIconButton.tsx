import "./CVXIconButton.scss";
import React from "react";
import { CVXIconButtonModel } from "../commonModels";

export function CVXIconButton(props: CVXIconButtonModel) {
  const { icon } = props;
  return <div className="cvx-icon-button">{icon}</div>;
}
