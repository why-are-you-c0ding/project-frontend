import React, { VFC } from "react";
import { Wrapper } from "./styles";
import Product from "@components/Product";
import useSWR from "swr";
import fetcher from "@utils/fetcher";
import { EachProduct } from "@typings/db";

const ProductPage: VFC = () => {
  return (
    <div>
      <Wrapper>
        <Product />
      </Wrapper>
    </div>
  );
};
export default ProductPage;
