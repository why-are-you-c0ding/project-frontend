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
  Button,
  Div,
} from "./styles";
import StatusBar from "@components/StatusBar";
import Menu from "@components/Menu";
import CheckIdModal from "@components/CheckIdModal";
import CheckNicknameModal from "@components/CheckNicknameModal";

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
  /** password mismatch */
  const [mismatchError, setMismatchError] = useState(false);
  const [mismatchCondition, setMismatchCondition] = useState(false);

  const [checkId, setCheckId] = useState(false);
  const [checkNickname, setCheckNickname] = useState(false);

  const [checkIdModal, setCheckIdModal] = useState(false);
  const [checkNicknameModal, setCheckNicknameModal] = useState(false);

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

  const onCloseCheckIdModal = useCallback(() => {
    setCheckIdModal((prev) => !prev);
  }, []);

  const onCloseCheckNicknameModal = useCallback(() => {
    setCheckNicknameModal((prev) => !prev);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (
        !checkId ||
        !mismatchError ||
        !mismatchCondition ||
        (!birthDay && !birthDay.trim()) ||
        !checkNickname
      ) {
        alert("전부 조건에 맞게 입력해주세요!");
        return;
      }

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
    [
      id,
      setId,
      password,
      setPassword,
      passwordCheck,
      setPasswordCheck,
      birthDay,
      setBirthDay,
      age,
      setAge,
      email,
      setEmail,
      nickname,
      setNickname,
      checkId,
      setCheckId,
      checkNickname,
      setCheckNickname,
      mismatchError,
      setMismatchError,
      mismatchCondition,
      setMismatchCondition,
    ]
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

  return (
    <div>
      <StatusBar />
      <Wrapper>
        <Header>회원가입</Header>
        <Form onSubmit={onSubmit}>
          <Div>
            <Label>
              <span>아이디*</span>
              <Input
                type="text"
                id="id"
                name="id"
                value={id}
                onChange={onChangeId}
                placeholder="예) Wayc123, 6자 이상"
              />
            </Label>
            <Button type="button" onClick={onCloseCheckIdModal}>
              중복 체크
            </Button>
          </Div>
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
          <Div>
            <Label>
              <span>이메일 주소*</span>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChangeEmail}
                placeholder="예) wayc@google.com"
              />
            </Label>
            <Button type="button">인증 번호</Button>
          </Div>

          <Div>
            <Label>
              <span>닉네임*</span>
              <Input
                type="text"
                id="nickname"
                name="nickname"
                value={nickname}
                onChange={onChangeNickname}
                placeholder="예) 나비, 2자 이상"
                minLength={2}
              />
            </Label>
            <Button type="button" onClick={onCloseCheckNicknameModal}>
              중복 체크
            </Button>
          </Div>

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
        {
          <Menu show={checkIdModal} onCloseModal={onCloseCheckIdModal}>
            {
              <CheckIdModal
                id={id}
                onChangeId={onChangeId}
                onCloseCheckIdModal={onCloseCheckIdModal}
                setId={setId}
                setCheckId={setCheckId}
              />
            }
          </Menu>
        }
        {
          <Menu
            show={checkNicknameModal}
            onCloseModal={onCloseCheckNicknameModal}
          >
            {
              <CheckNicknameModal
                nickname={nickname}
                onChangeNickname={onChangeNickname}
                onCloseCheckIdModal={onCloseCheckNicknameModal}
                setNickname={setNickname}
                setCheckNickname={setCheckNickname}
              />
            }
          </Menu>
        }
      </Wrapper>
    </div>
  );
};

export default SignUp;
