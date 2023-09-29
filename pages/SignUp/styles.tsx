import styled from "@emotion/styled";
import { verificationNickname } from "@mock/api/data/member/signUp";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 6rem;
`;

export const Header = styled.header`
  font-weight: bolder;
  font-size: 2.2rem;
  letter-spacing: -0.75px;
  margin-bottom: 2rem;
`;

export const IsCheckWrapper = styled.div`
  & > span {
    margin-right: 0.8rem;
  }
`;

export const Button = styled.button<{ isCheckId?: boolean }>`
  width: 4rem;
  height: 1.3rem;
  border-radius: 5px;
  // background-color: ${(props) => (props.isCheckId ? "#11DD33" : "#e8e1e1")};
  background-color: #e8e1e1;
  // color: ${(props) => (props.isCheckId ? "white" : "inherit")};
  color: inherit;
  border: transparent;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const SubHeader = styled.div`
  font-weight: bolder;
  font-size: 20px;
  letter-spacing: -0.75px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100vw;
  max-width: 400px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 2rem;

  & span {
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;

    width: 7rem;
  }
`;

export const Input = styled.input`
  position: relative;
  box-sizing: border-box;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #ebebeb;
  width: 25rem;
  height: 2rem;
  outline: none;
  font-size: 1rem;
  padding: 10px 0 14px;
  margin-top: 0.6rem;
  :focus {
    border-bottom: 2px solid black;
  }
  ::placeholder {
    font-size: 0.9rem;
  }
`;

export const SuccessVerification = styled.span`
  position: absolute;
  top: 2.4rem;
  right: -5.5rem;
`;

export const SignUpBtn = styled.button`
  width: 25rem;
  height: 4rem;
  background-color: cornflowerblue;
  color: white;
  border: transparent;
  border-radius: 20px;
  text-align: center;
  outline: none;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background-color: blueviolet;
    border: none;
  }
`;

export const ErrorCircle = styled.div`
  background-color: red;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`;

export const Error = styled.div`
  color: red;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Correct = styled.div`
  color: green;
  margin: 10px 0 10px;
  font-weight: bold;
`;

export const CorrectCircle = styled.div`
  background-color: green;
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
`;

export const SearchBox = styled.div`
  text-align: center;
  & span {
    padding: 20px;
    font-size: 1.2rem;
    font-weight: bolder;

    & a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const LinkContainer = styled.p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CheckSeller = styled.div`
  color: dodgerblue;
  font-size: 1rem;

  & span {
    margin-right: 0.3rem;
  }
`;
