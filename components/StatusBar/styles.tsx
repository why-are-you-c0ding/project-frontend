import styled from "@emotion/styled";

export const BarWrapper = styled.div`
  margin-bottom: 7rem;

  @media screen and (max-width: 769px) {
    margin-bottom: 1rem;
  }
`;

export const Bar = styled.div`
  background-color: white;
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const SubBar = styled.div`
  padding: 0.5rem 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  & span a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    margin-left: 1rem;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

export const MainBar = styled.div`
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
  }

  & span {
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    margin-left: 2rem;
    cursor: pointer;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (min-width: 769px) {
    .faBars {
      display: none;
    }
  }
  @media screen and (max-width: 769px) {
    padding: 1rem 1rem;

    .hidden {
      display: none;
    }

    & span {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Name = styled.div`
  font-size: 2rem;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
