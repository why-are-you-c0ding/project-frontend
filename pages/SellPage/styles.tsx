import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;

  min-height: 100vh;

  margin-top: -2rem;

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
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 1rem;
  max-width: 100rem;

  margin-top: 2rem;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const Hr = styled.hr`
  border: 2px solid;
  margin-bottom: 2rem;
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
