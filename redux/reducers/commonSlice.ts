import { createSlice } from "@reduxjs/toolkit";
import { fa } from "@faker-js/faker";
import { common } from "@typings/common";

const initialState: common = {
  isScrollBottom: false,
};

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    onChangeScrollTrue: (state) => {
      state.isScrollBottom = true;
    },
    onChangeScrollFalse: (state) => {
      state.isScrollBottom = false;
    },
  },
});

export const { onChangeScrollFalse, onChangeScrollTrue } = commonSlice.actions;
// export const sellOption = (state: RootState) => state.sellOption;

export default commonSlice.reducer;
