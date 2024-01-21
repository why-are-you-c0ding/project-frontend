import { rest } from "msw";
import {
  deleteCartItem,
  updateCartItemCount,
} from "@mock/api/data/member/myPage";
import { getAllCartList } from "@mock/api/data/myPage/cartList";

export const myPage = [
  // 마이페이지-장바구니
  rest.get("/carts", (req, res, ctx) => {
    const cart = { ...getAllCartList };
    return res(ctx.status(200), ctx.json(cart));
  }),
  rest.delete("/carts/cart-line-items", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(deleteCartItem));
  }),
  rest.patch("/carts/cart-line-items", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(updateCartItemCount));
  }),
];
