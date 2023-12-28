import React, { CSSProperties, FC, useCallback, useState } from "react";
import {
  Button,
  DetailInput,
  Header,
  Info,
  PostWrapper,
  SearchBtn,
  Title,
  Wrapper,
} from "@pages/Approval/styles";
import { useLocation } from "react-router-dom";
import useInput from "@hooks/useInput";
import { useNavigate } from "react-router";
import { approvalItemInfo, orderLineItem } from "@typings/items";
import EachApproval from "@components/Approval/EachApproval";
import DaumPostcode from "react-daum-postcode";
import { useDisclosure } from "@chakra-ui/react";
import ModalWrapper from "@components/UI/Modal";

const Approval: FC = () => {
  const location = useLocation();
  const itemInfos: (approvalItemInfo & { image: string })[] =
    location.state ?? [];

  const [addrSearch, setAddrSearch] = useState(false);
  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [detailAddr, onChangeDetailAddr, setDetailAddr] = useInput("");
  const totalPrice = itemInfos.reduce((a, c) => a + c.totalPayment, 0);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const postCodeStyle: CSSProperties = {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    marginTop: "3rem",
    width: "100%",
    height: "88%",
  };

  const onCompletePost = (data: {
    ["address"]: string;
    ["zonecode"]: string;
  }) => {
    onClickAddrSearch();
    setZoneCode(data.zonecode);
    setAddress(data.address);
    onClose();
  };

  const onClickAddrSearch = useCallback(() => {
    setAddrSearch((prev) => !prev);
    setPopup((prev) => !prev);
  }, []);

  return (
    <div>
      <Wrapper>
        <Info>
          <Title>
            <h3>구매자 정보</h3>
          </Title>
          <div>
            <span>배송주소</span>
            <span>
              <PostWrapper>
                <div>{address}</div>
                <SearchBtn onClick={onOpen}>주소 검색</SearchBtn>
              </PostWrapper>
            </span>
          </div>
          <div>
            <span>우편 번호</span>
            <span>{zoneCode}</span>
          </div>
          <div>
            <span>상세 주소</span>
            <span>
              <DetailInput
                type="text"
                value={detailAddr}
                onChange={onChangeDetailAddr}
                placeholder="상세 주소를 입력"
              />
            </span>
          </div>
        </Info>

        <Title>
          <h3>상품 정보</h3>
        </Title>
        <EachApproval itemInfos={itemInfos} />

        <Info>
          <Title>
            <h3>결제 정보</h3>
          </Title>
          <div>
            <span>상품 가격</span>
            <span>{totalPrice}원</span>
          </div>
          <div>
            <span>배송비</span>
            <span>3000원</span>
          </div>
          <div>
            <span>총 가격</span>
            <span>{totalPrice + 3000}원</span>
          </div>
        </Info>

        <Button>
          <button onClick={() => {}}>결제하기</button>
        </Button>
      </Wrapper>

      <ModalWrapper
        onClose={onClose}
        isOpen={isOpen}
        title={"주소 검색"}
        content={
          <DaumPostcode
            className={"post"}
            style={postCodeStyle}
            autoClose
            onComplete={onCompletePost}
          />
        }
        footer={null}
        height={"70vh"}
      />
    </div>
  );
};

export default Approval;
