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
  StatusPassword,
  ResultPasswordCircle,
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
import StatusBar from "@components/UI/StatusBar";
import { toast, ToastContainer } from "react-toastify";
import { memberApi } from "@api/memberApi";
import {
  duplicateError,
  SignUpInfo,
  VerificationFail,
  VerificationSuccess,
} from "@typings/member";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const [loginId, onChangeLoginId, setId] = useInput("");
  const [password, , setPassword] = useInput("");
  const [checkPassword, , setCheckPassword] = useInput("");
  const [email, onChangeEmail, setEmail] = useInput("");
  const [nickName, onChangeNickName, setNickname] = useInput("");
  const [birthDay, onChangeBirthDay, setBirthDay] = useInput("");
  const [authKey, onChangeAuthKey, setAuthKey] = useInput("");

  /** password mismatch */
  const [mismatchError, setMismatchError] = useState(false);
  const [mismatchCondition, setMismatchCondition] = useState(false);

  const [isCheckId, setIsCheckId] = useState(false);
  const [isCheckNickName, setIsCheckNickName] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  const [checkIdMutation] = memberApi.useValidateIdMutation();
  const [receiveEmailMutation] = memberApi.useReceiveEmailMutation();
  const [checkNicknameMutation] = memberApi.useVerificationNickNameMutation();
  const [signupConsumersMutation] = memberApi.useSignUpConsumersMutation();
  const [signupSellersMutation] = memberApi.useSignUpSellersMutation();

  // TODO: 아이디, 닉네임 체크 api만 확인 | 이메일 주소, 회원 가입은 확인 필요

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (
        !isCheckId ||
        !isCheckNickName ||
        !isSendEmail ||
        !mismatchCondition ||
        !mismatchError ||
        !birthDay ||
        !authKey
      ) {
        toast.warning("모든 정보를 입력하거나 체크를 완료해주세요.", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

      const thisYear = new Date().getFullYear().toString().slice(0, 4);
      const age = +thisYear - +birthDay.slice(0, 4) + 1;

      const data: SignUpInfo = {
        loginId,
        nickName,
        email,
        password,
        checkPassword,
        age,
        authKey,
      };

      const res = isSeller
        ? await signupSellersMutation(data)
        : await signupConsumersMutation(data);

      if ("data" in res) {
        if (res.data.message === "멤버 생성에 성공했습니다.") {
          toast.success("회원가입에 성공했습니다!", {
            position: toast.POSITION.TOP_CENTER,
          });

          setTimeout(() => navigate("/login"), 3000);
        } else {
          toast.warning(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else if ("error" in res) {
        toast.error("다시 시도해주세요!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
    [
      nickName,
      email,
      loginId,
      password,
      checkPassword,
      authKey,
      isCheckId,
      isCheckNickName,
      isSendEmail,
      mismatchCondition,
      mismatchError,
      birthDay,
      isSeller,
    ],
  );

  const onCheckId = useCallback(async () => {
    if (!loginId) {
      toast.warn("사용할 아이디를 입력해주세요!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (loginId.length < 6) {
      toast.warn("아이디를 6자 이상 입력해주세요!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const res: VerificationSuccess | VerificationFail = await checkIdMutation({
      loginId,
    });

    if ("data" in res) {
      if (res.data.message === "검증에 성공했습니다.") {
        setIsCheckId(true);
        toast.success("아이디 사용이 가능합니다!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else if ("error" in res) {
      const resError = res.error as duplicateError;

      resError.data.message ===
      "해당 로그인 아이디는 이미 존재하는 로그인 아이디입니다."
        ? toast.error("이미 사용중입니다.", {
            position: toast.POSITION.TOP_CENTER,
          })
        : toast.error("다시 시도해주세요.", {
            position: toast.POSITION.TOP_CENTER,
          });
    }
  }, [loginId]);

  const receiveAuthKey = useCallback(async () => {
    if (!email) {
      toast.warn("이메일을 입력해주세요!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.warn("이메일이 유효하지 않습니다!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const res: VerificationSuccess | VerificationFail =
      await receiveEmailMutation({ receiveEmail: email });

    if ("data" in res) {
      toast.success("인증 번호를 전송했습니다!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsSendEmail(true);
    } else if ("error" in res) {
      toast.error("다시 시도해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [email]);

  const onCheckNickname = useCallback(async () => {
    if (!nickName) {
      toast.warn("닉네임을 입력해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (nickName.length < 2) {
      toast.warn("닉네임을 2자 이상 입력해주세요.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const res: VerificationSuccess | VerificationFail =
      await checkNicknameMutation({ nickName });

    if ("data" in res) {
      toast.success("닉네임 사용이 가능합니다!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsCheckNickName(true);
    } else if ("error" in res) {
      const resError = res.error as duplicateError;

      resError.data.message === "해당 닉네임은 이미 존재하는 닉네임입니다."
        ? toast.error("이미 사용중입니다.", {
            position: toast.POSITION.TOP_CENTER,
          })
        : toast.error("다시 시도해주세요.", {
            position: toast.POSITION.TOP_CENTER,
          });
    }
  }, [nickName]);

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value === checkPassword);
    },
    [checkPassword, setPassword],
  );

  const onChangePasswordCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCheckPassword(e.target.value);
      setMismatchError(e.target.value === password);
    },
    [password, setCheckPassword],
  );

  const onChangeSeller = useCallback(() => {
    setIsSeller((prev) => !prev);
  }, [isSeller]);

  // password 조건 체크
  useEffect(() => {
    const regexp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;
    if (password.match(regexp)) setMismatchCondition(true);
    else setMismatchCondition(false);
  }, [password, setPassword]);

  return (
    <div>
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
              value={loginId}
              onChange={(event) => {
                onChangeLoginId(event);
                setIsCheckId(false);
              }}
              placeholder="예) wayc123, 6~15자 "
              maxLength={15}
            />
            {isCheckId && <SuccessVerification>✅</SuccessVerification>}
          </Label>
          <Label>
            <IsCheckWrapper>
              <span>이메일 주소*</span>
              <Button type="button" onClick={receiveAuthKey}>
                인증 번호
              </Button>
            </IsCheckWrapper>
            <Input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                onChangeEmail(event);
                setIsSendEmail(false);
              }}
              placeholder="예) wayc@google.com"
              maxLength={30}
            />
          </Label>
          <Label>
            <span>인증번호</span>
            <Input
              type="text"
              id="authKey"
              name="authKey"
              value={authKey}
              onChange={onChangeAuthKey}
              placeholder="이메일에 전송된 인증 번호를 입력해주세요."
              maxLength={10}
            />
          </Label>
          <Label>
            <span>비밀번호*</span>
            <div>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(0,0,0,0.4)",
                  marginTop: "0.5rem",
                }}
              >
                비밀번호는 8자 이상/영문, 숫자, 특수 문자 1자 이상 포함
              </span>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                placeholder="영문, 숫자, 특수문자 조합 8-15자"
                minLength={8}
                maxLength={15}
              />
            </div>
            {password.length > 0 && (
              <StatusPassword status={mismatchCondition}>
                {!mismatchCondition && (
                  <>
                    <ResultPasswordCircle status={mismatchCondition} />
                    비밀번호 조건에 맞지 않습니다.
                  </>
                )}
                {mismatchCondition && (
                  <>
                    <ResultPasswordCircle status={mismatchCondition} />
                    비밀번호 사용이 가능합니다!
                  </>
                )}
              </StatusPassword>
            )}
          </Label>
          <Label>
            <span>비밀번호 체크* </span>
            <div>
              <Input
                type="password"
                id="password-check"
                name="password-check"
                value={checkPassword}
                onChange={onChangePasswordCheck}
                placeholder="영문, 숫자, 특수문자 조합 8-15자"
                minLength={8}
                maxLength={15}
              />
            </div>
            {checkPassword.length > 0 && (
              <StatusPassword status={mismatchError}>
                {!mismatchError && (
                  <>
                    <ResultPasswordCircle status={mismatchError} />
                    비밀번호가 일치하지 않습니다!
                  </>
                )}
                {mismatchError && checkPassword.length > 7 && (
                  <>
                    <ResultPasswordCircle status={mismatchError} />
                    비밀번호가 일치합니다!
                  </>
                )}
              </StatusPassword>
            )}
          </Label>
          <Label>
            <IsCheckWrapper>
              <span>닉네임*</span>
              <Button type="button" onClick={onCheckNickname}>
                중복 체크
              </Button>
            </IsCheckWrapper>
            <Input
              type="text"
              id="nickname"
              name="nickname"
              value={nickName}
              onChange={(event) => {
                onChangeNickName(event);
                setIsCheckNickName(false);
              }}
              placeholder="닉네임을 입력해주세요.(2자 이상)"
              minLength={2}
              maxLength={10}
            />
            {isCheckNickName && <SuccessVerification>✅</SuccessVerification>}
          </Label>
          <Label>
            <span>생년월일*</span>
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
          <Label>
            <SignUpBtn type="submit">가입하기</SignUpBtn>
          </Label>
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
