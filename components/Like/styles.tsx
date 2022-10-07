import styled from "@emotion/styled";

export const Wrapper = styled.section`
  max-width: 100rem;

  @media (max-width: 769px) {
    margin-top: 5rem;
    padding: 2rem 2rem;
  }
`;

export const CartItem = styled.div`
  display: flex;

  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  & img {
    min-width: 100px;
    max-width: 8vw;

    margin-right: 1rem;
  }
`;

export const ItemInfo = styled.div`
  border: 1px solid;

  display: flex;
  flex-direction: column;

  & > div {
    width: 50vw;
    min-width: 320px;
    height: 50%;

    display: flex;
    align-items: center;

    padding-left: 1rem;
  }
`;

export const InfoTop = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  font-size: 1.2rem;
  font-weight: 500;
`;

export const InfoBottom = styled.div`
  & > div {
    //width: 50%;
  }

  & > div:first-of-type {
    color: #199530;
    margin-right: 1rem;
    width: 35%;

    @media (max-width: 769px) {
      display: none;
    }
  }

  & > div:last-of-type {
    display: flex;
    align-items: center;
    font-size: 1rem;

    width: 60vw;
    border: 1px solid;

    & > span {
      width: 33%;
      text-align: center;

      border: 1px solid;
    }

    & > span:nth-of-type(2) {
      width: 60%;

      & span {
        margin: 0 1rem;
      }

      & button {
        padding: 0.1rem 0.5rem;
        background-color: #ececec;
        border-radius: 5px;
      }
    }

    & > span:last-of-type {
      text-align: right;
      width: 60%;

      & button {
        margin-left: 2rem;

        padding: 0.1rem 0.5rem;
        background-color: #ececec;
        border-radius: 5px;
      }
    }
  }

  & button {
    padding: 0 0.2rem;
    font-size: 1rem;

    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 2px;
  }
`;
