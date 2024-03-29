import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChangeInfo, SellOption } from "@typings/sellerPages";

export const categoryList = [
  "Food",
  "Health",
  "Electronics",
  "Sports & Outdoors",
  "Baby",
  "Home",
  "Household Essentials",
  "Clothing",
  "Personal Care",
  "Toys",
  "Beauty",
  "Shop by Brand",
  "Home Improvement",
  "Industrial & Scientific",
  "Patio & Garden",
  "Pets",
  "Arts Crafts & Sewing",
  "Premium Beauty",
];

const initialState: SellOption = {
  optionTableList: [],
  isTable: false,
  itemImg: [],
  itemInfos: [{ id: 0, name: "", values: "" }],

  // 더미 값
  // optionTableList: [],
  // isTable: isTable,
  // itemImg: [],
  // itemInfos: itemInfos,

  // 카테고리는 항상 고정
  categoryList: categoryList,
};

export const createItemsSlice = createSlice({
  name: "createItems",
  initialState,
  reducers: {
    getOptionTableList: (state, action) => {
      state.optionTableList = action.payload;
      state.isTable = action.payload.length > 0;
    },
    changePrice: (state, action: PayloadAction<ChangeInfo>) => {
      state.optionTableList[action.payload.num1].options[
        action.payload.num2
      ].price = action.payload.price;
    },
    changeItemImg: (state, action) => {
      state.itemImg = action.payload;
    },
    setItemInfos: (state, action) => {
      state.itemInfos = action.payload;
    },
  },
});

export const { getOptionTableList, changePrice, changeItemImg, setItemInfos } =
  createItemsSlice.actions;
// export const sellOption = (state: RootState) => state.sellOption;

export default createItemsSlice.reducer;
