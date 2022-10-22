import styled from "@emotion/styled";

export const Wrapper = styled.section`
  @media (max-width: 769px) {
    margin-top: 5rem;
    padding: 2rem 2rem;
  }
`;

export const CartItem = styled.div`
  display: flex;

  position: relative;

  padding: 1rem;
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

export const ItemInfo = styled.div`
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

export const InfoBottom = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;

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
          right: -20;
        }
      }
    }
  }
`;
