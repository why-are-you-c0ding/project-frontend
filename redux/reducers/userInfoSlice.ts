import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo {
  jwt: string | null;
  isLogin: boolean;
}

// 1. 쿠키 문자열 가져오기
let allCookies = document.cookie;

// 2. 원하는 쿠키 이름으로 값을 읽어오기
function getCookieValue(cookieName: string) {
  // 쿠키 문자열을 ; 문자로 분할하여 배열로 만듭니다.
  let cookies = allCookies.split(";");

  // 배열에서 공백을 제거하고 쿠키 이름과 비교하여 원하는 쿠키 값을 찾습니다.
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    // 쿠키 이름과 값은 '=' 문자로 분리됩니다.
    let cookieParts = cookie.split("=");
    if (cookieParts[0] === cookieName) {
      // 원하는 쿠키 값을 반환합니다.
      return decodeURIComponent(cookieParts[1]);
    }
  }
  // 원하는 쿠키를 찾지 못한 경우 null을 반환합니다.
  return null;
}

const initialState: UserInfo = {
  jwt: localStorage.getItem("jwt"),
  isLogin: !!getCookieValue("JSESSIONID"),
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { login, logout } = userInfoSlice.actions;
// export const userInfo = (state: RootState) => state.userInfo;

export default userInfoSlice.reducer;
