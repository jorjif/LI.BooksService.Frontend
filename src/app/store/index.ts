import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import auth from "./slices/auth";
import { loadState } from "./localStorage";
import { expiredTokenHandler } from "./api/authErrorHandling";
import userData from "./slices/userData";
const preloadedState = loadState();

export const createStore = (options?: ConfigureStoreOptions["preloadedState"]) =>
  configureStore({
    preloadedState,
    reducer: {
      [api.reducerPath]: api.reducer,
      userData: userData,
      auth,
    },
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(api.middleware).concat(expiredTokenHandler),
    ...options,
  });

export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
