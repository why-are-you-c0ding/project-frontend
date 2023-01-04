import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Option } from "@utils/makeOptionTableList";

export interface SellOption {
  optionTableList: Option[];
}

const initialState: SellOption = {
  optionTableList: [],
};

export const sellOptionSlice = createSlice({
  name: "sellOption",
  initialState,
  reducers: {
    getOptionTableList: (state, action) => {
      state.optionTableList = action.payload;
    },
    changePrice: (state, action: any) => {
      console.log(action.num1);
    },
  },
  extraReducers: (builder) => {},
});

export const { getOptionTableList, changePrice } = sellOptionSlice.actions;
export const sellOption = (state: RootState) => state.sellOption;

export default sellOptionSlice.reducer;
