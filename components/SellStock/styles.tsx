import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const InputLine = styled.div`
  padding-top: 2rem;
  & h1 {
    padding-bottom: 2rem;
  }
  & input {
    width: 25rem;
    height: 3rem;
    font-size: 0.9rem;
    border: 0;
    border-radius: 0.9rem;
    outline: none;
    padding-left: 1rem;
    background-color: rgb(233, 233, 233);
    margin-bottom: 2rem;
    margin-left: 2rem;
  }
`;
export const CheckStock = styled.div`
  & div {
    padding: 1rem 1rem;
  }
`;
export const RegisterStock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RegisterLeft = styled.div`
  padding: 1rem 1rem;
`;
export const RegisterRight = styled.div``;

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
