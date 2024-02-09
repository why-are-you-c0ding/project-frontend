import styled from "@emotion/styled";

export const TableSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const TableDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
  background-color: gray;
  border: 1px gray solid;
  & :first-child {
    background-color: #eef1f8;
  }

  & :last-child {
    background-color: #ffffff;
  }
`;

export const DetailEditBtn = styled.button``;
