import { rest } from "msw";
import { faker } from "@faker-js/faker";
import { createRandomOrderHistoryItem } from "@mock/api/data/myPage/orderHistory";
const shopName = faker.company.name();

export const registeredItems = [
  rest.get("/order-line-items/customers", (req, res, ctx) => {
    const page = req.url.searchParams.get("page")!;
    const nullData = faker.number.int({ min: 0, max: 100 }) % 2 === 0;
    const finalPage = faker.number.int({ min: 0, max: 100 }) % 2 === 0;

    if (nullData) {
      return res(
        ctx.status(200),
        ctx.json({ message: "주문한 상품이 없습니다." }),
      );
    }

    let tempItems = faker.helpers.multiple(createRandomOrderHistoryItem, {
      count: 20,
    });

    const items = {
      orderLineItems: tempItems,
      finalPage: finalPage,
    };

    return res(ctx.status(200), ctx.json(items));
  }),
];
