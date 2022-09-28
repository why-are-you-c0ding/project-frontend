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

export const OptNameInput = styled.div`
  & > div {
    display: flex;
    margin-top: 0.4rem;

    & > span:first-of-type,
    & > input:first-of-type {
      margin-right: 1rem;
      width: 30%;
    }

    & > span:last-of-type,
    & > input:last-of-type {
      width: 60%;
    }
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid;
  font-size: 1.1rem;
`;

export const OptTable = styled.div`
  margin-top: 1rem;

  & > div {
    display: flex;

    & > span {
      width: 15%;
    }

    & > input {
      width: 70%;
    }
  }
`;
