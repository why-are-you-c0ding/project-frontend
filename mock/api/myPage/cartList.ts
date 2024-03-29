import { rest } from "msw";
import { getAllCartList } from "@mock/api/data/myPage/cartList";

export const getOrderHistory = [
  rest.get(
    "/order-line-items/customers?lastLookUpOrderLineItemId=0",
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(getAllCartList));
    },
  ),
];
