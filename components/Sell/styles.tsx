import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 4fr 0.8fr 5fr;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 5rem;
`;

export const LeftSide = styled.section``;

export const MiddleSide = styled.section`
  border-left: 2px solid #c1b6b6;
  margin-left: 50%;
  height: 70vh;
`;

export const Btn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
`;
export const BuyBtn = styled.button`
  width: 25rem;
  height: 4rem;
  background-color: cornflowerblue;
  color: white;
  border: transparent;
  border-radius: 20px;
  text-align: center;
  outline: none;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #d63535;
    border: none;
  }
`;

export const RightSide = styled.section``;
