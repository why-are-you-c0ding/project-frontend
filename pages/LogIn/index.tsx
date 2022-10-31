import React, { FormEvent, useCallback, useState } from "react";
import {
  Form,
  Header,
  Input,
  Label,
  SearchBox,
  SignUpBtn,
  SubHeader,
  Wrapper,
  Error,
} from "@pages/SignUp/styles";
import StatusBar from "@components/StatusBar";
import useInput from "@hooks/useInput";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router";

const LogIn = () => {
  const [id, onChangeId, setId] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [logInError, setLogInError] = useState(false);

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
          { withCredentials: true, headers }
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
    [id, password]
  );

  if (isLogin) {
    return <Redirect to={"/main"} />;
  }

  return (
    <Wrapper>
      <StatusBar />
      <Header>WAYC</Header>
      <SubHeader>Why Are You Coding?</SubHeader>
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
              placeholder="예) Wayc"
            />
          </div>
        </Label>
        <Label>
          <span>비밀 번호*</span>
          <div>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="예) 영문, 숫자, 특수문자 조합 8-16자"
            />
          </div>
          {logInError && (
            <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>
          )}
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
