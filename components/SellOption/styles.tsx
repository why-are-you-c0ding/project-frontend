import styled from "@emotion/styled";

export const SellOptionContainer = styled.section`
  & > h2 {
    margin-bottom: 0.5rem;
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

export const ItemInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemInfo = styled.div`
  border: 1px solid;

  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputOptions = styled.div``;
