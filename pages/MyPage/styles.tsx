import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;

  min-height: 100vh;

  & a {
    text-decoration: none;
    color: inherit;
  }

  .selected {
    color: black;
  }

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TopHeader = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  border-bottom: 3px solid black;
  padding-bottom: 1.2rem;
  max-width: 100rem;
`;

export const SideBar = styled.section`
  font-weight: bolder;
  padding-top: 2rem;

  margin: 0 auto;

  @media screen and (max-width: 769px) {
    order: 1;
    margin: 0;
    padding-left: 2rem;
  }
`;

export const RightSide = styled.section`
  padding: 0 6rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 769px) {
    padding: 0;
  }
`;
