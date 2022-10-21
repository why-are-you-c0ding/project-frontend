import React, { ChangeEvent, useCallback, useState } from "react";
import StatusBar from "@components/StatusBar";
import {
  Button,
  DetailInput,
  Header,
  Info,
  SearchBtn,
  Title,
  Wrapper,
} from "@components/Checkout/styles";
import { useLocation } from "react-router-dom";
import { makeOrder } from "@utils/makeOrder";
import axios from "axios";
import Menu from "@components/Menu";
import useInput from "@hooks/useInput";
import AddressSearchModal from "@components/AddressSearchModal";

const Checkout = () => {
  const [addrSearch, setAddrSearch] = useState(false);
  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [detailAddr, onChangeDetailAddr, setDetailAddr] = useInput("");

  const onClickAddrSearch = useCallback(() => {
    setAddrSearch((prev) => !prev);
    setPopup((prev) => !prev);
  }, []);

  const location: any = useLocation();

  const order = makeOrder(
    location.state.eachData,
    location.state.optInfo,
    location.state.count,
    address,
    zoneCode,
    detailAddr,
    location.state.total
  );

  const onClickBuyBtn = useCallback(
    (e: any) => {
      e.preventDefault();

      if (address === "") {
        alert("주소를 입력해주세요");
        return;
      }
      if (detailAddr === "") {
        alert("상세 주소를 입력해주세요");
        return;
      }

      axios
        .post("https://waycabvav.shop/orders", order, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          alert("성공");
        })
        .catch((err) => {
          alert("실패");
        });
    },
    [order]
  );

  let option: string = "";

  for (let i = 0; i < location.state.optInfo.cartOptionGroups.length; i++) {
    if (i !== 0) option += ", ";
    option += location.state.optInfo.cartOptionGroups[i].cartOptions[0].name;
  }

  return (
    <div>
      <StatusBar />

      <Wrapper>
        <Header>
          <h2>주문/결제</h2>
        </Header>

        <Info>
          <Title>
            <h3>구매자 정보</h3>
          </Title>
          <div>
            <span>이름</span>
            <span>김덕배</span>
          </div>
          <div>
            <span>배송주소</span>
            <span>
              {address}{" "}
              <SearchBtn onClick={onClickAddrSearch}>주소 검색</SearchBtn>
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

        <Info>
          <Title>
            <h3>결제 정보</h3>
          </Title>
          <div>
            <span>상품명</span>
            <span>{location.state.eachData.itemName}</span>
          </div>
          <div>
            <span>선택 옵셥</span>
            <span>{option}</span>
          </div>
          <div>
            <span>수량</span>
            <span>{location.state.count}개</span>
          </div>
          <div>
            <span>개당 가격</span>
            <span>{location.state.total}원</span>
          </div>
          <div>
            <span>배송비</span>
            <span>0원</span>
          </div>
          <div>
            <span>총 결제금액</span>
            <span>{location.state.total * location.state.count}원</span>
          </div>
        </Info>

        <Button>
          <button onClick={onClickBuyBtn}>결제하기</button>
        </Button>
      </Wrapper>

      <Menu show={addrSearch} onCloseModal={onClickAddrSearch}>
        {
          <AddressSearchModal
            popup={popup}
            address={address}
            setZoneCode={setZoneCode}
            setAddress={setAddress}
            onClickAddrSearch={onClickAddrSearch}
          />
        }
      </Menu>
    </div>
  );
};

export default Checkout;
