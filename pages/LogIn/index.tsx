import React, { FormEvent, useCallback } from "react";
import {
  Form,
  Header,
  Input,
  Label,
  SearchBox,
  SignUpBtn,
  SocialLoginWrapper,
  Wrapper,
} from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { memberApi } from "@api/memberApi";
import { toast } from "react-toastify";
import { useAppDispatch } from "@redux/hooks";
import { login } from "@redux/reducers/userInfoSlice";
import { setCookie } from "@utils/cookie";
import { encrypt } from "@utils/cryptho";

const LogIn = () => {
  const [loginId, onChangeLoginId, setLoginId] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginKey = process.env.REACT_LOGIN_KEY!;

  const [loginMutation] = memberApi.useLoginMutation();

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!loginId || !password) {
        toast.warning("모든 정보를 입력하거나 체크를 완료해주세요.", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

      const res = await loginMutation({ loginId, password });

      if ("data" in res && res.data === null) {
        dispatch(login());

        const oneMonthLater = new Date();
        oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
        setCookie("isLogin", encrypt(loginKey), {
          path: "/",
          expires: oneMonthLater,
        });
        navigate("/main");
      } else if ("error" in res) {
        if ("status" in res.error) {
          res.error.status === 401
            ? toast.warning("아이디와 비밀번호가 일치하지 않습니다.", {
                position: toast.POSITION.TOP_CENTER,
              })
            : toast.warning("잠시 후 다시 시도해주세요.", {
                position: toast.POSITION.TOP_CENTER,
              });
        }
      }
    },
    [loginId, password, loginKey],
  );

  return (
    <Wrapper isLogin={true}>
      <Header>WAYC</Header>
      <Form onSubmit={onSubmit}>
        <Label>
          <span>아이디</span>
          <div>
            <Input
              type="text"
              id="id"
              name="id"
              value={loginId}
              onChange={onChangeLoginId}
              placeholder="아이디를 입력해주세요."
            />
          </div>
        </Label>
        <Label>
          <span>비밀번호</span>
          <div>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </Label>
        <Label>
          <SignUpBtn type="submit">로그인</SignUpBtn>
        </Label>
        <SocialLoginWrapper>
          <span>소셜 로그인</span>
          <div>
            <Link to={"https://wayc.store/oauth2/authorization/google"}>
              <img src="/public/google.svg" alt="구글 로그인" />
            </Link>
            <Link to={"https://wayc.store/oauth2/authorization/kakao"}>
              <img src="/public/kakao.svg" alt="카카오 로그인" />
            </Link>
          </div>
        </SocialLoginWrapper>
        <SearchBox>
          <span>
            <Link to="/signup">회원가입</Link>
          </span>
        </SearchBox>
      </Form>
    </Wrapper>
  );
};

export default LogIn;
