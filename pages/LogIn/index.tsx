import React, { FormEvent, useCallback, useState } from "react";
import {
  Form,
  Header,
  Input,
  Label,
  SearchBox,
  SignUpBtn,
  Wrapper,
} from "@pages/SignUp/styles";
import useInput from "@hooks/useInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { memberApi } from "@api/memberApi";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { login } from "@redux/reducers/userInfoSlice";

const LogIn = () => {
  const [loginId, onChangeLoginId, setLoginId] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginMutation] = memberApi.useLoginMutation();

  const headers = {
    "X-Requested-With": "XMLHttpRequest",
  };

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

      if ("data" in res) {
        if (res.data.message === "Login succeeded.") {
          dispatch(login());
          navigate("/main");
        } else {
          toast.warning(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else if ("error" in res) {
        toast.error("잠시 후 다시 시도해 주세요.", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
    [loginId, password],
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
          <span>비밀 번호</span>
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
          <SignUpBtn type="submit">로그인</SignUpBtn>{" "}
        </Label>
        <SearchBox>
          <span>
            <Link to="/signup">회원 가입</Link>
          </span>
        </SearchBox>
      </Form>
    </Wrapper>
  );
};

export default LogIn;
