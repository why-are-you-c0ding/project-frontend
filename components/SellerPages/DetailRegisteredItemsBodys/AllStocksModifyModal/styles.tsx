import styled from "@emotion/styled";
import { SignBtn } from "@components/SellerPages/CreateItems/styles";

export const AllStocksModifyModalWrapper = styled.div`
  & > div:first-of-type {
    width: 100%;
    height: 70%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    input {
      width: 80%;
      text-align: right;
    }
  }

  & > div:last-of-type {
    width: 100%;
    height: 30%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3%;
  }
`;

export const AllStocksModifyModalBtn = styled(SignBtn)`
  width: 4rem;
  height: 2rem;

  font-size: 0.8rem;
`;
