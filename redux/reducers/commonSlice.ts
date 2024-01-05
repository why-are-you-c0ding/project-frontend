import { createSlice } from "@reduxjs/toolkit";
import { common } from "@typings/common";

const initialState: common = {};

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
});

export const {} = commonSlice.actions;

export default commonSlice.reducer;
