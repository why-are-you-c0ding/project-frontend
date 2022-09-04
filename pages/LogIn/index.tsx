import React, {useCallback, useState} from "react";
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
} from '@pages/SignUp/styles'
import StatusBar from "@components/StatusBar";
import useInput from "@hooks/useInput";
import { Link } from 'react-router-dom';
import axios from "axios";
import useSWR from 'swr';
import fetcher from '@utils/fetcher';





const LogIn = () => {
  const { data, error, mutate } = useSWR('https://waycabvav.shop/', fetcher);
  //요기 주소도 수빈이(로그인 정보 받아올곳)
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput('');
  const [logInError, setLogInError] = useState(false);


  const onSubmit = useCallback(
      (e) => {
        e.preventDefault();
        setLogInError(false);
        axios
            .post('https://waycabvav.shop/',
                { id, password },
                { withCredentials: true })
            .then((response) => {
              alert("성공");
              mutate(response.data, false);
            })
            .catch((error) => {
              alert("에러");
              setLogInError(error.response?.data?.statuseCode === 401);
            });
      },
      [id, password],
  );
  // 로그인 주소 물어봐야됨


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
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
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
