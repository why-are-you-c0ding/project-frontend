import styled from "@emotion/styled";

export const Wrapper = styled.section`
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
  width: 100%;

  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    height: 50%;

    display: flex;
    align-items: center;

    padding-left: 1rem;
  }
`;

export const InfoTop = styled.div`
  //border-bottom: 1px solid rgba(0, 0, 0, 0.4);
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
      font-size: 1.2rem;
      font-weight: 500;

      width: 70%;
    }

    & span:last-of-type {
      display: flex;
      justify-content: flex-end;
      margin-right: 2rem;

      color: rgba(0, 0, 0, 0.4);
    }
  }

  & > div:last-of-type {
    display: flex;
    justify-content: flex-start;

    width: 98%;
    height: 2rem;

    margin-left: -1rem;
    margin-top: -0.8rem;

    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const InfoBottom = styled.div`
  display: flex;
  align-items: center;

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
      width: 40%;

      @media (max-width: 769px) {
        width: 50%;
      }

      & span {
        margin: 0 0.5rem;
      }

      & button {
        padding: 0.2rem 0.5rem;
        font-size: 1.2rem;
        background-color: #ececec;
        border: 1px solid transparent;
        border-radius: 5px;
      }

      & button:first-of-type {
        padding: 0.2rem 0.6rem;
      }
    }

    & > div:last-of-type {
      text-align: right;
      width: 80%;

      & button {
        margin-left: 3rem;

        font-size: 1.3rem;
        border: none;
        background-color: inherit;

        @media (max-width: 769px) {
          position: absolute;
          top: 5;
          right: -25;
        }
      }
    }
  }
`;
