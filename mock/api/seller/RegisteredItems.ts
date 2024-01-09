import { rest } from "msw";
import { faker } from "@faker-js/faker";
import { createRandomItem } from "@mock/api/data/items/getItems";
const shopName = faker.company.name();

export const registeredItems = [
  rest.get("/items/sellers", (req, res, ctx) => {
    const page = req.url.searchParams.get("page")!;
    const finalPage = faker.number.int({ min: 0, max: 100 }) % 2 === 0;

    let tempItems = faker.helpers.multiple(createRandomItem, {
      count: 20,
    });

    tempItems = tempItems.map((item) => {
      item.shopName = shopName;

      return item;
    });

    const items = {
      items: tempItems,
      finalPage: finalPage,
    };

    return res(ctx.status(200), ctx.json(items));
  }),
];
