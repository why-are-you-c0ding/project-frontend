import { rest } from "msw";
import {
  cartData,
  deleteCartItem,
  updateCartItemCount,
} from "@mock/api/data/member/myPage";

export const myPage = [
  // 장바구니 조회 요청
  rest.get("/carts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cartData));
  }),
  rest.delete("/carts/cart-line-items", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(deleteCartItem));
  }),
  rest.patch("/carts/cart-line-items", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(updateCartItemCount));
  }),
];
