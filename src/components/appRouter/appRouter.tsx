import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes, routeNames } from "../../routes";
import PageFrame from "../pageFrame/pageFrame";

const AppRouter: React.FC = () => {
  const auth = false;
  return auth ? (
    <PageFrame>
      <Switch></Switch>
    </PageFrame>
  ) : (
    <PageFrame startPage>
      <Switch>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            {route.component}
          </Route>
        ))}
        <Redirect to={routeNames.START} />
      </Switch>
    </PageFrame>
  );
};

export default AppRouter;
