import { rest } from "msw";
import { getAllCartList } from "@mock/api/data/myPage/cartList";

export const getCartList = [
  rest.get("/carts", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getAllCartList));
  }),
];
