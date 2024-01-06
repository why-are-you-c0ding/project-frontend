import React from "react";
import { TopHeader } from "@pages/MyPage/styles";
import ReponsiveBar from "@components/UI/ReponsiveBar";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import qs from "qs";
import {
  Wrapper,
  StockOption,
  StockID,
  StockNumber,
} from "@components/SellerPages/SellStockLook/styles";

const SellStockLook = () => {
  const params = { optionGroup1: [1] };
  const { data: StockData, error } = useSWR<any>(
    "https://waycabvav.shop/stocks?optionGroup1=21,32&optionGroup2=29",
    fetcher,
  );

  // const { data: StockOption, error } = useSWR<any>(
  //   "https://waycabvav.shop/",
  //   fetcher
  // );

  console.log(StockData);

  const optionLen: any = StockData?.stockList?.length;

  // 옵션의 이름
  let stockId: Array<number> = [];
  let sotckQuantity: Array<number> = [];

  for (let i = 0; i < optionLen; i++) {
    let temp = StockData?.stockList[i].stockId;
    let temp2 = StockData?.stockList[i].quantity;

    if (temp) stockId.push(temp);
    if (temp2) sotckQuantity.push(temp2);
  }

  console.log(stockId);

  return (
    <Wrapper>
      <ReponsiveBar title={"상품 등록"} />

      <TopHeader>재고 조회</TopHeader>
      <StockOption>
        <StockID>
          {stockId.map((v, index) => {
            return (
              <div key={index}>
                <h2>재고 아이디:{v}</h2>
              </div>
            );
          })}
        </StockID>
        <StockNumber>
          {sotckQuantity.map((v, index) => {
            return (
              <div key={index}>
                <h2>재고 수량:{v}</h2>
              </div>
            );
          })}
        </StockNumber>
      </StockOption>
    </Wrapper>
  );
};

export default SellStockLook;
