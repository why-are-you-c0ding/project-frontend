import { faker } from "@faker-js/faker";

export function createRandomCartLineItems() {
  return {
    id: faker.number.int(),
    itemId: faker.number.int(),
    name: faker.commerce.productName(),
    count: faker.number.int({ min: 1, max: 10 }),
    cartOptionGroups: generateRandomCartOptionGroups(),
    imageUrl: faker.image.url(),
  };
}

function generateRandomCartOptionGroups() {
  const cartOptionGroups = [];
  const numGroups = faker.number.int({ min: 1, max: 3 });

  for (let i = 0; i < numGroups; i++) {
    const cartOptionGroup = {
      id: faker.number.int(),
      cartOption: generateCartOption(),
      name: faker.commerce.productAdjective(),
    };
    cartOptionGroups.push(cartOptionGroup);
  }

  return cartOptionGroups;
}

function generateCartOption() {
  return {
    name: faker.commerce.productAdjective(),
    price: faker.number.int({ min: 500, max: 5000 }),
  };
}

export const getAllCartList = {
  cartLineItems: faker.helpers.multiple(createRandomCartLineItems, {
    count: 5,
  }),
};
