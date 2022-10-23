// Buy 컴포넌트에서 사용, 장바구니
export interface IEachData {
  ["itemId"]: number;
  ["itemName"]: string;
  ["shopId"]: number;
  ["shopName"]: string;
  ["optionGroups"]: optionGroups[];
  ["imageUrl"]: string;
  ["information"]: string;
}

export interface optionGroups {
  ["optionGroupId"]: number;
  ["optionGroupName"]: string;
  ["options"]: options[];
  ["basic"]: boolean;
}

export interface options {
  ["optionId"]: number;
  ["optionName"]: string;
  ["price"]: number;
}

// Buying 컴포넌트에서 사용, 주문내역
export interface IOrderData {
  ["finalPage"]: boolean;
  ["orders"]: orders[];
}

export interface orders {
  ["itemImageUrl"]: string;
  ["shopName"]: string;
  ["itemName"]: string;
  ["orderOptionGroups"]: orderOptionGroups[];
  ["count"]: number;
  ["shopId"]: number;
  ["itemId"]: number;
  ["orderId"]: number;
  ["orderStatus"]: string;
  ["price"]: number;
}

export interface orderOptionGroups {
  ["name"]: string;
  ["option"]: {
    ["name"]: string;
  };
}
