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

export const RightSide = styled.section``;

export const Item = styled.div`
  padding-bottom: 1.3rem;
  padding-right: 1.3rem;
  display: flex;
  justify-content: center;
  align-content: center;

  & img {
    width: 20rem;
    height: 20rem;
  }
`;

export const Itemdetail = styled.div``;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-decoration: underline;
`;

export const ItemFullName = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ItemKorean = styled.div`
  font-weight: bold;
  margin-bottom: 0.3rem;
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
    border: none;
  }
`;

export const SelectBtn = styled.button`
  width: 25rem;
  height: 4rem;
  background-color: white;
  color: black;
  border-radius: 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const DetailOrder = styled.div`
  & > span {
    font-weight: bold;
    font-size: 1.2rem;
  }

  & > table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid;
    border-bottom: 1px solid;

    margin-top: 1rem;
    padding: 0.6rem 0;

    & span {
      text-align: center;
    }
  }
`;

export const Delivery = styled.div`
  margin-top: 3rem;
`;

export const DeliveryTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const DeliveryInfo = styled.div``;

export const DeliveryPrice = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const DeliverySub = styled.div`
  font-size: 0.8rem;
  color: gray;
`;
