import { IAuthSlice } from "./slices/auth";
import { IUserData } from "./slices/userData";

interface ILocalStorage {
  auth: IAuthSlice;
  userData: IUserData;
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = (state: ILocalStorage) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};
