import { rest } from "msw";
import {
  createRandomEachItem,
  createRandomItem,
} from "@mock/api/data/items/getItems";
import { faker } from "@faker-js/faker";

export const getItems = [
  rest.get("/items/search", async (req, res, ctx) => {
    const page = req.url.searchParams.get("page")!;
    const keyword = req.url.searchParams.get("keyword")!;

    if (keyword === "없음") {
      return res(
        ctx.status(200),
        ctx.json("검색하려는 상품이 존재하지 않습니다."),
      );
    }

    const tempItems = faker.helpers.multiple(() => createRandomItem(keyword), {
      count: 20,
    });

    const items = {
      items: tempItems,
      finalPage: +page === 10,
    };

    return res(ctx.status(200), ctx.json(items));
  }),
  rest.get("/items", async (req, res, ctx) => {
    const page = req.url.searchParams.get("page")!;

    const tempItems = faker.helpers.multiple(createRandomItem, { count: 20 });

    const items = {
      items: tempItems,
      finalPage: +page === 10,
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
