import React, { useEffect } from "react";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { AllData, bestData } from "@typings/db";

const Recommend = () => {
  const { data: bestData } = useSWR<bestData>(
    "http://localhost:8000/recommend",
    fetcher
  );

  const bestList = bestData ? bestData.itemName : ["electronic"];

  console.log(bestList);

  let getItemUrl = "https://waycabvav.shop/items/recommend?";

  for (let i = 0; i < bestList.length; i++) {
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

    getItemUrl += `r${i + 1}=${bestList[i].replaceAll(reg, "")}`;

    if (i !== bestList.length - 1) getItemUrl += "&";
  }

  const { data: recomData } = useSWR<AllData[]>(getItemUrl, fetcher);

  // console.log(recomData);

  let a = [];

  if (recomData)
    for (let i = 0; i < recomData?.length; i++) {
      a.push(recomData[i].itemName);
    }

  console.log(a);

  return <div>1</div>;
};

export default Recommend;
