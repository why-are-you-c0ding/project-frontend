import { rest } from "msw";

const cartData = {
  cartLineItems: [
    {
      id: 20,
      itemId: 29,
      name: "멋쟁이 옷",
      count: 2,
      cartOptionGroups: [
        {
          id: 11,
          cartOption: {
            name: "Large",
            price: 2000,
          },
          name: "기초 옵션",
        },
        {
          id: 12,
          cartOption: {
            name: "Black",
            price: 1000,
          },
          name: "Color",
        },
        {
          id: 13,
          cartOption: {
            name: "Large",
            price: 2000,
          },
          name: "Sizee",
        },
      ],
      imageUrl: "www.image.url",
    },
  ],
};

export const myPageHandlers = [
  // 장바구니 조회 요청
  rest.get("/carts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cartData));
  }),
];
