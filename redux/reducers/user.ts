import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addUserAsync } from "../actions/UserAPI";
import { setUserAsync } from "../actions/UserAPI";

export interface User {
  isLoggingIn: boolean;
  data: any;
  id: string;
  password: string;
  error: any;
}

const initialState: User = {
  isLoggingIn: false,
  data: [],
  id: "",
  password: "",
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
    setLoginForm(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(setUserAsync.pending, (state, action) => {
        state.data = null;
        state.isLoggingIn = true;
      })
      .addCase(setUserAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoggingIn = false;
      })
      .addCase(setUserAsync.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export default userSlice;
