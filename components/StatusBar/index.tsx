import React, { FC, useCallback, useEffect, useState } from "react";
import {
  Bar,
  BarWrapper,
  MainBar,
  Name,
  SubBar,
  SubMenu,
} from "@components/StatusBar/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "@components/Menu";
import MenuList from "@components/MenuList";
import { Link } from "react-router-dom";

interface Props {
  sideBar?: boolean;
}

const StatusBar: FC<Props> = ({ sideBar }) => {
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
    <BarWrapper sideBar={sideBar}>
      <Bar>
        <SubBar>
          <SubMenu>
            <span>
              <Link to="/mypage/like">장바구니</Link>
            </span>
            <span>
              <Link to="/mypage/my">마이 페이지</Link>
            </span>
            <span>
              <Link to="/login">로그인</Link>
            </span>
          </SubMenu>
        </SubBar>
        <MainBar>
          <Name>
            <a href="/">WAYC</a>
          </Name>
          <div>
            <span className="hidden">
              <Link to="/Shop">Shop</Link>
            </span>
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
    </BarWrapper>
  );
};

export default StatusBar;
