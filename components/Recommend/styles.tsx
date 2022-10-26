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

export const More = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  margin-top: -1rem;
  margin-bottom: 4rem;

  a {
    text-decoration: none;
  }
`;

export const MoreBtn = styled.div`
  padding: 1rem 1.3rem;
  border-radius: 20px;
  border: 1px solid #d6c9c9;
  width: 6.5rem;
  height: 1.7rem;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #6b5151;

  &:hover {
    background-color: black;
    color: white;
  }
`;
