import React from "react";
import {Form, Header, Input, Label, Line, SearchBox, SignUpBtn, SubHeader, Wrapper} from '@pages/SignUp/styles'
import StatusBar from "@components/StatusBar";


const LogIn = () => {
  return (
  <Wrapper>
    <StatusBar />
    <Header>WAYC</Header>
    <SubHeader>Why Are You Coding?</SubHeader>
    <Form>
      <Label>
        <span>아이디</span>
        <div>
          <Input type="text" value={''}  placeholder="예) Wayc"  />
        </div>
      </Label>
      <Label>
        <span>비밀 번호*</span>
        <div>
          <Input type="password"  value={''} placeholder="예) 영문, 숫자, 특수문자 조합 8-16자"  />
        </div>
      </Label>
      <SignUpBtn>Log In</SignUpBtn>
        <SearchBox>
          <span>회원 가입</span>
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </SearchBox>

    </Form>
  </Wrapper>
  )
};

export default LogIn;
