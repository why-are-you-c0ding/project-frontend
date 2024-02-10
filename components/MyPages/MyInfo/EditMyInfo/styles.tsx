import styled from "@emotion/styled";

export const TableSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const TableDetail = styled.div`
  display: grid;
  grid-template-columns: 8rem auto;
  width: 100%;
  height: 4rem;
  border: 1px gray solid;

  & :first-child {
    background-color: #eef1f8;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
  }

  & :last-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    & :first-child {
      background-color: #ffffff;
      padding: 0 1rem;
      width: fit-content;
    }
  }
`;

export const DetailEditBtn = styled.button`
  border: 1px #bcbfc6 solid;
  color: #777;
  background-color: #fafbf6;
  border-radius: 5px;
  min-width: 5rem;
  padding: 5px 1px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
