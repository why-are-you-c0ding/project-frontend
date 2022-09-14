import styled from "@emotion/styled";

export const Wrapper = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  z-index: 999;

  position: fixed;
  top: 0;
  width: 100%;

  padding: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  & div {
    width: 33%;
  }
`;

export const Back = styled.div`
  font-size: 1.5rem;

  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  box-sizing: border-box;
  padding-left: 1rem;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;
