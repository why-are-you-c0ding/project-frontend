import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;

  & > input {
    width: 40%;
    margin-right: 1rem;

    @media (max-width: 769px) {
      width: 50%;
    }
  }
`;
