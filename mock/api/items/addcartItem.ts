import { rest } from "msw";

export const addcartItem = [
  rest.post("/carts/cart-line-items", async (req, res, ctx) => {
    const { id } = req.params;

    return res(ctx.status(200), ctx.json("흐어"));
  }),
];
