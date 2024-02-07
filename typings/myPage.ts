export interface CartOption {
  name: string;
  price: number;
}

export interface CartOptionGroup {
  id: number;
  cartOption: CartOption;
  name: string;
}

export interface CartLineItem {
  id: number;
  itemId: number;
  name: string;
  count: number;
  cartOptionGroups: CartOptionGroup[];
  imageUrl: string;
}
export interface CartData {
  cartLineItems: CartLineItem[];
}

export interface CartItemInfo {
  count: number;
  cartLineItemId: number;
}

export interface orderOptionGroups {
  optionGroupName: string;
  optionName: string;
}
export interface orderLineItems {
  itemImageUrl: string;
  shopName: string;
  itemName: string;
  count: number;
  shopId: number;
  itemId: number;
  orderLineItemId: number;
  orderStatus: string;
  price: number;
  orderOptionGroups: orderOptionGroups[];
}

//주문내역 페이징 타입
export interface orderHistoryPaging {
  finalPage: boolean;
  orderLineItems: orderLineItems[];
}

export interface UserInfoData {
  nickName: string;
  id: string;
  email: string;
  age: number;
  role: string;
}

export interface UserInfo {
  UserInfo: UserInfoData;
}
