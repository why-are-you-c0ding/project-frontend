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
    width: 50%;
  }

  & > div:first-of-type {
    color: #199530;
  }

  & > div:last-of-type {
    display: flex;
    align-items: center;

    font-size: 1rem;

    & span {
      margin-right: 1rem;
    }
  }

  & button {
    padding: 0 0.2rem;
    font-size: 1rem;

    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 2px;
  }
`;
