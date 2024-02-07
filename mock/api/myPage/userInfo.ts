import { rest } from "msw";
import { getUserInfoData } from "@mock/api/data/myPage/userInfo";

export const getUserInfo = [
  rest.get("/userinfo", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getUserInfoData));
  }),
];
