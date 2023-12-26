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
}
