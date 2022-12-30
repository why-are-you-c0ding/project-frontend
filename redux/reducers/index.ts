import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user";

const reducer = combineReducers({
  user: userSlice.reducer,
});

export default reducer;
