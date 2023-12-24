import { rest } from "msw";
import { pagingAllItems } from "@mock/api/data/items/getItems";

export const getItems = [
  rest.get("/items?page=:id", async (req, res, ctx) => {
    const { id } = req.params;
    const items = { ...pagingAllItems, finalPage: !(+id === 10) };

    return res(ctx.status(200), ctx.json(items));
  }),
];
