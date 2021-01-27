import "./header.css";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { PathKeys } from "types";
import { AppBar } from "@material-ui/core";
import { BrandHeader } from "./BrandHeader";
import { RoutePaths } from "containers/App/routes";
import { ContainerState } from "containers/Login/loginTypes";

interface HeaderProps {
  isLoggedIn: false;
  authModuleList: ContainerState['authModuleList'];
}

const isAuthModule = (module, moduleList: any[]) => {
  return moduleList.find(o => o.name === module);
}

export function Header(props: HeaderProps) {
  const { isLoggedIn, authModuleList } = props;
  const history = useHistory();

  const getCovenantLink = () => {
    const currentLocationPathname = history.location.pathname;
    if (currentLocationPathname !== PathKeys.COVENANT) {
      if (currentLocationPathname === PathKeys.COMPLIANCE) {
        return PathKeys.COMPLIANCE;
      }
    }
    return PathKeys.COVENANT;
  }

  // const getDashboardLink = () => {
  //   const currentLocationPathname = history.location.pathname;
  //   if (currentLocationPathname !== PathKeys.DASHBOARD) {
  //     if (currentLocationPathname === PathKeys.ROOT) {
  //       return PathKeys.ROOT;
  //     }
  //   }
  //   return PathKeys.DASHBOARD;
  // }

  if (!isLoggedIn || !authModuleList || !authModuleList?.length) {
    return <></>;
  } else {
    return (
      <>
        <AppBar position="static" className="header-wrapper">
          <BrandHeader />
          <div
            className="checklist-wrapper flex-layout margin-6"
            data-method="checklistSelect"
          >
            <div className="d-flex flex-grow-1">
              {/* <NavLink
                className="checklist-box center select-active relative completed"
                to={getDashboardLink()}>
                <svg className="checklist-border">
                  <use xlinkHref="#checklist-border" />
                </svg>
                <svg className="checklist-ico margin-1">
                  <use xlinkHref="#checklist-analysis" />
                </svg>
                <p className="page-text text-color-7 margin-3">Dashboard</p>
                <div className="checklist-circle">
                  <svg className="checklist-dotted">
                    <use xlinkHref="#checklist-dotted" />
                  </svg>
                  <svg className="checklist-check">
                    <use xlinkHref="#checklist-check" />
                  </svg>
                </div>
              </NavLink>
               */}
              {
                isAuthModule('SOP', authModuleList) &&
                <NavLink
                  className="checklist-box center select-active relative completed"
                  to={RoutePaths.SOP}
                >
                  <svg className="checklist-border">
                    <use xlinkHref="#checklist-border" />
                  </svg>
                  <svg className="checklist-ico margin-1">
                    <use xlinkHref="#checklist-sop" />
                  </svg>
                  <p className="page-text text-color-7 margin-3">SOP</p>
                  <div className="checklist-circle">
                    <svg className="checklist-dotted">
                      <use xlinkHref="#checklist-dotted" />
                    </svg>
                    <svg className="checklist-check">
                      <use xlinkHref="#checklist-check" />
                    </svg>
                  </div>
                </NavLink>
              }
              {
                isAuthModule('Covenant', authModuleList) &&
                <NavLink
                  className="checklist-box center select-active relative completed"
                  to={getCovenantLink()}
                >
                  <svg className="checklist-border">
                    <use xlinkHref="#checklist-border" />
                  </svg>
                  <svg className="checklist-ico margin-1">
                    <use xlinkHref="#checklist-covenant" />
                  </svg>
                  <p className="page-text text-color-7 margin-3">Covenant</p>
                  <div className="checklist-circle">
                    <svg className="checklist-dotted">
                      <use xlinkHref="#checklist-dotted" />
                    </svg>
                    <svg className="checklist-check">
                      <use xlinkHref="#checklist-check" />
                    </svg>
                  </div>
                </NavLink>
              }
              <NavLink
                className="checklist-box center select-active relative completed"
                to={RoutePaths.DOCUMENTS}
              >
                <svg className="checklist-border">
                  <use xlinkHref="#checklist-border" />
                </svg>
                <svg className="checklist-ico margin-1">
                  <use xlinkHref="#checklist-workflow" />
                </svg>
                <p className="page-text text-color-7 margin-3">Documents</p>
                <div className="checklist-circle">
                  <svg className="checklist-dotted">
                    <use xlinkHref="#checklist-dotted" />
                  </svg>
                  <svg className="checklist-check">
                    <use xlinkHref="#checklist-check" />
                  </svg>
                </div>
              </NavLink>
              {/* <div className="checklist-box center select-active relative completed">
                <svg className="checklist-ico margin-1">
                  <use xlinkHref="#checklist-profile" />
                </svg>
                <p className="page-text text-color-7 margin-3">Profile</p>
                <div className="checklist-circle">
                  <svg className="checklist-dotted">
                    <use xlinkHref="#checklist-dotted" />
                  </svg>
                  <svg className="checklist-check">
                    <use xlinkHref="#checklist-check" />
                  </svg>
                </div>
              </div>
              <div className="checklist-box center select-active relative completed">
                <svg className="checklist-border">
                  <use xlinkHref="#checklist-border" />
                </svg>
                <svg className="checklist-ico margin-1">
                  <use xlinkHref="#checklist-financial" />
                </svg>
                <p className="page-text text-color-7 margin-3">Financial</p>
                <div className="checklist-circle">
                  <svg className="checklist-dotted">
                    <use xlinkHref="#checklist-dotted" />
                  </svg>
                  <svg className="checklist-check">
                    <use xlinkHref="#checklist-check" />
                  </svg>
                </div>
              </div>
              <div className="checklist-box center select-active relative completed">
                <svg className="checklist-border">
                  <use xlinkHref="#checklist-border" />
                </svg>
                <svg className="checklist-ico margin-1">
                  <use xlinkHref="#checklist-facility" />
                </svg>
                <p className="page-text text-color-7 margin-3">Facility</p>
                <div className="checklist-circle">
                  <svg className="checklist-dotted">
                    <use xlinkHref="#checklist-dotted" />
                  </svg>
                  <svg className="checklist-check">
                    <use xlinkHref="#checklist-check" />
                  </svg>
                </div>
              </div>
              <div className="checklist-box center select-active relative completed">
                <svg className="checklist-border">
                  <use xlinkHref="#checklist-border" />
                </svg>
                <svg className="checklist-ico margin-1">
                  <use xlinkHref="#checklist-collateral" />
                </svg>
                <p className="page-text text-color-7 margin-3">Collateral</p>
                <div className="checklist-circle">
                  <svg className="checklist-dotted">
                    <use xlinkHref="#checklist-dotted" />
                  </svg>
                  <svg className="checklist-check">
                    <use xlinkHref="#checklist-check" />
                  </svg>
                </div>
              </div>
              <div className="checklist-box center select-active relative completed">
                <svg className="checklist-border">
                  <use xlinkHref="#checklist-border" />
                </svg>
                <svg className="checklist-ico margin-1">
                  <use xlinkHref="#checklist-pricing" />
                </svg>
                <p className="page-text text-color-7 margin-3">Pricing</p>
                <div className="checklist-circle">
                  <svg className="checklist-dotted">
                    <use xlinkHref="#checklist-dotted" />
                  </svg>
                  <svg className="checklist-check">
                    <use xlinkHref="#checklist-check" />
                  </svg>
                </div>
              </div>
              <div className="checklist-box center select-active relative completed">
                <svg className="checklist-border">
                  <use xlinkHref="#checklist-border" />
                </svg>
                <svg className="checklist-ico margin-1">
                  <use xlinkHref="#checklist-rating" />
                </svg>
                <p className="page-text text-color-7 margin-3">Rating</p>
                <div className="checklist-circle">
                  <svg className="checklist-dotted">
                    <use xlinkHref="#checklist-dotted" />
                  </svg>
                  <svg className="checklist-check">
                    <use xlinkHref="#checklist-check" />
                  </svg>
                </div>
              </div> */}

            </div>
          </div>
        </AppBar>
      </>
    );
  }
}
