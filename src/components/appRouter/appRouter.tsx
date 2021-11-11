import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth } from "../../app/hooks/useLogin";
import { privateRoutes, publicRoutes, routeNames } from "../../routes";
import PageFrame from "../pageFrame/pageFrame";

const AppRouter: React.FC = () => {
  const auth = !!useAuth();
  return auth ? (
    <PageFrame>
      <Switch>
        {privateRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Redirect to={routeNames.START} />
      </Switch>
    </PageFrame>
  ) : (
    <PageFrame startPage>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Redirect to={routeNames.START} />
      </Switch>
    </PageFrame>
  );
};

export default AppRouter;
