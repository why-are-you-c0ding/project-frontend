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
