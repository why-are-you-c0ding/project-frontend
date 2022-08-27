import styled from "@emotion/styled";

export const CloseBtn = styled.button`
  border: none;
  background-color: inherit;

  font-size: 35px;

  position: absolute;
  right: 10px;
  top: 10px;
`;

export const List = styled.div`
  position: fixed;
  right: 0;

  width: 60vw;
  height: 100%;

  background-color: white;

  & div {
    display: flex;
    flex-direction: column;

    margin-top: 80px;
    font-size: 25px;

    & span {
      padding: 20px 0;
      padding-left: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Blank = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40vw;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
`;
