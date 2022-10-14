import styled from "@emotion/styled";

export const Wrapper = styled.section`
  margin: 0 auto;
  width: 80vw;
`;

export const Header = styled.header`
  border-bottom: 2px solid;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.header`
  margin-bottom: 0.5rem;
`;

export const Info = styled.div`
  margin-bottom: 1rem;

  & > div:first-of-type {
    span {
      border-top: 2px solid rgba(0, 0, 0, 0.2);
    }
  }

  & > div {
    display: grid;
    grid-template-columns: 0.22fr 0.78fr;

    span {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: 0.5rem 0;
    }

    & > span:first-of-type {
      text-align: right;
      padding-right: 0.5rem;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      background-color: #ececec;
    }

    & > span:last-of-type {
      padding-left: 0.5rem;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;

  & button {
    padding: 1.3rem 6rem;
    border: transparent;
    border-radius: 20px;

    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    background-color: cornflowerblue;

    &:hover {
      background-color: blueviolet;
      border: none;
    }
  }
`;
