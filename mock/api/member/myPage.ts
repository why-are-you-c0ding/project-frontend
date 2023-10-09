import { rest } from "msw";
import {
  cartData,
  deleteCartItem,
  orderData,
  updateCartItemCount,
} from "@mock/api/data/member/myPage";

export const myPage = [
  // 마이페이지-장바구니
  rest.get("/carts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cartData));
  }),
  rest.delete("/carts/cart-line-items", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(deleteCartItem));
  }),
  rest.patch("/carts/cart-line-items", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(updateCartItemCount));
  }),
  // 마이페이지-주문조회
  rest.get("/order-line-items/customers", (req, res, ctx) => {
    const lastLookUpOrderLineItemId = req.url.searchParams.get(
      "lastLookUpOrderLineItemId",
    );
    return res(ctx.status(200), ctx.json(orderData));
  }),
  rest.get("/order-line-items/sellers", (req, res, ctx) => {
    const lastLookUpOrderLineItemId = req.url.searchParams.get(
      "lastLookUpOrderLineItemId",
    );
    return res(ctx.status(200), ctx.json(orderData));
  }),
];
