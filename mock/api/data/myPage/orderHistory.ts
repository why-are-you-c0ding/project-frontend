import { faker } from "@faker-js/faker";

export function createRandomOrderHistoryItem() {
  return {
    itemImageUrl: faker.image.url(),
    shopName: faker.company.name(),
    itemName: faker.commerce.productName(),
    count: faker.number.int({ min: 1, max: 10 }),
    shopId: faker.number.int(),
    itemId: faker.number.int(),
    orderLineItemId: faker.number.int(),
    orderStatus: "배송 중",
    price: faker.commerce.price({ dec: 0 }),
    orderOptionGroups: RandomOrderHistoryOptionGroups(),
  };
}

function RandomOrderHistoryOptionGroups() {
  const orderOptionGroup = [];
  const numGroups = faker.number.int({ min: 1, max: 3 });

  for (let i = 0; i < numGroups; i++) {
    const cartOptionGroup = {
      optionGroupName: faker.commerce.productDescription(),
      optionName: faker.commerce.productAdjective(),
    };
    orderOptionGroup.push(cartOptionGroup);
  }

  return orderOptionGroup;
}
