import React, { ReactElement } from "react";
import { LayoutType } from "../../constants";

export enum RoutePaths {
  LOGIN = "/login",
  ROOT = "/",
  COVENANT = "/covenant",
  COMPLIANCE = "/compliance",
  SOP = "/sop",
  DOCUMENTS = '/documents',
}

interface CVXRoutesModel {
  path: RoutePaths | string;
  layout: LayoutType;
  component: ReactElement;
  header?: ReactElement;
}
export const CVXRoutes: CVXRoutesModel[] = [
  {
    path: RoutePaths["/"],
    layout: "MAIN",
    component: <></>,
  },
  {
    path: RoutePaths.COVENANT,
    layout: "MAIN",
    component: <></>,
  },
];
