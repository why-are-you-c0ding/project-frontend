import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addUserAsync } from "../actions/UserAPI";
import { setUserAsync } from "../actions/UserAPI";

export interface User {
  isLoggingIn: boolean;
  seller: boolean;
  nickName: string;
  email: string;
  loginId: string;
  password: string;
  checkPassword: string;
  age: number;
  authKey: string;
  jwt: string;
  error: any;
}

const initialState: User = {
  isLoggingIn: false,
  seller: false,
  nickName: "",
  email: "",
  loginId: "",
  password: "",
  checkPassword: "",
  age: 0,
  authKey: "",
  jwt: "",
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //회원가입
      .addCase(addUserAsync.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        console.log(action.payload);
        state.error = action.payload;
      })
      //로그인
      .addCase(setUserAsync.pending, (state, action) => {
        console.log("로그인 중");
        state.isLoggingIn = false;
      })
      .addCase(setUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoggingIn = true;
        state.jwt = action.payload?.jwt;
      })
      .addCase(setUserAsync.rejected, (state, action) => {
        console.log("error");
        state.error = action.payload;
      }),
});

export default userSlice;
