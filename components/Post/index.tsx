import React, {
  CSSProperties,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import DaumPostcode from "react-daum-postcode";
import { Wrapper } from "@components/Post/styles";
import address from "@components/Address";

interface Props {
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  onClickAddrSearch: () => void;
  setZoneCode: Dispatch<SetStateAction<string>>;
}

const Post: FC<Props> = ({
  address,
  setAddress,
  onClickAddrSearch,
  setZoneCode,
}) => {
  const addre = address;
  const setAddre = setAddress;

  const onCompletePost = (data: any) => {
    onClickAddrSearch();
    setZoneCode(data.zonecode);
    setAddress(data.address);
  };

  const postCodeStyle: CSSProperties = {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",
    padding: "7px",
    zIndex: 100,
  };

  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  return (
    <Wrapper onClick={stopPropagation}>
      <div>
        <span>주소 찾기</span>
      </div>
      <button onClick={onClickAddrSearch}>X</button>
      <DaumPostcode
        className={"post"}
        style={postCodeStyle}
        autoClose
        onComplete={onCompletePost}
      />
    </Wrapper>
  );
};

export default Post;
