import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface IAuthSlice {
  id: null | number;
  token: null | string;
}

export interface IAuthPayload {
  id: number;
  token: string;
}

const initialState: IAuthSlice = { id: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { id, token } }: PayloadAction<IAuthPayload>
    ) => {
      state.id = id;
      state.token = token;
    },
    logOutUser: (state) => {
      state.id = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOutUser } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.id;
