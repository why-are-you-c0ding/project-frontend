import { faker } from "@faker-js/faker";

export function createRandomItem() {
  return {
    itemId: faker.number.int(),
    itemName: faker.commerce.product(),
    shopName: faker.company.name(),
    basicPrice: faker.commerce.price(),
    imageUrl: faker.image.url(),
    category: faker.commerce.productAdjective(), // userId: faker.string.uuid(),
  };
}
