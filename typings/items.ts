// 전체 조회 시 사용하는 아이템 타입
export interface item {
  itemId: number;
  itemName: string;
  shopName: string;
  basicPrice: number;
  imageUrl: string;
  category: string;
}

export interface option {
  optionId: number;
  optionName: string;
  price: number;
}

export interface optionGroup {
  optionGroupId: number;
  optionGroupName: string;
  options: option[];
}

// 개별 조회 시 사용하는 아이템 타입
export interface eachItem {
  itemId: number;
  itemName: string;
  shopId: number;
  shopName: string;
  optionGroups: optionGroup[];
  imageUrl: string;
  information: string;
  category: string;
  price: number;
}

// 상품 구매로 넘겨줄때
export interface orderOption {
  name: string;
  price: number;
}

export interface orderOptionGroup {
  name: string;
  orderOption: orderOption;
}

export interface orderLineItem {
  itemId: number;
  name: string;
  count: number;
  price: number;
  orderOptionGroups: orderOptionGroup[];
}

//상품 장바구니에 넣기
export interface cartOption {
  name: string;
  price: number;
}

export interface cartOptionGroup {
  name: string;
  cartOption: cartOption;
}

export interface addCartItem {
  itemId: number;
  name: string;
  count: number;
  imageUrl: string;
  price: number;
  cartOptionGroups: cartOptionGroup[];
}

// 결제 페이지에서 사용되는 아이템 정보
export interface approvalItemInfo extends orderLineItem {
  totalPayment: number;
}
