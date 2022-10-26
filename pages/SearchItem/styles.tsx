import styled from "@emotion/styled";

export const TitleContainer = styled.section`
  margin-bottom: 2rem;
`;

export const SearchBox = styled.section`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;

  & input {
    width: 22rem;
    height: 3rem;
    font-size: 1.2rem;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  }
  input::placeholder {
    color: #dbb3b3;
    font-size: 1.2rem;
    text-align: center;
  }
`;
