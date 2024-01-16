import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  border: 2px solid #ececec;
  border-bottom: none;

  margin-top: 0.4rem;
  margin-bottom: 2rem;
`;

export const TopHeader = styled.div<{ length: number }>`
  display: flex;
  border-bottom: 2px solid #ececec;
  background-color: #f4f5f7;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 35%;

    font-size: 1.2rem;
    font-weight: 500;

    @media (max-width: 800px) {
      font-size: 1rem;
    }
  }

  & > div:first-of-type {
    width: 65%;
    border-right: 1px solid #ececec;
    flex-direction: column;

    & > span {
      padding: 0.2rem 0;
    }

    & > div {
      display: grid;
      grid-template-columns: repeat(${(props) => props.length}, 1fr);

      width: 100%;

      color: gray;

      border-top: 1px solid #ececec;

      & > span {
        text-align: center;
        font-size: 1rem;

        border-right: 1px solid #ececec;
        padding: 0.2rem 0;

        @media (max-width: 800px) {
          font-size: 0.86rem;
        }
      }

      & > span:last-of-type {
        border-right: none;
      }
    }
  }
`;

export const Table = styled.div<{ length: number }>`
  width: 100%;

  display: flex;

  border-bottom: 1px solid #ececec;

  // 옵션 부분
  & > div:first-of-type {
    width: 65%;

    display: grid;
    grid-template-columns: repeat(${(props) => props.length}, 1fr);

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;

      border-right: 1px solid #ececec;
    }
  }

  // 개수 부분
  & > div:last-of-type {
    width: 35%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    font-size: 0.86rem;
  }
`;

export const StockQuantityWrapper = styled.span<{ isEdit: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;

  & > div {
    padding: 0.2rem 0;
  }

  & > div:first-of-type {
    width: ${(props) => (props.isEdit ? "60%" : "100%")};
    text-align: ${(props) => (props.isEdit ? "right" : "center")};

    @media (max-width: 800px) {
      width: ${(props) => props.isEdit && "50%"};
    }
  }

  & > div:last-of-type {
    width: ${(props) => (props.isEdit ? "40%" : "0%")};

    @media (max-width: 800px) {
      width: ${(props) => props.isEdit && "50%"};
    }
  }

  input {
    @media (max-width: 800px) {
      font-size: 0.86rem;
    }
  }
`;
