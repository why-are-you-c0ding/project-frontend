import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Option } from "@utils/makeOptionTableList";
import { ImageListType } from "react-images-uploading";

export interface SellOption {
  optionTableList: Option[];
  isTable: boolean;
  itemImg: Array<ImageListType>;
}

const initialState: SellOption = {
  optionTableList: [],
  isTable: false,
  itemImg: [],
};

interface ChangeInfo {
  num1: number;
  num2: number;
  price: string;
}

export const signUpItemSlice = createSlice({
  name: "sellOption",
  initialState,
  reducers: {
    getOptionTableList: (state, action) => {
      state.optionTableList = action.payload;
      state.isTable = action.payload.length > 0;
      console.log(action.payload);
    },
    changePrice: (state, action: PayloadAction<ChangeInfo>) => {
      state.optionTableList[action.payload.num1].options[
        action.payload.num2
      ].price = action.payload.price;
    },
    changeItemImg: (state, action) => {
      state.itemImg = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { getOptionTableList, changePrice, changeItemImg } =
  signUpItemSlice.actions;
export const sellOption = (state: RootState) => state.sellOption;

export default signUpItemSlice.reducer;
