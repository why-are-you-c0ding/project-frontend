import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { EditableInput, Input } from "@chakra-ui/react";
import {
  AllStocksModifyModalBtn,
  AllStocksModifyModalWrapper,
} from "@components/SellerPages/DetailRegisteredItemsBodys/AllStocksModifyModal/styles";
import { toast } from "react-toastify";
import { useAppSelector } from "@redux/hooks";
import { ModifyStocks } from "@typings/sellerPages";

interface Props {
  onClickComplete: (temp: ModifyStocks) => void;
  onClose: () => void;
}
export default function AllStocksModifyModal({
  onClickComplete,
  onClose,
}: Props) {
  const [value, setValue] = useState("");
  const { optionCombinations } = useAppSelector((state) => state.sellersSlice);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 9) return;
    setValue(e.target.value);
  };

  const onClickAllModifyComplete = useCallback(async () => {
    if (value === "") {
      toast.warning("수정하실 재고를 입력해주세요.", {
        position: "top-center",
      });
      return;
    }

    let temp: ModifyStocks = { stockInfos: [] };

    optionCombinations.forEach((options) => {
      temp.stockInfos.push({ optionIdList: options, quantity: +value });
    });

    onClickComplete(temp);
  }, [optionCombinations, value]);

  return (
    <AllStocksModifyModalWrapper>
      <div>
        <Input
          value={value}
          onChange={onChangeValue}
          type={"number"}
          maxLength={9}
        />
        <span>개</span>
      </div>
      <div>
        <div>
          <AllStocksModifyModalBtn onClick={onClickAllModifyComplete}>
            완료
          </AllStocksModifyModalBtn>
        </div>
        <div>
          <AllStocksModifyModalBtn onClick={onClose}>
            취소
          </AllStocksModifyModalBtn>
        </div>
      </div>
    </AllStocksModifyModalWrapper>
  );
}
