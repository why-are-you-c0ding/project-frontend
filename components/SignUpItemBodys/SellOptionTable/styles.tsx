import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 12rem;

  margin-top: 0.5rem;
  border: 1px solid;
  border-radius: 10px;
`;

export const Table = styled.div`
  display: flex;
  border-bottom: 1px solid;

  & > div {
    width: 33%;

    display: flex;
    justify-content: center;

    border-left: 1px solid;
  }

  & > div:first-of-type {
    border-left: none;
  }
`;

export const OptionName = styled.div`
  border-bottom: 1px solid;

  text-align: center;
`;

export const ZeroData = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
