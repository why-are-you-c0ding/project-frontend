import React, { FormEvent, useCallback, useState } from "react";
import {
  Form,
  Header,
  Input,
  Label,
  SearchBox,
  SignUpBtn,
  Wrapper,
} from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const LogIn = () => {
  const [id, onChangeId, setId] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [logInError, setLogInError] = useState(false);
  const navigate = useNavigate();

  const headers = {
    "X-Requested-With": "XMLHttpRequest",
  };

  const [isLogin, setIsLogin] = useState(localStorage.getItem("jwt") !== null);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLogInError(false);

      axios
        .post(
          "https://waycabvav.shop/login",
          {
            loginId: id,
            password: password,
          },
          { withCredentials: true, headers },
        )
        .then((response) => {
          localStorage.setItem("jwt", response.data.jwt);
          setIsLogin(true);
        })
        .catch((error) => {
          alert("에러");
          setLogInError(error.response?.data?.statuseCode === 401);
        });
    },
    [id, password],
  );

  if (isLogin) {
    navigate("/main", { replace: true });
  }

  return (
    <Wrapper isLogin={true}>
      <Header>WAYC</Header>
      <Form onSubmit={onSubmit}>
        <Label>
          <span>아이디</span>
          <div>
            <Input
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={onChangeId}
              placeholder="아이디를 입력해주세요."
            />
          </div>
        </Label>
        <Label>
          <span>비밀 번호</span>
          <div>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </Label>
        <SignUpBtn type="submit">Log In</SignUpBtn>{" "}
        <SearchBox>
          <span>
            <Link to="/signup">회원 가입</Link>
          </span>
        </SearchBox>
      </Form>
    </Wrapper>
  );
};

export default LogIn;
