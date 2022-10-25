import styled from "@emotion/styled";

export const Btn = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;

  width: 7%;
  text-align: center;
  cursor: pointer;

  font-size: 1.8rem;

  @media (max-width: 600px) {
    right: 50px;
  }
  @media screen and (min-width: 600px) and (max-width: 769px) {
    right: 70px;
  }
`;
