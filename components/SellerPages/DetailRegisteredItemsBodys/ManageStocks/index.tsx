import { optionGroup } from "@typings/items";
import React, { useState } from "react";
import { sellersApi } from "@api/sellersApi";
import {
  OptionTable,
  StockQuantityWrapper,
  Table,
  TableWrapper,
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
          <Table length={optionGroup.length + 1}>
            {optionGroup.map((optionGroup, index) => {
              return <span key={index}>{optionGroup.optionGroupName}</span>;
            })}
            <span>개수</span>
          </Table>
          {optionCombinations.map((options, index) => {
            return (
              <OptionTable key={index} length={optionGroup.length}>
                {options.map((option, idx) => {
                  return <span key={idx}>{optionIdHash.get(+option)}</span>;
                })}
                <Editable
                  textAlign="center"
                  defaultValue={`${data.stockList[index].quantity}개`}
                  // fontSize="2xl"
                  isPreviewFocusable={false}
                >
                  <StockQuantityWrapper isEdit={isEdit}>
                    <div>{/*<Input as={EditableInput} />*/}</div>
                    <div>
                      <EditablePreview />
                      {/* Here is the custom input */}
                      <Input as={EditableInput} />
                    </div>
                    <div>{isEdit && <EditStocks />}</div>
                  </StockQuantityWrapper>
                </Editable>
              </OptionTable>
            );
          })}
        </TableWrapper>
      )}
    </div>
  );
}
