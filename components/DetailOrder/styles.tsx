import styled from "@emotion/styled";

export const Menu = styled.div`
  margin-top: 2rem;

  & > span {
    font-size: 1.3rem;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    border-top: 2px solid;
    border-bottom: 1px solid;

    margin-top: 1rem;
    padding: 0.6rem 0;

    & span {
      text-align: center;
    }
  }

  @media (max-width: 769px) {
    display: none;
  }
`;
