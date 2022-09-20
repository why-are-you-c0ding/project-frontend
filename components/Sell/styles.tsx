import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 2.5fr;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 2rem;
`;

export const LeftSide = styled.section`
  position: relative;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;

    & button {
      border: none;
      border-radius: 10px;
      padding: 1rem 2rem;

      background-color: cornflowerblue;
      color: white;
      cursor: pointer;
    }
  }
`;

export const Preview = styled.div`
  width: 80%;
  height: 70%;
  margin: 0 auto;
  margin-top: 2rem;

  & img {
    width: 100%;
    height: 100%;
  }
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
  background-color: cornflowerblue;
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

export const RightSide = styled.section`
  //border: 1px solid;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  & label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    width: 70%;
  }

  & input {
    width: 100%;
  }
`;

export const ItemTitle = styled.header`
  align-self: flex-start;
`;
