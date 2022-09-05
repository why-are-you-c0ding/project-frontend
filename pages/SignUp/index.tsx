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
import { useToastContainer } from "react-toastify";

const SignUp = () => {
  const [id, onChangeId, setId] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");
  const [email, onChangeEmail, setEmail] = useInput("");
  const [nickname, onChangeNickname, setNickname] = useInput("");
  const [birthDay, onChangeBirthDay, setBirthDay] = useInput("");
  const [age, setAge] = useState(0);

  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [mismatchCondition, setMismatchCondition] = useState(false);

  const [mismatchId, setmisMatchId] = useState(false);
  const [mismatchEmail, setmisMatchEmail] = useState(false);
  const [mismatchNickname, setmisMatchNickname] = useState(false);

  // 여기 변수로 나이 계산
  useEffect(() => {
    const thisYear = new Date().getFullYear().toString().slice(0, 4);
    setAge(parseInt(thisYear) - parseInt(birthDay.slice(0, 4)) + 1);
  }, [birthDay, onChangeBirthDay, setBirthDay]);

  // password 조건 검색
  useEffect(() => {
    const regexp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;
    if (password.match(regexp)) setMismatchCondition(true);
    else setMismatchCondition(false);

    console.log(mismatchCondition);
  }, [password, setPassword]);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value === passwordCheck);
    },
    [passwordCheck, setPassword]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value === password);
    },
    [password, setPasswordCheck]
  );

  // const onClickid = useCallback((e) => {
  //   setmisMatchId(e.target.value! == id);
  // }, []);
  // //백엔드에 있는 아이디와 현재 아이디 비교 후 오류 출력
  //
  // const onClickemail = useCallback((e) => {
  //   setmisMatchEmail(e.target.value! == email);
  // }, []);
  // //백엔드에 있는 아이디와 현재 이메일 비교 후 오류 출력
  //
  // const onClicknickname = useCallback((e) => {
  //   setmisMatchNickname(e.target.value! == nickname);
  // }, []);
  // //백엔드에 있는 아이디와 현재 닉네임 비교 후 오류 출력

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      axios
        .post(
          "https://waycabvav.shop/members",
          {
            nickName: nickname,
            email: email,
            loginId: id,
            password: password,
            checkPassword: passwordCheck,
            age: age,
          },
          { withCredentials: true }
        )
        .then((response) => {
          alert("회원가입에 성공하셨습니다. 로그인을 해주세요");
          console.log(response);
          setSignUpSuccess(true);
          setId("");
          setPassword("");
          setPasswordCheck("");
          setEmail("");
          setNickname("");
          setBirthDay("");
          setAge(0);
        })
        .catch((error) => {
          alert("에러!!!!!!");
          console.log(error.response);
        });
    },
    [id, password, passwordCheck, birthDay, age, email, nickname]
  );

  //이메일 발송 axios
  const onSubmitEmail = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post(
          "https://waycabvav.shop/verification/email",
          {
            receiveEmail: email,
          },
          { withCredentials: true }
        )
        .then((response) => {
          alert("이메일을 보냈습니다.");
          console.log(response);
        })
        .catch((error) => {
          alert("이메일 발송에 실패했습니다.");
          console.log(error.response);
        });
    },
    [email]
  );

  //닉네임 중복검사 axios
  const onSubmitNickname = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post(
          "https://waycabvav.shop/verification/nick-name",
          {
            nickName: nickname,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          alert("검증에 실패했습니다.");
          console.log(error.response);
        });
    },
    [nickname]
  );

  //아이디 중복검사 axios
  const onSubmitId = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post(
          "https://waycabvav.shop/verification/login-id",
          {
            loginId: id,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          alert("검증에 실패했습니다.");
        });
    },
    [id]
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
              <button onClick={() => {}}>중복 체크</button>
              {mismatchId && <Correct> 사용 가능한 아이디입니다.</Correct>}
            </div>
            <Input
              type="email"
              id="id"
              name="id"
              value={id}
              onChange={onChangeId}
              placeholder="예) Wayc"
            />
          </Label>
          <Label>
            <span>비밀 번호*</span>
            {!mismatchCondition && password.length > 0 && (
              <Error>
                {" "}
                비밀번호 조건에 일치하지 않습니다!
                <ErrorCircle></ErrorCircle>
              </Error>
            )}
            {mismatchCondition && (
              <Correct>
                {" "}
                비밀번호 조건에 일치합니다!
                <CorrectCircle></CorrectCircle>
              </Correct>
            )}
            <div>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                placeholder="예) 영문, 숫자, 특수문자 조합 8-15자"
                minLength={8}
                maxLength={15}
              />
            </div>
          </Label>
          <Label>
            <span>비밀 번호 체크* </span>
            {!mismatchError && passwordCheck.length > 0 && (
              <Error>
                {" "}
                비밀번호가 일치하지 않습니다!
                <ErrorCircle></ErrorCircle>
              </Error>
            )}
            {mismatchError && passwordCheck.length > 7 && (
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
                placeholder="예) 영문, 숫자, 특수문자 조합 8-15자"
                minLength={8}
                maxLength={15}
              />
            </div>
          </Label>
          <Label>
            <span>생년 월일*</span>
            <Input
              type="date"
              value={birthDay}
              onChange={onChangeBirthDay}
            ></Input>
          </Label>
          <Label>
            <div>
              <span>이메일 주소*</span>
              <button onClick={() => {}}>중복 체크</button>
              {mismatchEmail && <Correct> 이메일 인증에 성공했습니다.</Correct>}
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
              <button onClick={() => {}}>중복 체크</button>
              {mismatchNickname && (
                <Correct> 사용 가능한 아이디입니다.</Correct>
              )}
            </div>
            <div>
              <Input
                type="text"
                id="nickname"
                name="nickname"
                value={nickname}
                onChange={onChangeNickname}
                placeholder="예) 나비, 2자 이상"
                minLength={2}
              />
            </div>
          </Label>
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && (
            <Correct>회원가입되었습니다! 로그인해주세요.</Correct>
          )}
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
