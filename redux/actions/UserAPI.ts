import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../reducers/user";

const headers = {
  "X-Requested-With": "XMLHttpRequest",
};

export const addUserAsync = createAsyncThunk<User, any>(
  "ADD_USER",
  async (
    {
      nickName,
      email,
      loginId,
      password,
      checkPassword,
      age,
      authKey,
      seller,
    }: User,
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        seller
          ? "https://waycabvav.shop/members/sellers"
          : "https://waycabvav.shop/members/consumers",
        { nickName, email, loginId, password, checkPassword, age, authKey },
        { withCredentials: true, headers }
      );
      alert("회원가입에 성공하였습니다.");
      console.log(response.data);
      return response.data;
    } catch (e: any) {
      alert("회원가입에 실패하였습니다.");
      console.log(e);
    }
  }
);

// 로그인
export const setUserAsync = createAsyncThunk<User, any>(
  "SET_USER",
  async ({ loginId, password }: User, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://waycabvav.shop/login",
        { loginId, password },
        { withCredentials: true, headers }
      );
      alert("로그인에 성공하였습니다.");
      console.log(response?.data);
      return response.data;
    } catch (e: any) {
      alert("로그인에 실패하였습니다.");
      console.log(e);
    }
  }
);
