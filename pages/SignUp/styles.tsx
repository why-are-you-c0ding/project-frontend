import styled from "@emotion/styled";

export const Wrapper = styled.div<{ isLogin?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: ${(props) => props.isLogin && "100%"};
  margin: ${(props) => !props.isLogin && "2rem 0"};
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
  width: 14rem;
  height: 3.5rem;
  background-color: black;
  color: white;
  border: transparent;
  border-radius: 10px;
  text-align: center;
  outline: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 auto;
  cursor: pointer;
`;

export const ResultPasswordCircle = styled.div<{ status: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 0.5rem;
  background-color: ${(props) => (props.status ? "green" : "red")};
`;

export const StatusPassword = styled.div<{ status: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.status ? "green" : "red")};
  font-weight: bold;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export const Correct = styled.div`
  color: green;
  margin: 10px 0 10px;
  font-weight: bold;
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
  margin-top: -1rem;
  margin-bottom: 1rem;
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
  font-size: 0.9rem;
  margin-top: -1rem;
  margin-bottom: 1rem;

  & span {
    margin-right: 0.3rem;
  }
`;
