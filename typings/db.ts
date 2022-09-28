export interface EachProduct {
  shopId: number;
  shopName: string;
  itemId: number;
  itemName: string;
  basic: boolean;
  [key: number]: string | number | boolean | any;

  optionGroups: optionGroups[];
}

export interface optionGroups {
  optionGroupName: string;
  optionGroupId: number;
  [key: string]: string | number | boolean | any;
  options: { [key: string]: string | number | boolean | any }[];
}

export interface options {
  optionId: number;
  optionName: string;
  price: number;
}
