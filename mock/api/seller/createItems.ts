import { rest } from "msw";

export const createItems = [
  rest.post("/items", (req, res, ctx) => {
    return res(ctx.status(201));
  }),
];
