import styled from "@emotion/styled";

export const EachApprovalWrapper = styled.div`
  border-bottom: 1px solid #ececec;
  display: flex;
  align-items: center;
  gap: 2%;

  padding: 1rem 2rem;
  margin-bottom: 2rem;
`;

export const EachApprovalImg = styled.div`
  & > img {
    width: 10rem;
  }
`;

export const EachApprovalInfo = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;

    & > span {
      font-size: 0.8rem;
      color: #696969;
    }

    & > span:first-of-type {
      font-weight: 600;
      font-size: 1.2rem;
      color: black;

      margin-bottom: 0.4rem;
    }
  }
`;
