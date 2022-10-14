export const makeOrder = (eachData: any, optInfo: any, count: number) => {
  let orderOptionGroups = [];

  for (let i = 0; i < optInfo.cartOptionGroups.length; i++) {
    console.log(optInfo.cartOptionGroups[i].cartOptionGroups);
    const temp = {
      name: optInfo.cartOptionGroups[i].name,
      orderOptions: optInfo.cartOptionGroups[i].cartOptions,
    };

    orderOptionGroups.push(temp);
  }

  const orderLineItems = [
    {
      itemId: eachData.itemId,
      name: eachData.itemName,
      count: count,
      orderOptionGroups,
    },
  ];

  const request = { shopId: eachData.shopId, orderLineItems };

  return request;
};
