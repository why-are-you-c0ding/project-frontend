import { rest } from "msw";
import { faker } from "@faker-js/faker";
import { createRandomItem } from "@mock/api/data/items/getItems";

export const registeredItems = [
  rest.get("/items/sellers", (req, res, ctx) => {
    const page = req.url.searchParams.get("page")!;

    const tempItems = faker.helpers.multiple(createRandomItem, {
      count: 20,
    });

    const items = {
      items: tempItems,
      finalPage: +page === faker.number.int({ min: 0, max: 10 }),
    };

    return res(ctx.status(200), ctx.json(items));
  }),
];
