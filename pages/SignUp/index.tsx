import React, { useCallback, useEffect, useState } from "react";
import useInput from "@hooks/useInput";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Form,
  Error,
  Correct,
  ErrorCircle,
  CorrectCircle,
  Header,
  Input,
  Label,
  SignUpBtn,
  Wrapper,
  LinkContainer,
} from "./styles";
import StatusBar from "@components/StatusBar";

const SignUp = () => {
  const [id, onChangeId] = useInput("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, onChangeNickname] = useInput("");
  const [age, onChangeBirthDay, setBirthDay] = useInput("");
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const [mismatchError, setMismatchError] = useState(false);
  const [match, setmatch] = useState(false);

  const [idmissmatch,setidmissmatch] = useState(false);
  const [emailmissmatch,setemailmissmatch] = useState(false);
  const [nicknamemissmatch,setnickcnamemissmatch] = useState(false);

  // const [signUpError, setSignUpError] = useState(false);
  // const [signUpSuccess, setSignUpSuccess] = useState(false);

  // 여기 변수로 나이 계산
  useEffect(() => {
    const thisYear = new Date().getFullYear().toString().slice(0, 4);
    console.log(parseInt(thisYear) - parseInt(age.slice(0, 4)) + 1);
  }, [age, onChangeBirthDay, setBirthDay]);

  const onChangePassword = useCallback(
      (e) => {
        setPassword(e.target.value);
        setMismatchError(e.target.value !== passwordCheck);
        setmatch(e.target.value === passwordCheck)
      },
      [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
      (e) => {
        setPasswordCheck(e.target.value);
        setMismatchError(e.target.value !== password);
        setmatch(e.target.value === password)
      },
      [password]
  );

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);


  const onClickid = useCallback((e)=>{
    setidmissmatch(e.target.value ! ==id);
  },[]);
  //백엔드에 있는 아이디와 현재 아이디 비교 후 오류 출력

  const onClickemail = useCallback((e)=>{
    setemailmissmatch(e.target.value ! ==email);
  },[]);
  //백엔드에 있는 아이디와 현재 이메일 비교 후 오류 출력

  const onClicknickname = useCallback((e)=>{
    setnickcnamemissmatch(e.target.value ! ==nickname);
  },[]);
  //백엔드에 있는 아이디와 현재 닉네임 비교 후 오류 출력

  const onSubmit = useCallback(
      (e) => {
        e.preventDefault();
        axios.post('https://waycabvav.shop/members',{
          id,password,age,email, nickname,
        })
            .then((response)=>{
              alert("성공");
              console.log(response);
              setSignUpSuccess(true);
            })
            .catch((error)=>{
              alert("에러!!!!!!");
              console.log(error.response);
              setSignUpError(error.response.data);

            })
            .finally(()=>{});
      },
      [id, password, passwordCheck, age, email, nickname]
  );

  return (
      <div>
        <StatusBar />
        <Wrapper>
          <Header>회원가입</Header>
          <Form onSubmit={onSubmit}>
            <Label>
              <div>
                <span>아이디*</span>
                <button onClick={onClickid}>중복 체크</button>
                {idmissmatch && (
                    <Correct>
                      {" "}
                      사용 가능합니다
                    </Correct>
                )}
              </div>
              <Input
                  type="text"
                  id="id"
                  name="id"
                  value={id}
                  onChange={onChangeId}
                  placeholder="예) Wayc"
              />
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
            <Label>
              <span>비밀 번호 체크* </span>
              {mismatchError && (
                  <Error>
                    {" "}
                    비밀번호가 일치하지 않습니다!
                    <ErrorCircle></ErrorCircle>
                  </Error>
              )}
              {match && (
                  <Correct>
                    {" "}
                    비밀번호가 일치합니다!
                    <CorrectCircle></CorrectCircle>
                  </Correct>
              )}

              <div>
                <Input
                    type="password"
                    id="password-check"
                    name="password-check"
                    value={passwordCheck}
                    onChange={onChangePasswordCheck}
                    placeholder="예) 영문, 숫자, 특수문자 조합 8-16자"
                />
              </div>
            </Label>
            <Label>
              <span>생년 월일*</span>
              <Input
                  type="date"
                  value={age}
                  onChange={onChangeBirthDay}
              ></Input>
            </Label>
            <Label>
              <div>
                <span>이메일 주소*</span>
                <button onClick={onClickemail}>중복 체크</button>
                {emailmissmatch && (
                    <Correct>
                      {" "}
                      사용 가능합니다
                    </Correct>
                )}
              </div>
              <div>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="예) wayc@google.com"
                />
              </div>
            </Label>

            <Label>
              <div>
                <span>닉네임*</span>
                <button onClick={onClicknickname}>중복 체크</button>
                {nicknamemissmatch && (
                    <Correct>
                      {" "}
                      사용 가능합니다
                    </Correct>
                )}
              </div>
              <div>
                <Input
                    type="text"
                    id="nickname"
                    name="nickname"
                    value={nickname}
                    onChange={onChangeNickname}
                    placeholder="예) 권오현 진짜 못생김"
                />
              </div>
            </Label>
            {signUpError && <Error>{signUpError}</Error>}
            {signUpSuccess && <Correct>회원가입되었습니다! 로그인해주세요.</Correct>}
            <SignUpBtn type="submit">가입하기</SignUpBtn>
          </Form>
          <LinkContainer>
            이미 회원이신가요? &nbsp;
            <Link to="/login">로그인 하러가기</Link>
          </LinkContainer>
        </Wrapper>
      </div>
  );
};

export default SignUp;