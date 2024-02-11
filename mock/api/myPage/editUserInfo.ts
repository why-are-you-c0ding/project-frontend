import { rest } from "msw";

export const editUserInfoData = [
  rest.post("/userinfo", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json("정보 변경을 완료하였습니다."));
  }),
];
