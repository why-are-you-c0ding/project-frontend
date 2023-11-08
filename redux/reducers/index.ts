import { combineReducers } from "@reduxjs/toolkit";
import { userInfoSlice } from "@redux/reducers/userInfoSlice";
import { createItemsSlice } from "@redux/reducers/createItemsSlice";

const reducer = combineReducers({
  // createItems: createItemsSlice.reducer,
  // userInfo: userInfoSlice.reducer,
});

export default reducer;
