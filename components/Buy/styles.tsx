import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 4fr 0.8fr 5fr;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSide = styled.section`
  padding: 1rem 1rem;
  margin-right: 1rem;
`;

export const MiddleSide = styled.div`
  border-left: 2px solid #c1b6b6;
  margin-left: 50%;
  height: 70vh;

  @media (max-width: 940px) {
    display: none;
  }
`;

export const RightSide = styled.section`
  padding: 1rem 1rem;
  margin-left: 1rem;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  //text-decoration: underline;

  @media (max-width: 940px) {
    margin-left: 3rem;
  }
`;

export const Option = styled.div`
  margin-top: 1rem;

  @media (max-width: 940px) {
    margin-left: 3rem;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3%;
  }

  & select {
    margin: 0.5rem 0;
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

export const TotalPrice = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;

  margin-bottom: -2rem;

  @media (max-width: 940px) {
    margin-left: 3rem;
  }
`;

export const Btn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  padding: 3rem 0;
  margin-right: 7rem;

  @media (max-width: 940px) {
    margin-left: 3rem;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  //border: 1px solid;
`;

export const BuyBtn = styled.button`
  width: 27rem;
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
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #d63535;
    border: none;
  }
`;

export const CountBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  padding: 1rem 0;

  //border: 1px solid rgba(0, 0, 0, 0.4);

  & > span {
    font-size: 1.2rem;
    margin: 0 1rem;
    //margin-right: 0.5rem;
  }

  & button {
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    width: 30%;
    padding: 0.5rem 1rem;
    background-color: inherit;
    border-radius: 5px;

    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const SelectBtn = styled.button`
  width: 18rem;
  height: 4rem;
  background-color: white;
  color: black;
  border-radius: 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
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
