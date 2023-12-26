import { faker } from "@faker-js/faker";

export function createRandomItem() {
  return {
    itemId: faker.number.int(),
    itemName: faker.commerce.product(),
    shopName: faker.company.name(),
    basicPrice: faker.commerce.price({ dec: 0 }),
    imageUrl: faker.image.url(),
    category: faker.commerce.productAdjective(),
  };
}

export function createRandomEachOption() {
  return {
    optionId: faker.number.int(),
    optionName: faker.commerce.productAdjective(),
    price: faker.commerce.price({ dec: 0 }),
  };
}

export function createRandomEachOptionGroup() {
  return {
    optionGroupId: faker.number.int(),
    optionGroupName: faker.commerce.productAdjective(),
    options: faker.helpers.multiple(createRandomEachOption, { count: 5 }),
  };
}

export function createRandomEachItem() {
  return {
    itemId: 0,
    itemName: faker.commerce.product(),
    shopId: faker.number.int(),
    shopName: faker.company.name(),
    optionGroups: faker.helpers.multiple(createRandomEachOptionGroup, {
      count: 3,
    }),
    imageUrl: faker.image.url(),
    information: faker.commerce.productDescription(),
    category: faker.commerce.productAdjective(),
  };
}
