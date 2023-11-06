import { ImageListType } from "react-images-uploading";

export interface SellOption {
  optionTableList: Option[];
  isTable: boolean;
  itemImg: Array<ImageListType>;
  itemInfos: ItemInfo[];
  categoryList: string[];
}
export interface OptionInfos {
  optionName: string;
  price: number;
}

export interface Option {
  options: OptionInfos[];
  optionGroupName: string;
  basic: boolean;
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
