import styled from "@emotion/styled";

export const Wrapper = styled.section`
  margin-top: -8rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Image = styled.section`
  position: relative;

  height: 50vh;

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

export const DragOver = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  height: calc(100% - 6rem);
  background: white;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  border: 1px solid #f2d5d5;
`;
