import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import useInput from "@hooks/useInput";
import { Link } from "react-router-dom";
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
  CheckSeller,
  IsCheckWrapper,
  SuccessVerification,
} from "./styles";
import StatusBar from "@components/StatusBar";
import { toast, ToastContainer } from "react-toastify";
import { memberApi } from "@api/memberApi";
import { VerificationFail, VerificationSuccess } from "@typings/member";

const SignUp = () => {
  const [id, onChangeId, setId] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");
  const [email, onChangeEmail, setEmail] = useInput("");
  const [nickname, onChangeNickname, setNickname] = useInput("");
  const [birthDay, onChangeBirthDay, setBirthDay] = useInput("");
  const [age, setAge] = useState(0);
  const [authKey, onChangeAuthKey, setAuthKey] = useInput("");
  const [seller, setSeller] = useState(false);

  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  /** password mismatch */
  const [mismatchError, setMismatchError] = useState(false);
  const [mismatchCondition, setMismatchCondition] = useState(false);

  const [isCheckId, setIsCheckId] = useState(false);

  const [checkIdMutation, result] = memberApi.useValidateIdMutation();

  const onCheckId = useCallback(async () => {
    if (!id) {
      toast.warn("사용할 아이디를 입력해주세요!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (id.length < 6) {
      toast.warn("아이디를 6자 이상 입력해주세요!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const res: VerificationSuccess | VerificationFail = await checkIdMutation({
      loginId: id,
    });

    if ("data" in res) {
      if (res.data.message === "검증에 성공했습니다.") {
        setIsCheckId(true);
        toast.success("아이디 사용이 가능합니다!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.warning(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else if ("error" in res) {
      toast.error("다시 시도해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    // toast("Default Notification !");
    //
    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_CENTER,
    // });
    //
    // toast.error("Error Notification !", {
    //   position: toast.POSITION.TOP_LEFT,
    // });
    //
    // toast.info("Info Notification !", {
    //   position: toast.POSITION.BOTTOM_CENTER,
    // });
  }, [id]);

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
  }, [password, setPassword]);

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value === passwordCheck);
    },
    [passwordCheck, setPassword],
  );

  const onChangePasswordCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value === password);
    },
    [password, setPasswordCheck],
  );

  const onChangeSeller = useCallback(() => {
    setSeller((prev) => !prev);
  }, [seller]);

  const headers = {
    "X-Requested-With": "XMLHttpRequest",
  };
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div>
      <StatusBar />
      <ToastContainer />
      <Wrapper>
        <Header>회원가입</Header>
        <Form onSubmit={onSubmit}>
          <Label>
            <IsCheckWrapper>
              <span>아이디*</span>
              <Button type="button" onClick={onCheckId} isCheckId={isCheckId}>
                중복 체크
              </Button>
            </IsCheckWrapper>
            <Input
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={onChangeId}
              placeholder="예) wayc123, 6~15자 "
              maxLength={15}
            />
            {isCheckId && <SuccessVerification>✅</SuccessVerification>}
          </Label>

          <Label>
            <IsCheckWrapper>
              <span>이메일 주소*</span>
              <Button type="button" onClick={() => {}}>
                인증 번호
              </Button>
            </IsCheckWrapper>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="예) wayc@google.com"
            />
          </Label>

          <Label>
            <span>비밀 번호*</span>
            <div>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(0,0,0,0.4)",
                  marginTop: "0.5rem",
                }}
              >
                비밀번호는 8자 이상 및 영문, 숫자, 특수 문자 1자 이상 포함
              </span>
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
            {!mismatchCondition && password.length > 0 && (
              <Error>
                비밀번호 조건에 일치하지 않습니다!
                <ErrorCircle></ErrorCircle>
              </Error>
            )}
            {mismatchCondition && (
              <Correct>
                비밀번호 조건에 일치합니다!
                <CorrectCircle></CorrectCircle>
              </Correct>
            )}
          </Label>
          <Label>
            <span>비밀 번호 체크* </span>
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
          </Label>

          <Label>
            <IsCheckWrapper>
              <span>닉네임*</span>
              <Button type="button" onClick={() => {}}>
                중복 체크
              </Button>
            </IsCheckWrapper>
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

          <Label>
            <span>생년 월일*</span>
            <Input
              type="date"
              value={birthDay}
              onChange={onChangeBirthDay}
            ></Input>
          </Label>

          <CheckSeller>
            <span>*판매자로 가입하시려면 체크해주세요</span>
            <input type="checkbox" onChange={onChangeSeller} />
          </CheckSeller>

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
