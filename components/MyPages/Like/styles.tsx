import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  @media (max-width: 769px) {
    padding: 0 2rem;
  }
`;

export const CartItem = styled.div`
  display: flex;

  position: relative;

  padding: 2rem 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  }

  & img {
    min-width: 8rem;
    max-width: 8rem;
    min-height: 8rem;
    max-height: 8rem;

    margin-right: 0.5rem;

    @media (max-width: 769px) {
      min-width: 6rem;
      max-width: 6rem;
      min-height: 6rem;
      max-height: 6rem;
    }
  }
`;

export const ItemBox2 = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  & .time {
    display: none;
  }

  & > div {
    width: 100%;
    height: 50%;

    display: flex;
    align-items: center;

    padding-left: 1rem;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemBoxInfo = styled.div`
  display: grid;
  grid-template-columns:
    minmax(10px, 0.5fr) minmax(5px, 0.2fr) minmax(30px, 1.2fr) minmax(
      30px,
      0.5fr
    )
    minmax(30px, 0.5fr) minmax(30px, 0.5fr) minmax(10px, 0.3fr);
  align-items: center;
  justify-items: center;
  height: 3rem;
  border-top: 3px solid black;
  border-bottom: 1px solid black;
  font-size: 12px;
  @media (max-width: 769px) {
    height: 3rem;
  }
`;

export const ItemInfo = styled.div`
  display: grid;
  grid-template-columns:
    minmax(10px, 0.5fr) minmax(5px, 0.2fr) minmax(30px, 1.2fr) minmax(
      30px,
      0.5fr
    )
    minmax(30px, 0.5fr) minmax(30px, 0.5fr) minmax(10px, 0.3fr);
  height: 9rem;
  border-bottom: 2px solid #f5f5f5;
  align-items: center;
  justify-items: center;
  font-size: 14px;

  &:hover {
    background-color: #eeeeee;
  }
  @media (max-width: 769px) {
    height: 11rem;
    font-size: 12px;
  }
`;

export const ItemInfoImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;

  align-items: center;
  padding-left: 2rem;

  & img {
    min-width: 6rem;
    max-width: 6rem;
    min-height: 6rem;
    max-height: 6rem;

    @media (max-width: 769px) {
      min-width: 4rem;
      max-width: 4rem;
      min-height: 4rem;
      max-height: 4rem;
    }
  }
`;

export const ItemInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 10px;
  @media (max-width: 769px) {
    font-size: 10px;
  }
`;

export const ItemInfoTitleName = styled.div`
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 769px) {
    font-size: 12px;
  }
`;
export const ItemInfoTitleOption = styled.div`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.4);
  @media (max-width: 769px) {
    font-size: 10px;
  }
`;

export const ItemInfoCount = styled.div`
  height: 2rem;
  width: 6rem;
  background-color: #d1d1d1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 769px) {
    width: 4rem;
    height: 1.2rem;
  }

  & button {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    @media (max-width: 769px) {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  & div {
    width: 2rem;
    height: 1.8rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 769px) {
      width: 1.2rem;
      height: 1rem;
    }
  }
`;
export const ItemInfoPrice = styled.div``;
export const ItemInfoSys = styled.div`
  @media (max-width: 769px) {
    font-size: 10px;
  }
`;

export const ItemInfoDeleteBtn = styled.div`
  width: 5rem;
  height: 2rem;
  border: 1px solid #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 13px;
  @media (max-width: 769px) {
    width: 3.2rem;
    height: 2rem;
    font-size: 10px;
  }
`;

export const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -1rem;

  & > div:first-of-type {
    display: flex;

    width: 100%;

    & span {
      width: 50%;
    }

    & span:first-of-type {
      font-size: 1rem;
      font-weight: 500;

      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    & span:last-of-type {
      display: flex;
      justify-content: flex-end;
      margin-right: 2rem;

      color: rgba(0, 0, 0, 0.4);
    }
  }

  & > div:last-of-type {
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;

    width: 100%;
    height: 2rem;

    margin-top: 0.5rem;

    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`;
export const EachDeleteBtn = styled.button`
  width: 7rem;
  height: 2rem;
  border: 1px solid #d8d8d8;
  text-align: center;
  box-sizing: border-box;
  font-size: 15px;
  margin-top: 5px;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `};
`;

export const BuyAllBtn = styled.button`
  width: 10rem;
  height: 2.8rem;
  background-color: black;
  color: white;
  border: transparent;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
`;

export const InfoBottom = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1.5rem;

  & > div:first-of-type {
    color: #199530;
    margin-right: 1rem;
    width: 30%;

    @media (max-width: 975px) {
      display: none;
    }
  }

  & > div:last-of-type {
    display: flex;
    align-items: center;

    position: relative;

    width: 60%;

    @media (max-width: 769px) {
      width: 100%;
    }

    @media (max-width: 975px) {
      width: 90%;
    }

    & > div:first-of-type {
      width: 60%;

      @media (max-width: 975px) {
        width: 60%;
        font-size: 0.9rem;
      }

      & > span {
        margin: 0 0.5rem;
      }

      & button {
        padding: 0.2rem 0.5rem;
        font-size: 1.2rem;
        background-color: #ececec;
        border: 1px solid transparent;
        border-radius: 5px;

        @media (max-width: 975px) {
          padding: 0 0.2rem;
        }
      }

      & button:first-of-type {
        padding: 0.2rem 0.6rem;

        @media (max-width: 975px) {
          padding: 0 0.3rem;
        }
      }
    }

    & > div:last-of-type {
      text-align: right;
      width: 85%;

      margin-right: -2rem;

      @media (max-width: 769px) {
        font-size: 0.9rem;
        margin-right: -1rem;
      }

      & span:first-of-type {
        margin-right: 2rem;
      }

      & button {
        font-size: 1.3rem;
        border: none;
        background-color: inherit;

        cursor: pointer;

        @media (max-width: 975px) {
          position: absolute;
          top: 0;
        }
      }
    }
  }
`;
