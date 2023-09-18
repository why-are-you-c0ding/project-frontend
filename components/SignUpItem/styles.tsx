import styled from "@emotion/styled";

export const Wrapper = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Image = styled.section`
  & > div {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 769px) {
      margin-top: 16rem;
    }

    & > span {
      display: flex;

      margin-top: 1rem;
      color: rgba(0, 0, 0, 0.4);
    }

    & > div:last-of-type {
      margin-top: 1rem;

      display: flex;

      padding: 0.5rem 0;

      & > label {
        padding: 0.4rem 1rem;
        background-color: cornflowerblue;
        color: white;
        border: 1px solid rgb(77, 77, 77);
        border-radius: 10px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #d63535;
          border: none;
        }
      }

      #file {
        display: none;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 18rem;
  height: 18rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const DragOver = styled.div`
  width: 100%;
  height: 100%;

  color: rgba(0, 0, 0, 0.4);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: 2px dashed rgba(0, 0, 0, 0.4);
`;

export const OptionInfo = styled.section`
  display: flex;
  flex-direction: column;

  & > h2 {
    margin-bottom: 0.5rem;
  }
`;

export const ItemInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;

    & select {
      margin-top: 0.5rem;
      width: 12rem;
      height: 3rem;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
      box-sizing: border-box;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;

      &:focus {
        border: 1px solid #b7acac;
        box-sizing: border-box;
        border-radius: 10px;
        outline: 3px solid #f8e4ff;
      }
    }
  }

  & input {
    width: 100%;
  }
`;

export const ItemTitle = styled.header`
  align-self: flex-start;
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  min-height: 8rem;
  margin-top: 0.5rem;

  border: 1px solid #ebebeb;
  border-radius: 10px;

  font-size: 1rem;

  :focus {
    outline: none;
    border: 2px solid black;
  }

  ::placeholder {
    font-size: 0.9rem;
  }
`;

export const EachWrapper = styled.div`
  border: 2px solid #cccccc;
  border-radius: 1rem;

  margin: 0 -2rem;
  padding: 1rem;

  box-shadow: 5px 5px 15px #ececec;

  min-width: 800px;
  margin-bottom: 2rem;
`;

export const SignBtn = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    padding: 0.4rem 1rem;
    background-color: cornflowerblue;
    color: white;
    border: 1px solid rgb(77, 77, 77);
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 10rem;
    height: 3rem;
    margin-bottom: 1rem;

    &:hover {
      background-color: #d63535;
      border: none;
    }
  }
`;
