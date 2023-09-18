import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserInfo {
  jwt: string | null;
}

const initialState: UserInfo = {
  jwt: localStorage.getItem("jwt"),
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const {} = userInfoSlice.actions;
// export const userInfo = (state: RootState) => state.userInfo;

export default userInfoSlice.reducer;
