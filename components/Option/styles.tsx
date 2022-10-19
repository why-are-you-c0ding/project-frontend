import styled from "@emotion/styled";

export const Wrapper = styled.section``;

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

  ::placeholder {
    font-size: 1rem;
  }
`;

export const MakeTableBtn = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;

  & button {
    width: 50%;
    padding: 0.5rem 0.8rem;

    background-color: cornflowerblue;
    color: white;

    border: transparent;
    border-radius: 20px;
    text-align: center;
    outline: none;
    margin-top: 1rem;
    margin-bottom: 2rem;

    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #d63535;
      border: none;
    }
`;

export const OptTable = styled.div`
  margin-top: 1rem;

  & > div {
    display: flex;
    margin-top: 0.5rem;

    & > span {
      width: 25%;

      //width:70px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }

    & > input {
      width: 70%;
    }
  }

  .line {
    width: 95.3%;
    height: 1%;

    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;
