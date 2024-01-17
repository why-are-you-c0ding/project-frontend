import { createSlice } from "@reduxjs/toolkit";

export interface SellerInfo {
  optionCombinations: number[][];
}

const initialState: SellerInfo = {
  optionCombinations: [],
};

export const sellersSlice = createSlice({
  name: "sellersSlice",
  initialState,
  reducers: {
    onSetOptionCombinations: (state, action) => {
      state.optionCombinations = action.payload;
    },
  },
});

export const { onSetOptionCombinations } = sellersSlice.actions;

export default sellersSlice.reducer;
