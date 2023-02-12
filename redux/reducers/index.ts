import { combineReducers } from "@reduxjs/toolkit";
import { signUpItemSlice } from "./signUpItemSlice";
import { userInfoSlice } from "./userInfoSlice";

const reducer = combineReducers({
  sellOption: signUpItemSlice.reducer,
  userInfo: userInfoSlice.reducer,
});

export default reducer;
