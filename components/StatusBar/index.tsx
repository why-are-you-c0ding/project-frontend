import React, { useCallback, useEffect, useState } from "react";
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
  const [menu, setMenu] = useState(false);

  const onClickBar = useCallback(() => {
    setMenu((prev) => !prev);
  }, []);

  useEffect(() => {
    const windowResize = () => {
      if (window.innerWidth > 769) {
        setMenu(false);
      }
    };

    window.addEventListener(`resize`, windowResize);

    return () => {
      window.removeEventListener(`resize`, windowResize);
    };
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
          <Name>
            <a href="/">WAYC</a>
          </Name>
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
      {menu && (
        <Menu show={menu} onCloseModal={onClickBar}>
          {<MenuList onCloseModal={onClickBar} />}
        </Menu>
      )}
    </>
  );
};

export default StatusBar;
