import { RootState } from "..";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = process.env.REACT_APP_URL;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authentication", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.query({
      query: (registerData) => ({
        url: "User",
        method: "POST",
        body: registerData,
      }),
    }),
  }),
});
