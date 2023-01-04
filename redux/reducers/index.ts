import { combineReducers } from "@reduxjs/toolkit";
import { sellOptionSlice } from "./sellOptionSlice";

const reducer = combineReducers({
  sellOption: sellOptionSlice.reducer,
});

export default reducer;
