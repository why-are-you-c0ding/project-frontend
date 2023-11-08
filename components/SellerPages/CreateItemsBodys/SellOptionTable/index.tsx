import React, { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/hooks";
import { changePrice } from "@redux/reducers/createItemsSlice";
import {
  OptionName,
  Options,
  Table,
  Wrapper,
  ZeroData,
} from "@components/SellerPages/CreateItemsBodys/SellOptionTable/styles";
import { OptionInfo, EachOption } from "@typings/sellerPages";

const SellOptionTable = () => {
  const dispatch = useDispatch();
  const { optionTableList, isTable } = useAppSelector(
    (state) => state.createItems,
  );

  const onChangePrice = useCallback(
    (num1: number, num2: number, e: ChangeEvent<HTMLInputElement>) => {
      const p = e.target.value.trim();

      if (parseInt(p) < 10 ** 7 || p === "") {
        dispatch(
          changePrice({
            num1: num1,
            num2: num2,
            price: p === "" ? 0 : parseInt(p),
          }),
        );
      }
    },
    [optionTableList],
  );

  return (
    <Wrapper>
      <Table isTable={isTable}>
        <div>옵션명</div>
        <div>금액</div>
      </Table>

      {optionTableList.length === 0 && (
        <ZeroData>데이터가 존재하지 않습니다.</ZeroData>
      )}
      {optionTableList.map((item: OptionInfo, index: number) => (
        <div key={index}>
          <OptionName>{item.optionGroupName.trim()}의 추가 가격</OptionName>
          <div>
            {item.options.map((option: EachOption, optIdx: number) => {
              return (
                <Options key={optIdx}>
                  <div>{option.optionName}</div>
                  <div>
                    <input
                      type="text"
                      value={option.price === 0 ? "" : option.price.toString()}
                      onChange={(event) => {
                        onChangePrice(index, optIdx, event);
                      }}
                    />
                  </div>
                </Options>
              );
            })}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default SellOptionTable;
