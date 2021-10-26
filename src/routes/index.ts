import React from "react";
import AuthorizationPage from "../components/authorizationPage/authorization";
import MainPage from "../components/mainPage/mainPage";
import Registration from "../components/registerPage/registration";
import Exchange from "../components/Exchange/Exchange";
import TradeList from "../components/tradeList/tradeList";
import UserPage from "../components/userPage/userPage";
import MainPageLogged from "../components/mainPage/logged/mainPage";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum routeNames {
  START = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  EXCHANGE = "/exchange",
  TRADES = "/trades",
  PROFILE = "/profile",
}

export const publicRoutes: IRoute[] = [
  { path: routeNames.START, exact: true, component: MainPage },
  { path: routeNames.LOGIN, exact: true, component: AuthorizationPage },
  { path: routeNames.REGISTER, exact: true, component: Registration },
];
export const privateRoutes: IRoute[] = [
  { path: routeNames.TRADES, exact: true, component: TradeList },
  { path: routeNames.PROFILE, exact: true, component: UserPage },
  { path: routeNames.EXCHANGE, exact: true, component: Exchange },
  { path: routeNames.START, exact: true, component: MainPageLogged },
];
