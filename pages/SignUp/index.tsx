import React, { useCallback, useState } from "react";
import useInput from "@hooks/useInput";
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
} from "./styles";
import StatusBar from "@components/StatusBar";

const SignUp = () => {
  const [id, onChangeId] = useInput("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, onChangeNickname] = useInput("");
  const [mismatchError, setMismatchError] = useState(false);
  const [match, setmatch] = useState(true);

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
      setmatch(e.target.value === passwordCheck);
    },
    [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
      setmatch(e.target.value === password);
    },
    [password]
  );

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(id, nickname, password, passwordCheck, email, nickname);
    },
    [id, nickname, password, passwordCheck, email, nickname]
  );

  return (
    <Wrapper>
      <StatusBar />
      <Header>회원가입</Header>
      <Form onSubmit={onSubmit}>
        <Label>
          <span>아이디*</span>
          <button>중복 체크</button>
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
          <span>이메일 주소*</span>
          <button>중복 체크</button>
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
          <span>닉네임*</span>
          <button>중복 체크</button>
          <div>
            <Input
              type="text"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={onChangeNickname}
              placeholder="예) 권오현"
            />
          </div>
        </Label>
        <SignUpBtn>가입하기</SignUpBtn>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
