import React, { VFC } from "react";
import { Wrapper } from "./styles";
import Product from "@components/Product";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { SProduct } from "@typings/db";

const ProductPage: VFC = () => {
  const { data: productData, error } = useSWR<SProduct>(
    "https://waycabvav.shop/items",
    fetcher
  );
  return (
    <div>
      <Wrapper>
        <Product />
      </Wrapper>
    </div>
  );
};
export default ProductPage;
