import styled from "@emotion/styled";

export const Wrapper = styled.section`
  max-width: 100rem;

  margin-top: 4rem;
`;

export const ListBox = styled.div`
  margin-top: 1rem;
  border-bottom: 1px solid;

  & table {
    display: grid;
    grid-template-columns: 0.5fr 2.5fr 1fr 1.5fr;
    padding: 0.5rem 0;
  }

  & img {
    width: 8rem;
    height: 8rem;
  }
`;

export const ItemTitle = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  & div:first-child {
    font-size: 1.3rem;
    text-decoration: underline;
    font-weight: bolder;
  }

  & div:nth-child(2) {
    font-size: 1rem;
    margin-top: 0.2rem;
  }

  & div:last-child {
    font-size: 1.3rem;
    font-weight: bolder;
    position: relative;
    top: 2.8rem;
  }
`;

export const MiddleSide = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & div:last-child {
    
    
    &
  }
`;

export const RightSide = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Delete = styled.span`
  font-size: 1.3rem;
  text-decoration: underline;
`;

export const BuyBtn = styled.div`
  display: flex;
  width: 11rem;
  height: 5rem;
  background-color: red;
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
  }

  & div:first-child {
    display: flex;
    align-items: center;
    padding-right: 0.2rem;
    border-right: 1px solid white;
    margin-right: 0.5rem;
  }

  & div:last-child {
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
  }
`;

export const ItemSum = styled.div`
  padding: 1rem 1rem;
  font-size: 1.2rem;
  font-weight: bolder;
`;

export const ItemBox = styled.div``;
