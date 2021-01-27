import "../../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { RoutePaths } from "./routes";
import { Layout } from "../Layout";
import { createStructuredSelector } from "reselect";
import makeSelectLogin from "containers/Login/loginSelectors";
import { useSelector } from "react-redux";
import loginReducer from "containers/Login/loginReducer";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import loginSaga from "containers/Login/loginSaga";
import { AuthRoute } from "components";
import { SOPModule, ComplianceModule, CovenantModule, LoginModule, DashboardModule, DocumentModule } from "containers";

const loginSelector = createStructuredSelector({
  login: makeSelectLogin(),
});

function App() {
  useInjectReducer({ key: "login", reducer: loginReducer });
  useInjectSaga({ key: "login", saga: loginSaga });

  const {
    login: { isLoggedIn },
  } = useSelector(loginSelector);
  if (!isLoggedIn) {
    return <LoginModule />;
  }
  return (
    <Layout>
      <Switch>
        <Route exact path={RoutePaths.ROOT} component={DashboardModule} />
        <AuthRoute exact path="/" component={DashboardModule} />
        <AuthRoute path={RoutePaths.COVENANT} component={CovenantModule} />
        <AuthRoute path={RoutePaths.COMPLIANCE} component={ComplianceModule} />
        <AuthRoute path={RoutePaths.SOP} component={SOPModule} />
        <AuthRoute path={RoutePaths.DOCUMENTS} component={DocumentModule} />
      </Switch>
    </Layout>
  );
}
export default hot(App);
