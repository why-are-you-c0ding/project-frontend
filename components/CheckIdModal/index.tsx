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
  Wrapper,
} from "@components/CheckIdModal/styles";
import { Correct, Error } from "@pages/SignUp/styles";
import axios from "axios";

interface Props {
  id: string;
  onChangeId: (e: ChangeEvent<HTMLInputElement>) => void;
  onCloseCheckIdModal: () => void;
  setId: Dispatch<SetStateAction<string>>;
  setCheckId: (frag: boolean) => void;
}

const CheckIdModal: FC<Props> = ({
  id,
  onChangeId,
  onCloseCheckIdModal,
  setId,
  setCheckId,
}) => {
  const [failUseID, setFailUseId] = useState(false);
  const [clickCheck, setClickCheck] = useState(false);

  const onSubmitId = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!id && !id.trim()) return;

      axios
        .post(
          "https://waycabvav.shop/verification/login-id",
          {
            loginId: id,
          },
          { withCredentials: true }
        )
        .then((response) => {
          setFailUseId(true);
          setId(id);
          setCheckId(true);

          if (id.length < 6) {
            setFailUseId(false);
            setCheckId(false);
          }
        })
        .catch((error) => {
          setFailUseId(false);
          setCheckId(false);

          console.log(error.response);
        })
        .finally(() => {
          setClickCheck(true);
        });
    },
    [id, setId]
  );

  const stopPropagation = useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      e.stopPropagation();
    },
    []
  );

  return (
    <Wrapper onClick={stopPropagation}>
      <Form onSubmit={onSubmitId}>
        <Div>
          <Header>아이디 중복 검사</Header>
          <Button type="submit">검사</Button>
        </Div>
        <Input
          type="text"
          id="id"
          onChange={onChangeId}
          name="id"
          value={id}
        ></Input>
        <button onClick={onCloseCheckIdModal}>X</button>
        {clickCheck && !failUseID && id.length > 0 && (
          <Error>아이디를 사용하실 수 없습니다.</Error>
        )}
        {clickCheck && failUseID && (
          <Correct>아이디 사용이 가능합니다.</Correct>
        )}
      </Form>
    </Wrapper>
  );
};

export default CheckIdModal;
