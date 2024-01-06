import { faker } from "@faker-js/faker";
import { eachItem, option, optionGroup } from "@typings/items";
import { categoryList } from "@redux/reducers/createItemsSlice";

export function createRandomItem(word = "") {
  return {
    itemId: faker.number.int(),
    itemName: faker.commerce.product() + ` ${word}`,
    shopName: faker.company.name(),
    basicPrice: faker.commerce.price({ dec: 0 }),
    imageUrl: faker.image.url(),
    category: categoryList[faker.number.int({ min: 0, max: 17 })],
  };
}

export function createRandomEachOption(): option {
  return {
    optionId: faker.number.int(),
    optionName: faker.commerce.productAdjective(),
    price: +faker.commerce.price({ dec: 0 }),
  };
}

export function createRandomEachOptionGroup(): optionGroup {
  return {
    optionGroupId: faker.number.int(),
    optionGroupName: faker.commerce.productAdjective(),
    options: faker.helpers.multiple(createRandomEachOption, {
      count: faker.number.int({ min: 1, max: 5 }),
    }),
  };
}

export function createRandomEachItem(): eachItem {
  return {
    itemId: 0,
    itemName: faker.commerce.product(),
    shopId: faker.number.int(),
    shopName: faker.company.name(),
    optionGroups: faker.helpers.multiple(createRandomEachOptionGroup, {
      count: faker.number.int({ min: 1, max: 3 }),
    }),
    imageUrl: faker.image.url(),
    information: faker.commerce.productDescription(),
    category: categoryList[faker.number.int({ min: 0, max: 17 })],
    price: +faker.commerce.price({ dec: 0 }),
  };
}
