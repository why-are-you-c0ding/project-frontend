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
            name: "작은거",
            price: 20000,
          },
          name: "기초 옵션",
        },
        {
          id: 23,
          cartOption: {
            name: "큰거",
            price: 1000,
          },
          name: "Color",
        },
        {
          id: 24,
          cartOption: {
            name: "중간거",
            price: 2000,
          },
          name: "Sizee",
        },
      ],
      imageUrl: "www.image.url",
    },
  ],
};

export const orderData = {
  finalPage: true,
  orderLineItems: [
    {
      itemImageUrl: "www.image.com",
      shopName: "맥 스토어",
      itemName: "맥북",
      count: 2,
      shopId: 2,
      itemId: 3,
      orderLineItemId: 7,
      orderStatus: "PAYMENT_COMPLETED",
      price: 20000,
      orderOptionGroups: [
        {
          optionGroupName: "Ram",
          optionName: "16GB",
        },
        {
          optionGroupName: "SSD",
          optionName: "512GB",
        },
      ],
    },
    {
      itemImageUrl: "www.image.com",
      shopName: "맥 스토어",
      itemName: "맥북",
      count: 2,
      shopId: 2,
      itemId: 3,
      orderLineItemId: 8,
      orderStatus: "PAYMENT_COMPLETED",
      price: 20000,
      orderOptionGroups: [
        {
          optionGroupName: "Ram",
          optionName: "16GB",
        },
        {
          optionGroupName: "SSD",
          optionName: "512GB",
        },
      ],
    },
  ],
};
export const updateCartItemCount = {
  message: "장바구니 상품 업데이트를 성공하셨습니다.",
};

export const deleteCartItem = {
  message: "장바구니 상품 삭제에 성공하셨습니다.",
};
