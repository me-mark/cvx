import "./header.css";
import React from "react";
import { AppBar } from "@material-ui/core";
import { BrandHeader } from "./BrandHeader";
import { ContainerState } from "containers/Login/loginTypes";

interface HeaderProps {
  isLoggedIn: false;
  authModuleList: ContainerState['authModuleList'];
}

export function DashboardHeader(props: HeaderProps) {
  const { isLoggedIn, authModuleList } = props;

  if (!isLoggedIn || !authModuleList || !authModuleList?.length) {
    return <></>;
  } else {
    return (
      <>
        <AppBar position="static" className="header-wrapper">
          <BrandHeader />
        </AppBar>
      </>
    );
  }
}
