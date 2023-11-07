import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;

  margin-top: 0.5rem;
  border: 2px solid #ececec;
`;

export const Table = styled.div<{ isTable?: boolean }>`
  display: flex;
  border-bottom: ${(props) => (!props.isTable ? "1px solid #ececec" : "")};
  background-color: #f4f5f7;
  font-weight: 500;

  & > div {
    width: 50%;

    display: flex;
    justify-content: center;

    border-left: 2px solid #ececec;
  }

  & > div:first-of-type {
    border-left: none;
  }
`;

export const Options = styled(Table)`
  border-top: 1px solid #ececec;
  border-bottom: none;

  & > div:last-of-type {
    & > input {
      width: 100%;

      border: none;
      outline: none;
      text-align: center;
    }
  }
`;

export const OptionName = styled.div`
  text-align: center;
  border-top: 1px solid #ececec;
`;

export const ZeroData = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 8rem;
  color: #696969;
`;
