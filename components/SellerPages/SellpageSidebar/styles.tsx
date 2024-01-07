import styled from "@emotion/styled";

export const Wrapper = styled.div<{ sideBar: boolean }>`
  font-weight: 400;

  border: 1px solid;
  width: 100%;
  height: 100%;

  @media (max-width: 769px) {
    margin-bottom: 0;

    ${({ sideBar }) =>
      !sideBar &&
      `
    display: none;
  `};
  }
`;

export const Title = styled.header`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 769px) {
    margin-bottom: 0;
    padding-right: 2.3rem;
  }

  & span {
    margin-top: 0.5rem;
    color: rgba(0, 0, 0, 0.4);

    @media (max-width: 769px) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      padding-bottom: 1rem;
    }

    .active {
      color: black;
    }
  }
`;
