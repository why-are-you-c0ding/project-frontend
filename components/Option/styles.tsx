import styled from "@emotion/styled";

export const OptCount = styled.div`
  display: flex;
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  & div {
    margin-left: 1rem;

    & select {
      width: 5vw;
      text-align: center;
    }
  }
`;

export const OptInput = styled.div`
  display: flex;
  margin-top: 1rem;

  .firstOpt {
    margin-right: 2rem;
  }

  & input {
    margin-top: 1rem;
  }

  .opt0 {
    color: red;
  }
`;

export const OptList = styled.div``;
