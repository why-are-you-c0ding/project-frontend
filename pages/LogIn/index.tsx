import React, {useCallback, useState} from "react";
import {Form, Header, Input, Label, Line, SearchBox, SignUpBtn, SubHeader, Wrapper} from '@pages/SignUp/styles'
import StatusBar from "@components/StatusBar";
import useInput from "@hooks/useInput";
import { Link } from 'react-router-dom';



const LogIn = () => {
  const [id, onChangeId] = useInput("");
  const [password, setPassword] = useState("");


  const onChangePassword = useCallback(
      (e) => {
        setPassword(e.target.value);
      },
      []
  );

  const onSubmit = useCallback(
      (e) => {
        e.preventDefault();
        console.log(id, password);
      },
      [id, password, ]
  );

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
      </Label>
      <SignUpBtn>Log In</SignUpBtn>
        <SearchBox>
          <span>
          <Link to="/signup">회원 가입</Link>
          </span>
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </SearchBox>

    </Form>
  </Wrapper>
  )
};

export default LogIn;
