import styled from "@emotion/styled";
import { SignUpBtn } from "@pages/SignUp/styles";

export const Wrapper = styled.section`
  width: 85vw;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 2%;
  padding-bottom: 5rem;

  @media (max-width: 1000px) {
    width: 100vw;
    margin-top: 3rem;

    flex-direction: column;
  }
`;

export const ItemImgWrapper = styled.section`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100%;
    max-width: 29rem;
    min-width: 20rem;
  }

  @media (max-width: 1000px) {
    margin-bottom: 1rem;
  }
`;

export const ItemInfoWrapper = styled.section`
  width: 55%;

  padding: 0 0.5rem;

  & > div {
    padding: 0 1rem;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const ItemName = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  & > div {
    margin-bottom: 0.5rem;
  }

  & > div > span:last-of-type {
    margin-left: 0.1rem;

    color: gray;
    font-size: 1rem;
  }
`;

export const Option = styled.div`
  margin: 1rem 0;

  @media (max-width: 940px) {
    //margin-left: 3rem;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3%;
  }

  & select {
    margin: 0.5rem 0;
    width: 12rem;
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

export const ItemInfo = styled.div`
  margin: 1rem 0;
  color: rgba(0, 0, 0, 0.4);
`;

export const ButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2%;

  @media (max-width: 1000px) {
    margin-bottom: 3rem;
  }
`;

export const BuyBtn = styled(SignUpBtn)`
  width: 14rem;
  height: 4rem;

  margin-right: 0;

  font-size: 1.5rem;
`;

export const CountBtn = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 1.2rem;
    margin: 0 1rem;
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
  width: 14rem;
  height: 4rem;
  background-color: white;
  color: #696969;
  border-radius: 20px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;

  border: 1px solid;

  & > span {
    margin-left: 0.6rem;
  }

  &:hover {
    color: black;
  }
`;

export const ItemDescription = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const ItemPrice = styled.div`
  margin-top: 1rem;
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

export const ItemCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 2rem;

  & > span {
    margin-right: 0.5rem;
  }
`;
