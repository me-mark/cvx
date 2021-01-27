import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import makeSelectLogin from "containers/Login/loginSelectors";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { createStructuredSelector } from "reselect";
import loginReducer from "containers/Login/loginReducer";
import loginSaga from "containers/Login/loginSaga";
import { RoutePaths } from "containers/App/routes";

const loginSelector = createStructuredSelector({
  login: makeSelectLogin(),
});

export const AuthRoute = ({ component: Component, ...rest }) => {
  useInjectReducer({ key: 'login', reducer: loginReducer });
  useInjectSaga({ key: 'login', saga: loginSaga });
  const {
    login: { isLoggedIn },
  } = useSelector(loginSelector);
  const location = useLocation();
  return (
    <Route {...rest}>
      {isLoggedIn ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: RoutePaths.LOGIN, state: { from: location } }} />
      )}
    </Route>
  );
};
