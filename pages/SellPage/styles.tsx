import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SideBar = styled.div<{ sideBar: boolean }>`
  width: 18%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2rem;

  @media (max-width: 769px) {
    margin-bottom: 0;

    ${({ sideBar }) =>
      !sideBar &&
      `
    display: none;
  `};
  }
`;

export const SellPageMainWrapper = styled.section`
  border-left: 1px solid rgba(0, 0, 0, 0.2);

  width: 82%;
  min-height: calc(100vh - 7.2rem);

  @media screen and (max-width: 769px) {
    //padding: 0;
  }
`;
