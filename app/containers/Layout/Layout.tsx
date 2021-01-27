import './Layout.scss';
import React, { ReactElement, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { Header, CVXSpinner, DashboardHeader } from "components/common";
import makeSelectLogin from "containers/Login/loginSelectors";
import { getAuthModuleList } from "containers/Login/loginActions";
import { useLocation } from 'react-router-dom';
import { RoutePaths } from 'containers/App/routes';

const loginSelector = createStructuredSelector({
  login: makeSelectLogin(),
});
interface LayoutProps {
  children: ReactElement;
}

export default function Layout(props: LayoutProps): ReactElement {
  const { login: { isLoggedIn, authModuleList } } = useSelector(loginSelector);
  const dispatch = useDispatch();
  const { children } = props;
  const location = useLocation();

  useEffect(() => {
    dispatch(getAuthModuleList());
  }, []);

  if (!authModuleList || !authModuleList.length) {
    return (
      <>
        <CVXSpinner />
      </>
    );
  }
  if (location.pathname === RoutePaths.ROOT) {
    return (
      <>
        <DashboardHeader
          isLoggedIn={isLoggedIn}
          authModuleList={authModuleList}
        />
        {children}
      </>
    )
  }
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        authModuleList={authModuleList}
      />
      {children}
    </>
  );
}




