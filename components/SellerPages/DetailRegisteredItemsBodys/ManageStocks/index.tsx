import { optionGroup } from "@typings/items";
import React, { useState } from "react";
import { sellersApi } from "@api/sellersApi";
import {
  StockQuantityWrapper,
  Table,
  TableWrapper,
  TopHeader,
} from "@components/SellerPages/DetailRegisteredItemsBodys/ManageStocks/styles";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
} from "@chakra-ui/react";
import { EditStocks } from "@components/SellerPages/DetailRegisteredItemsBodys/EditStocks";

interface Props {
  optionGroup: optionGroup[];
  isEdit: boolean;
}

function getOptionParams(obj: { [key: string]: string }) {
  let optionParams: string[] = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let values = obj[key].split(",").join(",");

      optionParams.push(`${key}=${values}`);
    }
  }

  return optionParams.join("&");
}

function getOptionCombinations(options: string[][]): string[][] {
  const queue: string[][] = [[]];

  for (const option of options) {
    const nextQueue: string[][] = [];

    for (const combination of queue) {
      for (const element of option) {
        nextQueue.push([...combination, element]);
      }
    }

    queue.length = 0;
    queue.push(...nextQueue);
  }

  return queue;
}

export default function ManageStocks({ optionGroup, isEdit }: Props) {
  let options: { [key: string]: string } = {};
  let optionIdHash = new Map();

  optionGroup.forEach((optionGroup, index) => {
    let optionList: number[] = [];
    optionGroup.options.forEach((option) => {
      optionList.push(option.optionId);
      optionIdHash.set(option.optionId, option.optionName);
    });

    options[`optionGroup${index + 1}`] = optionList.join(",");
  });

  const { data, error, isLoading } = sellersApi.useGetItemStocksQuery(
    getOptionParams(options),
  );
  const optionCombinations = getOptionCombinations(
    Object.values(options).map((v) => v.split(",")),
  );

  return (
    <div>
      {error && <div>새로고침하여 주세요.</div>}

      {isLoading && <div>로딩중...</div>}

      {data && (
        <TableWrapper>
          <TopHeader length={optionGroup.length}>
            <div>
              <span>옵션</span>
              <div>
                {optionGroup.map((option) => {
                  return (
                    <span key={option.optionGroupId}>
                      {option.optionGroupName}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>개수</div>
          </TopHeader>
          {optionCombinations.map((options, index) => {
            return (
              <Table key={index} length={optionGroup.length}>
                <div>
                  {options.map((option, idx) => {
                    return <span key={idx}>{optionIdHash.get(+option)}</span>;
                  })}
                </div>
                <Editable
                  textAlign="center"
                  defaultValue={`${data.stockList[index].quantity}개`}
                  isPreviewFocusable={false}
                >
                  <StockQuantityWrapper isEdit={isEdit}>
                    <div>
                      <EditablePreview />
                      {/* Here is the custom input */}
                      <Input value={"123"} as={EditableInput} />
                    </div>
                    <div>{isEdit && <EditStocks />}</div>
                  </StockQuantityWrapper>
                </Editable>
              </Table>
            );
          })}
        </TableWrapper>
      )}
    </div>
  );
}
