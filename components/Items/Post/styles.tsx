import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 480px;
  padding: 7px;
  z-index: 100;

  border: 1px solid;
  border-radius: 10px;

  & > div {
    font-size: 1.4rem;
    display: flex;
    justify-content: center;

    margin-top: 0.5rem;
  }

  & > button {
    position: absolute;
    top: 15;
    right: 30;

    border: none;
    background-color: inherit;
    font-size: 1.4rem;
  }

  background-color: white;
`;
