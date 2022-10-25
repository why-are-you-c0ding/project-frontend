import React, { useCallback, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { AllData, bestData } from "@typings/db";
import {
  ItemBox,
  ItemContainer,
  ItemImg,
  ItemInfo,
  ItemName,
  ItemPrice,
  TitleContainer,
  Wrapper,
} from "@components/MainItem/styles";
import { Link } from "react-router-dom";
import { Btn } from "@components/Recommend/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Menu from "@components/Menu";
import CutItem from "@components/CutItem";

const Recommend = () => {
  const { data: bestData } = useSWR<bestData>(
    "http://localhost:8000/recommend",
    fetcher
  );

  const bestList = bestData ? bestData.itemName : ["electronic"];

  let getItemUrl = "https://waycabvav.shop/items/recommend?";

  for (let i = 0; i < bestList.length; i++) {
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

    getItemUrl += `r${i + 1}=${bestList[i].replaceAll(reg, "")}`;

    if (i !== bestList.length - 1) getItemUrl += "&";
  }

  const { data: recomData } = useSWR<AllData[]>(getItemUrl, fetcher);

  const [isCut, setIsCut] = useState(false);

  const onClickCut = useCallback(() => {
    setIsCut((prev) => !prev);
  }, []);

  const [isNum, setIsNum] = useState(-1);

  return (
    <div>
      <Wrapper>
        <TitleContainer>
          <h2>추천 상품</h2>
        </TitleContainer>
        <ItemContainer>
          {recomData &&
            recomData?.map((v, index) => {
              const itemId = recomData[index].itemId;

              return (
                <div key={index} style={{ position: "relative" }}>
                  <Link to={`/shop/${itemId}`}>
                    <ItemBox>
                      <ItemImg>
                        <img
                          src={recomData[index].imageUrl}
                          alt={recomData[index].itemName}
                        />
                      </ItemImg>
                      <ItemInfo>
                        <ItemName>{recomData[index].itemName}</ItemName>
                        <ItemPrice>{recomData[index].basicPrice}원</ItemPrice>
                      </ItemInfo>
                    </ItemBox>
                  </Link>
                  <Btn
                    onClick={() => {
                      onClickCut();
                      setIsNum(itemId);
                    }}
                  >
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </Btn>
                  {itemId === isNum && (
                    <Menu show={isCut} onCloseModal={onClickCut}>
                      {<CutItem />}
                    </Menu>
                  )}
                </div>
              );
            })}
        </ItemContainer>
      </Wrapper>
    </div>
  );
};

export default Recommend;
