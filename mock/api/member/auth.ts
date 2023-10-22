import { rest } from "msw";
import {
  login,
  logout,
  receiveEmail,
  signupMember,
  validateId,
  verificationNickname,
} from "@mock/api/data/member/auth";

export const auth = [
  rest.post("/verification/login-id", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(validateId));
  }),
  rest.post("/verification/nick-name", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(verificationNickname));
  }),
  rest.post("/emails", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(receiveEmail));
  }),
  rest.post("/members/sellers", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(signupMember));
  }),
  rest.post("/members/consumers", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(signupMember));
  }),
  rest.post("/local/login", (req, res, ctx) => {
    const oneHourLater = new Date();
    oneHourLater.setTime(oneHourLater.getTime() + 60 * 60 * 100000000000);

    return res(
      ctx.status(200),
      ctx.json(login),
      ctx.cookie("SESSION", "cookievalue", {
        expires: oneHourLater,
      }),
    );
  }),
  rest.post("/logout", (req, res, ctx) => {
    const now = new Date();

    return res(
      ctx.status(200),
      ctx.json(logout),
      ctx.cookie("SESSION", "", {
        expires: now,
      }),
    );
  }),

  // // 할일 추가
  // rest.post("/todos", (req, res, ctx) => {
  //   todos.push(req.body);
  //   return res(ctx.status(201));
  // }),
];
