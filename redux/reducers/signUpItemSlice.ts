import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ImageListType } from "react-images-uploading";
import { signUpItem } from "../actions/signUpItemAPI";

interface Options {
  optionName: string;
  price: number;
}

interface Option {
  options: Options[];
  optionGroupName: string;
  basic: boolean;
}

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
    },
    changePrice: (state, action: PayloadAction<ChangeInfo>) => {
      state.optionTableList[action.payload.num1].options[
        action.payload.num2
      ].price = parseInt(action.payload.price);
    },
    changeItemImg: (state, action) => {
      state.itemImg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //signUpItem
      .addCase(signUpItem.pending, (state, action) => {
        true;
      })
      .addCase(signUpItem.fulfilled, (state, action) => {
        true;
      })
      .addCase(signUpItem.rejected, (state, action) => {
        true;
      });
  },
});

export const { getOptionTableList, changePrice, changeItemImg } =
  signUpItemSlice.actions;
export const sellOption = (state: RootState) => state.sellOption;

export default signUpItemSlice.reducer;
