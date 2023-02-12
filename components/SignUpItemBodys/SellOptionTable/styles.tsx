import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;

  margin-top: 0.5rem;
  border: 1px solid;
  border-radius: 10px;
`;

export const Table = styled.div<{ isTable?: boolean }>`
  display: flex;

  border-bottom: ${(props) => (!props.isTable ? "1px solid" : "")};

  & > div {
    width: 50%;

    display: flex;
    justify-content: center;

    border-left: 1px solid;
  }

  & > div:first-of-type {
    border-left: none;
  }
`;

export const Options = styled(Table)`
  border-top: 1px solid;
  border-bottom: none;
`;

export const OptionName = styled.div`
  text-align: center;
  border-top: 1px solid;
`;

export const ZeroData = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 8rem;
`;
