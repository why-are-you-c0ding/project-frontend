import styled from "@emotion/styled";

export const Wrapper = styled.section`
<<<<<<< Updated upstream
  margin-top: -8rem;
=======
  padding-left: 2rem;
  padding-right: 2rem;
>>>>>>> Stashed changes
`;

export const Image = styled.section`
  position: relative;
  border: 1px solid;

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
  margin-bottom: 2rem;

  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #d63535;
    border: none;
  }
`;

export const RightSide = styled.section`
  border: 1px solid;

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
