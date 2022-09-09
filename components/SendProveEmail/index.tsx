import React, {
  ChangeEvent,
  Dispatch,
  FC,
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
import { Correct, Error } from "@pages/SignUp/styles";
import axios from "axios";
import { Wrapper } from "@components/CheckNicknameModal/styles";

interface Props {
  email: string;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onCloseCheckEmailModal: () => void;
  setEmail: Dispatch<SetStateAction<string>>;
  setCheckId: (frag: boolean) => void;
}

const SendProveEmail: FC<Props> = ({
  email,
  onChangeEmail,
  onCloseCheckEmailModal,
  setEmail,
  setCheckId,
}) => {
  const [failUseEmail, setFailUseEmail] = useState(false);
  const [clickCheck, setClickCheck] = useState(false);

  const onSubmitEmail = useCallback(
    (e) => {
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
          console.log(response);
        })
        .catch((error) => {
          alert("이메일 발송에 실패했습니다.");
          setFailUseEmail(false);
          console.log(error.response);
        })
        .finally(() => {
          setClickCheck(true);
        });
    },
    [email]
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
          <Button type="submit">검사</Button>
        </Div>
        <Input
          type="email"
          id="email"
          onChange={onChangeEmail}
          name="email"
          value={email}
        ></Input>
        <button onClick={onCloseCheckEmailModal}>X</button>
        {clickCheck && !failUseEmail && email.length > 0 && (
          <Error>닉네임을 사용하실 수 없습니다.</Error>
        )}
        {clickCheck && failUseEmail && (
          <Correct>닉네임 사용이 가능합니다.</Correct>
        )}
      </Form>
    </Wrapper>
  );
};

export default SendProveEmail;
