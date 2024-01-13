import { ImageListType } from "react-images-uploading";

export interface SellOption {
  optionTableList: OptionInfo[];
  isTable: boolean;
  itemImg: Array<ImageListType>;
  itemInfos: ItemInfo[];
  categoryList: string[];
}
export interface EachOption {
  optionName: string;
  price: number;
}

export interface OptionInfo {
  options: EachOption[];
  optionGroupName: string;
}

export interface ItemInfo {
  id: number;
  name: string;
  values: string;
}

export interface ChangeInfo {
  num1: number;
  num2: number;
  price: number;
}

export interface Item {
  itemName: string;
  imageUrl: string;
  information: string;
  category: string;
  price: number;
  optionGroups: OptionInfo[];
}

// 재고 불러오기
export interface StockQuantity {
  quantity: number;
}

export interface StockList {
  stockList: StockQuantity[];
}
