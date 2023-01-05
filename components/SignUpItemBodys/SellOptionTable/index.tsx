import React, { ChangeEvent, useCallback } from "react";
import { useAppSelector } from "../../../redux/hooks";
import {
  OptionName,
  Table,
  Wrapper,
  ZeroData,
} from "@components/SignUpItemBodys/SellOptionTable/styles";
import { useDispatch } from "react-redux";
import { changePrice } from "../../../redux/reducers/sellOptionSlice";

const SellOptionTable = () => {
  const dispatch = useDispatch();

  const { optionTableList } = useAppSelector((state) => state.sellOption);

  const onChangePrice = useCallback(
    (num1: any, num2: number, e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changePrice({ num1: num1, num2: num2, price: e.target.value }));
    },
    [optionTableList]
  );

  return (
    <Wrapper>
      <Table>
        <div>옵션명</div>
        <div>금액</div>
        <div>재고</div>
      </Table>

      {optionTableList.length === 0 && (
        <ZeroData>데이터가 존재하지 않습니다.</ZeroData>
      )}
      {optionTableList.map((item, idx1) => (
        <div key={idx1}>
          <OptionName>{item.optionGroupName}의 추가 가격</OptionName>
          <div>
            {item.options.map((option, idx2) => {
              return (
                <Table key={idx2}>
                  <div>{option.optionName}</div>
                  <div>
                    <input
                      onChange={(event) => {
                        onChangePrice(idx1, idx2, event);
                      }}
                      type="text"
                    />
                  </div>
                  <div></div>
                </Table>
              );
            })}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default SellOptionTable;
