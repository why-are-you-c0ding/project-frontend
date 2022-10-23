import React, { VFC } from "react";
import { Wrapper } from "./styles";
import Product from "@components/Product";

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
