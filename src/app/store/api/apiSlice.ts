import { RootState } from "..";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserRegistration, IRegisterData, ILoginBody } from "./apiTypes";

const url = process.env.REACT_APP_URL;

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation<IUserRegistration, IRegisterData>({
      query: (registerData: IRegisterData) => ({
        url: "User/register",
        method: "POST",
        body: registerData,
      }),
    }),
    login: builder.mutation<IUserRegistration, ILoginBody>({
      query: (loginData: ILoginBody) => ({
        url: "User/login",
        method: "POST",
        body: loginData,
      }),
    }),
    getUserRequests: builder.query({
      query: (id) => ({
        url: `BookRequest/GetAllUserBookRequests/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserRequestsQuery, useRegisterMutation, useLoginMutation } =
  api;
