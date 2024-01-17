import styled from "@emotion/styled";

export const EditStocksWrapper = styled.div`
  & > div {
    display: flex;
    align-items: center;
  }

  button {
    background-color: black;
    color: white;

    & > span {
      font-size: 0.8rem;
    }

    &:hover {
      background-color: black;
      color: white;
    }

    @media (max-width: 800px) {
      & > span {
        font-size: 0.7rem;
      }

      width: 0.8rem;
      height: 1.6rem;
    }
  }
`;
