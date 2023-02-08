import { combineReducers } from "@reduxjs/toolkit";
import { signUpItemSlice } from "./signUpItemSlice";

const reducer = combineReducers({
  sellOption: signUpItemSlice.reducer,
});

export default reducer;
