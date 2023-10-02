export const cartData = {
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
    {
      id: 1,
      itemId: 3,
      name: "오현이 옷",
      count: 5,
      cartOptionGroups: [
        {
          id: 22,
          cartOption: {
            name: "Large",
            price: 2000,
          },
          name: "기초 옵션",
        },
        {
          id: 23,
          cartOption: {
            name: "Black",
            price: 1000,
          },
          name: "Color",
        },
        {
          id: 24,
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

export const updateCartItemCount = {
  message: "장바구니 상품 업데이트를 성공하셨습니다",
};

export const deleteCartItem = {
  message: "장바구니 상품 삭제에 성공하셨습니다",
};
