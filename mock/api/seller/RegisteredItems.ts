import { rest } from "msw";
import { faker } from "@faker-js/faker";
import { createRandomItem } from "@mock/api/data/items/getItems";
import { stockQuantity } from "@mock/api/data/sellers/createItem";
import { StockList } from "@typings/sellerPages";
const shopName = faker.company.name();
let stockList: StockList;

export const registeredItems = [
  rest.get("/items/sellers", (req, res, ctx) => {
    const page = req.url.searchParams.get("page")!;
    const nullData = faker.number.int({ min: 0, max: 100 }) % 2 === 0;
    const finalPage = faker.number.int({ min: 0, max: 100 }) % 2 === 0;

    if (nullData) {
      return res(
        ctx.status(200),
        ctx.json({ message: "등록한 상품이 없습니다." }),
      );
    }

    let tempItems = faker.helpers.multiple(createRandomItem, {
      count: 20,
    });

    tempItems = tempItems.map((item) => {
      item.shopName = shopName;

      return item;
    });

    const items = {
      items: tempItems,
      finalPage: finalPage,
    };

    return res(ctx.status(200), ctx.json(items));
  }),
  rest.get("/stocks", (req, res, ctx) => {
    const params = req.url.searchParams;
    let optionList: string[][] = [];
    let optionListSize: number = 1;

    for (let i = 1; i <= params.size; i++) {
      optionList.push(params.get(`optionGroup${i}`)!.split(","));
    }

    optionList.forEach((option) => (optionListSize *= option.length));

    stockList = {
      stockList: faker.helpers.multiple(stockQuantity, {
        count: optionListSize,
      }),
    };

    return res(ctx.status(200), ctx.json(stockList));
  }),
  rest.post("/stocks", async (req, res, ctx) => {
    console.log("목 api에서 받은거", await req.json());
    return res(ctx.status(200), ctx.json({ message: "상품 수정 성공" }));
  }),
];
