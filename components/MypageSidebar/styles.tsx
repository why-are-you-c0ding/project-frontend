import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-left: 2.3rem;
  font-weight: 400;
`;

export const Title = styled.header`
  font-size: 1.8rem;
  margin-bottom: 1.8rem;
`;

export const Info = styled.div`
  & header {
    font-size: 1.5rem;
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  & span {
    margin-top: 0.5rem;
    color: rgba(0, 0, 0, 0.4);
  }
`;
