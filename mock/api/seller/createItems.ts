import { rest } from "msw";

export const createItems = [
  rest.post("/images", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ imageUrl: "이미지 주소" }));
  }),
  rest.post("/items", (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ message: "성공" }));
  }),
];
