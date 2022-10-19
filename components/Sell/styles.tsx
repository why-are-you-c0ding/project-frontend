import styled from "@emotion/styled";

export const Wrapper = styled.section`
  margin-top: -8rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Image = styled.section`
  & > div {
    margin-top: 2rem;

    & > span {
      display: flex;
      justify-content: center;

      margin-top: 1rem;
      color: rgba(0, 0, 0, 0.4);
    }

    & > div:last-of-type {
      margin-top: 1rem;

      display: flex;
      justify-content: center;

      padding: 0.5rem 0;

      & > label {
        padding: 0.4rem 1rem;
        background-color: cornflowerblue;
        color: white;
        border: 1px solid rgb(77, 77, 77);
        border-radius: 10px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #d63535;
          border: none;
        }
      }

      #file {
        display: none;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 18rem;
  height: 18rem;

  margin: 0 auto;
  //margin-top: 2rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const DragOver = styled.div`
  width: 100%;
  height: 100%;

  color: rgba(0, 0, 0, 0.4);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: 2px dashed rgba(0, 0, 0, 0.4);
`;

export const Explain = styled.div`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 0.5rem;
  margin-bottom: 1rem;
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
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #d63535;
    border: none;
  }
`;

export const OptionInfo = styled.section`
  display: flex;
  justify-content: center;
`;

export const ItemInfo = styled.div`
  margin: 0 auto;
  margin-top: 3rem;

  & > h2 {
    margin-bottom: 0.5rem;
  }

  & label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  & input {
    width: 100%;
  }
`;

export const ItemTitle = styled.header`
  align-self: flex-start;
`;
