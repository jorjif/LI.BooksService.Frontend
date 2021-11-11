import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserData {
  firstName: string | null;
  userName: string | null;
}

const initialState: IUserData = {
  firstName: null,
  userName: null,
};

const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData(
      state,
      { payload: { userName, firstName } }: PayloadAction<IUserData>
    ) {
      state.userName = userName;
      state.firstName = firstName;
    },
  },
});

export default userData.reducer;
export const { setUserData } = userData.actions;
