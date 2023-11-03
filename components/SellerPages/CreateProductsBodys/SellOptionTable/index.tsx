import React, { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/hooks";
import { changePrice } from "@redux/reducers/signUpItemSlice";
import {
  OptionName,
  Options,
  Table,
  Wrapper,
  ZeroData,
} from "@components/SellerPages/CreateProductsBodys/SellOptionTable/styles";
// import shortId from "shortid";

const SellOptionTable = () => {
  const dispatch = useDispatch();
  const { optionTableList, isTable } = useAppSelector(
    (state: any) => state.sellOption,
  );

  const onChangePrice = useCallback(
    (num1: number, num2: number, e: ChangeEvent<HTMLInputElement>) => {
      const p = e.target.value.trim();
      if (parseInt(p) < 10 ** 9 || p === "") {
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
      {optionTableList.map((item: any, idx1: number) => (
        <div key={idx1}>
          <OptionName>
            {item.optionGroupName.trim()}
            {idx1 === 0 ? "의 기본 가격" : "의 추가 가격"}
          </OptionName>
          <div>
            {item.options.map((option: any, idx2: number) => {
              return (
                <Options key={idx2}>
                  <div>{option.optionName}</div>
                  <div>
                    <input
                      value={option.price === 0 ? "" : option.price.toString()}
                      onChange={(event) => {
                        onChangePrice(idx1, idx2, event);
                      }}
                      type="text"
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
