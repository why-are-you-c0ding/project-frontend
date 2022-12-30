import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../reducers/user";

export const addUserAsync = createAsyncThunk<User, any>(
  "ADD_USER",
  async (user: User) => {
    try {
      const response = await axios.post(
        "https://waycabvav.shop/members/sellers",
        user
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
  async (user: User) => {
    try {
      const response = await axios.post("https://waycabvav.shop/login");
      alert("로그인에 성공하였습니다.");
      return response.data;
    } catch (e) {
      alert("로그인에 실패하였습니다.");
      console.log(e);
    }
  }
);
