import { rest } from "msw";
import {
  failValidateId,
  failVerificationNickname,
  logout,
  receiveEmail,
  signupMember,
  validateId,
  verificationNickname,
} from "@mock/api/data/member/auth";

export const auth = [
  rest.post("/verification/login-id", async (req, res, ctx) => {
    const { loginId } = await req.json();
    if (loginId === "중복중복중복")
      return res(ctx.status(401), ctx.json(failValidateId));

    return res(ctx.status(200), ctx.json(validateId));
  }),
  rest.post("/verification/nick-name", async (req, res, ctx) => {
    const { nickName } = await req.json();
    if (nickName === "중복")
      return res(ctx.status(401), ctx.json(failVerificationNickname));

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
  rest.post("/local/login", async (req, res, ctx) => {
    const { loginId } = await req.json();

    if (loginId === "중복") return res(ctx.status(401));

    const oneHourLater = new Date();
    oneHourLater.setTime(oneHourLater.getTime() + 60 * 60 * 100000000000);

    return res(
      ctx.status(200),
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
];
