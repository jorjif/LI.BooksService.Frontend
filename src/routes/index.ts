import React from "react";
import AuthorizationPage from "../components/authorizationPage/authorization";
import MainPage from "../components/mainPage/mainPage";
import Registration from "../components/registerPage/registration";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum routeNames {
  START = "/",
  LOGIN = "/login",
  REGISTER = "/register",
}

export const publicRoutes: IRoute[] = [
  { path: routeNames.START, exact: true, component: MainPage },
  { path: routeNames.LOGIN, exact: true, component: AuthorizationPage },
  { path: routeNames.REGISTER, exact: true, component: Registration },
];
export const privateRoutes: IRoute[] = [];
