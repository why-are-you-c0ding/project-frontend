import styled from "@emotion/styled";

export const NoneHeader = styled.div`
  position: relative;
  box-sizing: border-box;
  height: calc(100vh - 7.2rem);

  @media screen and (max-width: 769px) {
    height: calc(100vh - 5.2rem);
  }
`;

export const ScrollTop = styled.div`
  position: fixed;

  bottom: 1rem;
  right: 1rem;

  border: 1px solid #696969;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.4rem;
  cursor: pointer;
  color: #696969;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;
