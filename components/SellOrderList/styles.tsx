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

  padding: 1rem 0rem 1rem 1rem;
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

    margin-right: 1rem;
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    height: 40%;

    display: flex;
    align-items: center;
  }
`;

export const InfoTop = styled.div`
  display: flex;

  & > div:first-of-type {
    display: flex;

    width: 100%;

    & span {
      width: 50%;
    }

    & span:first-of-type {
      font-size: 1rem;
      font-weight: 500;

      width: 50%;
    }

    & span:last-of-type {
      display: flex;
      justify-content: flex-end;

      color: rgba(0, 0, 0, 0.4);
    }
  }

  & > div:last-of-type {
    font-size: 0.8rem;
    display: flex;

    width: 100%;
    height: 2rem;

    margin-top: 0.5rem;

    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const InfoBottom = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #199530;

    width: 100%;

    @media (max-width: 769px) {
      width: 100%;
    }

    @media (max-width: 975px) {
      width: 60%;
    }

    & > div:first-of-type {
      width: 60%;

      @media (max-width: 975px) {
        width: 60%;
      }
    }

    & > div:last-of-type {
      width: 85%;

      @media (max-width: 769px) {
        font-size: 0.7rem;
      }

      & span:first-of-type {
      }
    }
  }
`;
