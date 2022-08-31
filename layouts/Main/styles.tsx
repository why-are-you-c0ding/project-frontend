import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  margin-top: 8rem;

  overflow: hidden;

  height: 50vh;
`;

export const Slide = styled.div`
  width: 400vw;

  transition: transform 0.5s;
`;

export const Inner = styled.div`
  width: 100vw;
  float: left;

  & img {
    width: 100%;
    height: 100%;
  }
`;
