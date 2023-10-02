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
export interface GetCartDataSuccess {
  cartLineItems: CartLineItem[];
}

export interface CartItemInfo {
  count: number;
  cartLineItemId: number;
}
