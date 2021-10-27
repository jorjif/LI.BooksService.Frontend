import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { api } from "./api/apiSlice";
import auth from "./slices/auth";

export const createStore = (options?: ConfigureStoreOptions["preloadedState"]) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth,
    },
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(api.middleware),
    ...options,
  });

export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
