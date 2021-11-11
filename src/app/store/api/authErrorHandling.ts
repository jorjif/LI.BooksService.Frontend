import { isRejectedWithValue } from "@reduxjs/toolkit";
import { Middleware, MiddlewareAPI } from "redux";
import { store } from "..";
import { logOutUser } from "../slices/auth";

export const expiredTokenHandler: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action) && action.error.status === "401") {
      localStorage.clear();
      store.dispatch(logOutUser());
    }
    return next(action);
  };
