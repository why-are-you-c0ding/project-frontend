import styled from "@emotion/styled";
import { Button } from "antd";

export const SellOptionContainer = styled.section`
  & > h2 {
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid;
  font-size: 1.1rem;

  ::placeholder {
    font-size: 1rem;
  }
  :focus {
    outline: none;
  }
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .gap {
    margin-bottom: 1rem;
  }
`;

export const Explain = styled.span`
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;

  & > span {
    color: blue;
    cursor: pointer;
  }
`;

export const Option = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
`;

export const OptionName = styled(Input)`
  width: 25%;
  margin-right: 2rem;
`;

export const OptionValue = styled(Input)`
  width: 55%;
  margin-right: 0.5rem;
`;

export const OptPlusBtn = styled(Button)`
  margin-left: 0.5rem;
  font-size: 1.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptDeleteBtn = styled(OptPlusBtn)`
  width: 1rem;
  font-size: 1.8rem;
  margin-left: 0;
`;

export const MakeTableBtn = styled.button`
  padding: 0.4rem 1rem;
  background-color: cornflowerblue;
  color: white;
  border: 1px solid rgb(77, 77, 77);
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: #d63535;
    border: none;
  }
`;
