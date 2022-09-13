import styled from "@emotion/styled";

export const Wrapper = styled.div`
  //margin-left: 2.3rem;

  font-weight: 400;

  @media (max-width: 769px) {
    margin-bottom: 4rem;
  }
`;

export const Title = styled.header`
  font-size: 1.4rem;
  margin-bottom: 1.8rem;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const Info = styled.div`
  & header {
    font-size: 1.3rem;

    @media (max-width: 769px) {
      display: none;
    }
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  @media (max-width: 769px) {
    margin-bottom: 0;
    padding-right: 2.3rem;
  }

  & span {
    margin-top: 0.5rem;
    color: rgba(0, 0, 0, 0.4);

    @media (max-width: 769px) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      padding-bottom: 1rem;
    }
  }

  .hidden {
    @media (min-width: 769px) {
      display: none;
    }
  }
`;
