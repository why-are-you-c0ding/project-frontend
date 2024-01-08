import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TopHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 500;

  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const SideBar = styled.section`
  width: 18%;
  min-width: 14rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2rem;

  @media (max-width: 769px) {
    display: none;
  }
`;
export const RightSide = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.2);

  width: 82%;
  min-height: calc(100vh - 7.2rem);

  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;
