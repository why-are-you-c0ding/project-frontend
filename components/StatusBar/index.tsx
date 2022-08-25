import React, { useCallback, useState } from "react";
import {
  Bar,
  MainBar,
  Name,
  SubBar,
  SubMenu,
} from "@components/StatusBar/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "@components/Menu";
import MenuList from "@components/MenuList";

const StatusBar = () => {
  const [bar, setBar] = useState(false);

  const onClickBar = useCallback(() => {
    setBar((prev) => !prev);
  }, []);

  return (
    <>
      <Bar>
        <SubBar>
          <SubMenu>
            <span>장바구니</span>
            <span>마이페이지</span>
            <span>로그인</span>
          </SubMenu>
        </SubBar>
        <MainBar>
          <Name>이름</Name>
          <div>
            <span className="hidden">shop</span>
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <span className="faBars" onClick={onClickBar}>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
        </MainBar>
      </Bar>
      {bar && (
        <Menu show={bar} onCloseModal={onClickBar}>
          {<MenuList onCloseModal={onClickBar} setBar={setBar} />}
        </Menu>
      )}
    </>
  );
};

export default StatusBar;
