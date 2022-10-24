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
import { Correct, Error } from "@pages/SignUp/styles";
import axios from "axios";
import { Wrapper } from "@components/CheckNicknameModal/styles";

interface Props {
  nickname: string;
  onChangeNickname: (e: ChangeEvent<HTMLInputElement>) => void;
  onCloseCheckIdModal: () => void;
  setNickname: Dispatch<SetStateAction<string>>;
  setCheckNickname: (frag: boolean) => void;
}

const CheckNicknameModal: FC<Props> = ({
  nickname,
  onChangeNickname,
  onCloseCheckIdModal,
  setNickname,
  setCheckNickname,
}) => {
  const [failUseNickname, setFailUseNickname] = useState(false);
  const [clickCheck, setClickCheck] = useState(false);

  const onSubmitNickname = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!nickname && !nickname.trim()) return;

      axios
        .post(
          "https://waycabvav.shop/verification/nick-name",
          {
            nickName: nickname,
          },
          { withCredentials: true }
        )
        .then((response) => {
          setFailUseNickname(true);
          setNickname(nickname);
          setCheckNickname(true);

          if (nickname.length < 2) {
            setFailUseNickname(false);
            setCheckNickname(false);
          }
        })
        .catch((error) => {
          setFailUseNickname(false);
          setCheckNickname(false);
          console.log(error.response);
        })
        .finally(() => {
          setClickCheck(true);
        });
    },
    [nickname, setNickname]
  );

  const stopPropagation = useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      e.stopPropagation();
    },
    []
  );

  return (
    <Wrapper onClick={stopPropagation}>
      <Form onSubmit={onSubmitNickname}>
        <Div>
          <Header>닉네임 중복 검사</Header>
          <Button type="submit">검사</Button>
        </Div>
        <Input
          type="text"
          id="nickname"
          onChange={onChangeNickname}
          name="nickname"
          value={nickname}
        ></Input>
        <button onClick={onCloseCheckIdModal}>X</button>
        {clickCheck && !failUseNickname && nickname.length > 0 && (
          <Error>닉네임을 사용하실 수 없습니다.</Error>
        )}
        {clickCheck && failUseNickname && (
          <Correct>닉네임 사용이 가능합니다.</Correct>
        )}
      </Form>
    </Wrapper>
  );
};

export default CheckNicknameModal;
