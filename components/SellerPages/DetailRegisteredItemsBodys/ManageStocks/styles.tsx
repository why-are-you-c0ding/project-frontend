import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  border: 2px solid #ececec;
  border-bottom: none;

  margin-top: 0.4rem;
  margin-bottom: 2rem;
`;

export const Table = styled.div<{ length: number }>`
  width: 100%;
  background-color: #f4f5f7;

  display: grid;
  grid-template-columns: repeat(${(props) => props.length - 1}, 0.9fr) 1fr;

  border-bottom: 1px solid #ececec;

  & > span {
    text-align: center;

    font-size: 1.2rem;
    font-weight: 500;

    border-right: 1px solid #ececec;
    padding: 0.2rem 0;
  }

  & > span:last-of-type {
    border-right: none;
  }
`;

export const OptionTable = styled(Table)`
  margin-top: 0;
  background-color: inherit;

  & > span {
    font-size: 0.9rem;
    font-weight: 400;
  }

  & > span:last-of-type {
    border-right: 1px solid #ececec;
  }
`;

export const StockQuantityWrapper = styled.span<{ isEdit: boolean }>`
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.25fr;

  @media (max-width: 1200px) {
    grid-template-columns: 0fr 1fr 0.25fr;
  }

  border: 1px solid red;

  & > div {
    border: 1px solid;

    input {
      color: red;

      border: 1px solid blue;
    }
  }
`;
