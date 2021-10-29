import { RootState } from "..";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserRegistration } from "./apiTypes";

const url = process.env.REACT_APP_URL;
interface IRegisterData {
  firstName: string;
  lastName: string;
  secondName: string;
  email: string;
  userName: string;
  password: string;
  addrCity: string;
  addrStreet: string;
  addrStructure: string;
  addrHouse: string;
  addrApart: string;
  addrIndex: string;
}
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
      query: (registerData) => ({
        url: "User/register",
        method: "POST",
        body: registerData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = api;
