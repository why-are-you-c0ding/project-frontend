import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;

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
  font-size: 1.4rem;
  font-weight: 500;

  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Hr = styled.hr`
  border: 2px solid;
  margin-bottom: 2rem;
`;

export const SideBar = styled.section`
  font-weight: bolder;
  padding-top: 2rem;

  margin: 0 auto;
`;

export const RightSide = styled.section`
  padding-bottom: 1rem;

  @media screen and (max-width: 769px) {
    padding: 0;
  }
`;
