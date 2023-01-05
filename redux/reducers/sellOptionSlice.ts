import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Option } from "@utils/makeOptionTableList";

export interface SellOption {
  optionTableList: Option[];
}

const initialState: SellOption = {
  optionTableList: [],
};

interface ChangeInfo {
  num1: number;
  num2: number;
  price: string;
}

export const sellOptionSlice = createSlice({
  name: "sellOption",
  initialState,
  reducers: {
    getOptionTableList: (state, action) => {
      state.optionTableList = action.payload;
    },
    changePrice: (state, action: PayloadAction<ChangeInfo>) => {
      state.optionTableList[action.payload.num1].options[
        action.payload.num2
      ].price = action.payload.price;
    },
  },
  extraReducers: (builder) => {},
});

export const { getOptionTableList, changePrice } = sellOptionSlice.actions;
export const sellOption = (state: RootState) => state.sellOption;

export default sellOptionSlice.reducer;
