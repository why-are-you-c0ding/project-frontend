import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 4fr 0.8fr 5fr;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 5rem;
`;

export const LeftSide = styled.section`
  padding: 1rem 1rem;
  margin-right: 1rem;
`;

export const MiddleSide = styled.section`
  border-left: 2px solid #c1b6b6;
  margin-left: 50%;
  height: 70vh;
`;

export const RightSide = styled.section`
  padding: 1rem 1rem;
  margin-left: 1rem;
`;

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

export const Itemdetail = styled.div`
  & input {
    margin-bottom: 1.5rem;
  }
`;

export const ItemName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-decoration: underline;
`;
export const Option = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;

  & select {
    margin: 1rem 1rem;
    width: 10rem;
    height: 3rem;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
  }

  & select:focus {
    border: 1px solid #b7acac;
    box-sizing: border-box;
    border-radius: 10px;
    outline: 3px solid #f8e4ff;
  }
`;

export const OptionName = styled.div`
  margin-right: 3rem;
`;

export const OptionList = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  width: 25rem;
  height: 3rem;
  outline: none;
  font-size: 1rem;
  padding: 10px 0 14px;
  margin-top: 0.6rem;
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
