import { rest } from "msw";
import {
  createRandomItem,
  pagingAllItems,
} from "@mock/api/data/items/getItems";
import { faker } from "@faker-js/faker";

export const getItems = [
  rest.get("/items", async (req, res, ctx) => {
    const id = req.url.searchParams.get("page")!;

    const tempItems = faker.helpers.multiple(createRandomItem, { count: 10 });

    const items = {
      items: tempItems,
      finalPage: !(+id === 10),
    };

    return res(ctx.status(200), ctx.json(items));
  }),
];
