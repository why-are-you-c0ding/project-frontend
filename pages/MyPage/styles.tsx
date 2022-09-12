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

export const SideBar = styled.section`
  font-weight: bolder;
  padding-top: 2rem;

  @media screen and (max-width: 769px) {
    order: 1;
  }
`;

export const RightSide = styled.section`
  padding: 0 6rem;
  padding-bottom: 1rem;


  @media screen and (max-width: 769px) {
    padding: 0;
  }
`;
