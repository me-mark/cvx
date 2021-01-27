import "./Login.scss";
import React, { useState } from "react";
import * as common from "../../utils/common";
import { toastr } from "react-redux-toastr";
import { ToastrTypes } from "../../types";
import { useTranslation } from "react-i18next";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import loginReducer from "./loginReducer";
import loginSaga from "./loginSaga";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import makeSelectLogin from "./loginSelectors";
import LoginForm from "components/Login/LoginForm/LoginForm";
import { checkLoginManual } from "./loginActions";
import { Redirect } from "react-router-dom";
import { RoutePaths } from "containers/App/routes";

const loginSelector = createStructuredSelector({
  login: makeSelectLogin(),
});

export default function LoginPage() {
  useInjectReducer({ key: "login", reducer: loginReducer });
  useInjectSaga({ key: "login", saga: loginSaga });
  const {
    login: { isLoggedIn },
  } = useSelector(loginSelector);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function onHandleLogin(loginInfo) {
    dispatch(checkLoginManual(loginInfo));
  }

  // const { from } = props.location.state || {
  //   from: { pathname: PathKeys.LOGIN },
  // };
  // function onPressLogin(loginInfo) {
  //   if (validateInputs(loginInfo)) {
  //     loginManual(loginInfo).then(
  //       (resp) => {
  //         if (resp.success) {
  //           setMemberDetail(resp.data).then(
  //             () => {
  //               props.history.replace(PathKeys.DASHBOARD);
  //             },
  //             (error) => {
  //               toastr.error(ToastrTypes.ERROR, error.message || error);
  //             }
  //           );
  //         } else {
  //           toastr.error(ToastrTypes.ERROR, resp.message);
  //         }
  //       },
  //       (error) => {
  //         toastr.error(ToastrTypes.ERROR, error);
  //         console.warn("LOGIN VIEW ERROR:", error);
  //       }
  //     );
  //   }
  // }

  function validateInputs({ email, password }) {
    if (!common.validateEmail(email)) {
      toastr.warning(ToastrTypes.INVALID, t("login.validate_invalid_email"));
      return false;
    }
    if (common.isEmpty(password)) {
      toastr.warning(ToastrTypes.EMPTY, t("login.validate_missing_password"));
      return false;
    }

    return true;
  }

  function onHandleFieldChange(event) {
    event.preventDefault();
    if (event.target.name === "username") {
      setUsername(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }

  if (isLoggedIn) {
    return <Redirect to={RoutePaths.ROOT} />;
  }

  return (
    <div className="login-wrapper">
      <LoginForm
        handleLogin={onHandleLogin}
        handleFieldChange={onHandleFieldChange}
        loginInfo={{ username, password }}
        hanldeRemember={() => { }}
      />
    </div>
  );
};
