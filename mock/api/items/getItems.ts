import { rest } from "msw";
import {
  createRandomEachItem,
  createRandomItem,
} from "@mock/api/data/items/getItems";
import { faker } from "@faker-js/faker";

export const getItems = [
  rest.get("/items", async (req, res, ctx) => {
    const id = req.url.searchParams.get("page")!;

    const tempItems = faker.helpers.multiple(createRandomItem, { count: 20 });

    const items = {
      items: tempItems,
      finalPage: +id === 10,
    };

    return res(ctx.status(200), ctx.json(items));
  }),
  rest.get("/items/:id", async (req, res, ctx) => {
    const { id } = req.params;

    let item = createRandomEachItem();
    item.itemId = +id;

    return res(ctx.status(200), ctx.json(item));
  }),
];
