import React from "react";
import ReactSearchBox from "react-search-box";
import useSWR from "swr";
import fetcher from "@utils/fetcher";

import { makeSearch } from "@utils/makeSearch";

// import { makeSearch } from "@utils/makeSearch";
const Search = () => {
  const { data: Allitem, error } = useSWR<
    | Array<{
        itemName: string;
      }>
    | false
  >("https://waycabvav.shop/items", fetcher);

  //전체 아이템 조회
  console.log(Allitem);

  let item: any = [];

  //아이템 객체에서 객체에서 꺼내서 배열로 모음
  if (Allitem) item = Object.values(Allitem);

  for (let i = 0; i < item.length; i++) {
    item[i] = Object.values(item[i]);
  }
  console.log(item);

  //만든 배열 길이
  let itemlen = item.length;

  //2차원 배열에서 아이템 이름만 뽑아오기
  let itemList: any = [];

  for (let j = 0; j < itemlen; j++) {
    itemList.push(item[j][1]);
  }
  console.log(itemList);

  const result = makeSearch(itemList, itemlen);
  console.log(result);

  return (
    <div>
      <ReactSearchBox
        placeholder="검색 창"
        data={result}
        onSelect={(record: any) => console.log(record)}
        onFocus={() => {
          console.log("This function is called when is focussed");
        }}
        onChange={(value) => console.log(value)}
        autoFocus
        iconBoxSize="48px"
      />
    </div>
  );
};

export default Search;
