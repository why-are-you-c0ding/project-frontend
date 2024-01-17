import { createSlice } from "@reduxjs/toolkit";
import { common } from "@typings/common";

const initialState: common = {
  isLoading: false,
};

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    onSetIsLoading: (state, action: { payload: boolean }) => {
      state.isLoading = action.payload;
    },
  },
});

export const { onSetIsLoading } = commonSlice.actions;

export default commonSlice.reducer;
