import styled from "@emotion/styled";

export const BarWrapper = styled.div`
  margin-bottom: 8rem;

  @media screen and (max-width: 769px) {
    margin-bottom: 2rem;
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
  padding: 10px 50px;
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
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;

export const MainBar = styled.div`
  padding: 20px 50px;

  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
  }

  & span {
    font-size: 28px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    margin-left: 40px;
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
    padding: 10px 25px;

    .hidden {
      display: none;
    }

    & span {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Name = styled.div`
  font-size: 30px;
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
