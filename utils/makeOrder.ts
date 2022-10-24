import { IEachData } from "@typings/db";

interface optInfo {
  ["itemId"]: number;
  ["name"]: string;
  ["count"]: number;
  ["imageUrl"]: string;
  ["cartOptionGroups"]: cartOptionGroups[];
}

interface cartOptionGroups {
  ["name"]: string;
  ["cartOptions"]: cartOptions[];
}

interface cartOptions {
  ["name"]: string;
  ["price"]: number;
}

export const makeOrder = (
  eachData: IEachData,
  optInfo: optInfo,
  count: number,
  address: string,
  zoneCode: string,
  detailAddr: string,
  totalPrice: number
) => {
  let orderOptionGroups = [];

  for (let i = 0; i < optInfo.cartOptionGroups.length; i++) {
    const temp = {
      name: optInfo.cartOptionGroups[i].name,
      orderOption: optInfo.cartOptionGroups[i].cartOptions[0],
    };

    orderOptionGroups.push(temp);
  }

  const request: Array<object> = [
    {
      itemId: eachData.itemId,
      name: eachData.itemName,
      count: count,
      price: totalPrice,
      orderOptionGroups,
      address: { major: address, detail: detailAddr, zipcode: zoneCode },
    },
  ];

  return request;
};
