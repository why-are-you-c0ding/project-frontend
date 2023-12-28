import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 2rem;
  margin-top: 2rem;
`;

export const Header = styled.header`
  border-bottom: 2px solid;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.header`
  margin-bottom: 0.5rem;
`;

export const SearchBtn = styled.button`
  padding: 0.2rem 0.5rem;
  border: transparent;
  border-radius: 10px;

  font-size: 0.8rem;
  color: white;
  background-color: black;
`;

export const DetailInput = styled.input`
  width: 100%;
  font-size: 1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Info = styled.div`
  margin-bottom: 2rem;

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

export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
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
    background-color: black;
  }
`;
