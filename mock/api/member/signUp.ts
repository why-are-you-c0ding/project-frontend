import { rest } from "msw";
import { validateId, verificationNickname } from "@mock/api/data/member/signUp";

export const signUp = [
  rest.post("/verification/login-id", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(validateId));
  }),
  rest.post("/verification/nick-name", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(verificationNickname));
  }),

  // // 할일 추가
  // rest.post("/todos", (req, res, ctx) => {
  //   todos.push(req.body);
  //   return res(ctx.status(201));
  // }),
];
