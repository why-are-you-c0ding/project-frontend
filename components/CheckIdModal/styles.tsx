import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  background-color: white;

  width: 35vw;
  min-width: 400px;
  height: 30vh;
  min-height: 180px;

  margin: 26vh auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  & > form > button {
    border: none;
    background-color: inherit;

    position: absolute;
    top: 1rem;
    right: 1rem;

    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Header = styled.header`
  font-size: 1.2rem;
`;

export const Button = styled.button`
  width: 4rem;
  height: 1.5rem;
  border-radius: 5px;
  background-color: #e8e1e1;
  color: inherit;
  border: transparent;
  text-align: center;
  margin: 10px 1rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  width: 20rem;
  height: 2rem;
  outline: none;
  font-size: 1rem;
`;
