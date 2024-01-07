import { rest } from "msw";
import { imageUrl } from "@mock/api/data/sellers/createItem";
import { Item } from "@typings/sellerPages";

export const createItems = [
  rest.post("/images", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ imageUrl: imageUrl }));
  }),
  rest.post("/items", async (req, res, ctx) => {
    const item: Item = await req.json();

    if (item.itemName === "실패") {
      return res(ctx.status(400));
    }

    return res(
      ctx.status(201),
      ctx.json({ message: "제품 생성에 성공하였습니다." }),
    );
  }),
];
