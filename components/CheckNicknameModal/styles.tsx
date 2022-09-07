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

  margin: 50vh auto;

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