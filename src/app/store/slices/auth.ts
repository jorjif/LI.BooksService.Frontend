import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface IAuth {
  user: null | string;
  token: null | string;
}

interface IPayload {
  user: string;
  token: string;
}

const initialState: IAuth = { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<IPayload>
    ) => {
      state.user = user;
      state.token = token;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
