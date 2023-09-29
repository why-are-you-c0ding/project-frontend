import { combineReducers } from "@reduxjs/toolkit";
import { userInfoSlice } from "@redux/reducers/userInfoSlice";
import { signUpItemSlice } from "@redux/reducers/signUpItemSlice";

const reducer = combineReducers({
  sellOption: signUpItemSlice.reducer,
  userInfo: userInfoSlice.reducer,
});

export default reducer;
