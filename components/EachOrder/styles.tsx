import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 4fr 0.8fr 5fr;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;

  & h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSide = styled.section``;

export const MiddleSide = styled.div`
  border-left: 2px solid #c1b6b6;
  margin-left: 50%;
  height: 70vh;

  @media (max-width: 940px) {
    display: none;
  }
`;

export const RightSide = styled.section`
  padding: 1rem 0;

  width: 100%;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 0;
  }
`;

export const Item = styled.div`
  margin-top: 2rem;
  margin-right: 1rem;

  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: 769px) {
    margin-right: 0;
  }

  & img {
    width: 24rem;
    height: 24rem;

    @media (max-width: 769px) {
      width: 16rem;
      height: 16rem;

      margin-top: -2rem;
    }
  }
`;

export const ItemName = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  & h2 {
    margin-bottom: 0.5rem;
  }
`;

export const ShopName = styled.div`
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.9rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const OptInfo = styled.span`
  color: rgba(0, 0, 0, 0.4);
`;

export const ItemInfo = styled.div`
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.4);
`;

export const Button = styled.button`
  width: 6rem;
  height: 2rem;
  margin-left: 0.8rem;
  margin-bottom: 0.3rem;

  background-color: cornflowerblue;
  color: white;

  border: transparent;
  border-radius: 10px;
  text-align: center;
  outline: none;

  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #d63535;
    border: none;
  }
`;

export const DeliState = styled.div`
  display: flex;
  align-items: center;
`;
