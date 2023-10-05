// Buy 컴포넌트에서 사용, 개별 상품 조회
export interface IEachData {
  ["itemId"]: number;
  ["itemName"]: string;
  ["shopId"]: number;
  ["shopName"]: string;
  ["optionGroups"]: optionGroups[];
  ["imageUrl"]: string;
  ["information"]: string;
  ["category"]: string;
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

// EachOrder, CustomerEachOrder 컴포넌트에서 사용, 판매자 주문 들어온 내역, 소비자 주문내역
export interface IEachOrder {
  ["orderId"]: number;
  ["itemId"]: number;
  ["itemName"]: string;
  ["itemImageUrl"]: string;
  ["count"]: number;
  ["orderStatus"]: string;
  ["address"]: {
    ["major"]: string;
    ["detail"]: string;
    ["zipcode"]: string;
  };
  ["shopName"]: string;
  ["shopId"]: number;
  ["price"]: number;
  ["orderOptionGroups"]: orderOptionGroups[];
}

//Like 컴포넌트에서 사용, 장바구니 조회
export interface ICartData {
  ["cartLineItems"]: cartLineItems;
}

export interface cartLineItems {
  ["id"]: number;
  ["itemId"]: number;
  ["name"]: string;
  ["count"]: number;
  ["imageUrl"]: string;
  ["cartOptionGroups"]: Array<{
    ["id"]: number;
    ["cartOption"]: {
      ["name"]: string;
      ["price"]: number;
    };
    ["name"]: string;
  }>;
}

// MainItem 컴포넌트에서 사용, 전체 상품 조회
export interface ListData {
  ["finalPage"]: boolean;
  ["items"]: AllData[];
}

export interface AllData {
  itemId: number;
  itemName: string;
  shopName: string;
  basicPrice: number;
  imageUrl: string;
  category: string;
}

// sellOrder 컴포넌트에서 사용, 판매자가 받은 주문 조회
export interface orderData {
  ["finalPage"]: boolean;
  ["orders"]: sellOrders[];
}

export interface sellOrders {
  ["itemImageUrl"]: string;
  ["itemName"]: string;
  ["count"]: number;
  ["shopId"]: number;
  ["itemId"]: number;
  ["orderId"]: number;
  ["orderStatus"]: string;
  ["price"]: number;
  ["createdAt"]: string;
}

//Recommend 컴포넌트에서 사용, 추천 상품 조회
export interface bestData {
  ["itemName"]: Array<string>;
}
