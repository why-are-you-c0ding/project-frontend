import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import {
  Button,
  Div,
  Form,
  Header,
  Input,
} from "@components/CheckIdModal/styles";
import { Correct } from "@pages/SignUp/styles";
import axios from "axios";
import { Wrapper } from "@components/CheckNicknameModal/styles";
import { InputKey } from "@components/SendProveEmail/styles";
import useInput from "@hooks/useInput";

interface Props {
  email: string;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onCloseCheckEmailModal: () => void;
  setCheckEmail: (frag: boolean) => void;
  authKey: string;
  onChangeAuthKey: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SendProveEmail: FC<Props> = ({
  email,
  onChangeEmail,
  onCloseCheckEmailModal,
  setCheckEmail,
  authKey,
  onChangeAuthKey,
}) => {
  const [failUseEmail, setFailUseEmail] = useState(false);
  const [proveEamil, setProveEamil] = useState(false);

  const onSubmitEmail = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!email && !email.trim()) return;

      axios
        .post(
          "https://waycabvav.shop/verification/email",
          {
            receiveEmail: email,
          },
          { withCredentials: true }
        )
        .then((response) => {
          setFailUseEmail(true);
          alert("이메일 발송했습니다. 5분 안에 입력해주세요.");
          console.log(response);
        })
        .catch((error) => {
          alert("이메일 발송에 실패했습니다.");
          setFailUseEmail(false);
          console.log(error.response);
        });
    },
    [email]
  );

  const onSubmitProveEmail = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!authKey && !authKey.trim()) return;

      axios
        .post(
          "https://waycabvav.shop/verification/email/auth-key",
          {
            email: email,
            authKey: authKey,
          },
          { withCredentials: true }
        )
        .then((response) => {
          setProveEamil(true);
          setCheckEmail(true);
          console.log(response);
        })
        .catch((error) => {
          setProveEamil(false);
          setCheckEmail(false);
          alert("인증 번호를 다시 입력해주세요.");
          console.log(error.response);
        });
    },
    [authKey]
  );

  const stopPropagation = useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      e.stopPropagation();
    },
    []
  );

  return (
    <Wrapper onClick={stopPropagation}>
      <Form onSubmit={onSubmitEmail}>
        <Div>
          <Header>이메일 인증</Header>
          <Button type="submit">보내기</Button>
        </Div>
        <Input
          type="email"
          id="email"
          onChange={onChangeEmail}
          name="email"
          value={email}
        ></Input>
        <button onClick={onCloseCheckEmailModal}>X</button>
        {proveEamil && <Correct>이메일 인증이 완료되었습니다.</Correct>}
      </Form>
      {failUseEmail && !proveEamil && (
        <InputKey>
          <form onSubmit={onSubmitProveEmail}>
            <span>인증 번호 입력</span>
            <input type="text" value={authKey} onChange={onChangeAuthKey} />
            <Button type="submit">검사</Button>
          </form>
        </InputKey>
      )}
    </Wrapper>
  );
};

export default SendProveEmail;
