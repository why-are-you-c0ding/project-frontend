import styled from "@emotion/styled";

export const SlideWrapper = styled.div`
  margin-top: 8rem;

  position: relative;
`;

export const Slide = styled.div`
  overflow: hidden;

  height: 50vh;
`;

export const SlideList = styled.div`
  width: 400vw;
  transition: transform 0.5s;
  position: relative;
`;

export const Inner = styled.div`
  width: 100vw;
  float: left;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const MoreBtn = styled.div`
  padding: 1rem 1.3rem;
  border-radius: 20px;
  border: 1px solid #d6c9c9;
  width: 3.8rem;
  height: 1.7rem;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #6b5151;
`;
