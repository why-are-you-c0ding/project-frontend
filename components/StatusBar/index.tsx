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
import useInput from "@hooks/useInput";
import { ToastContainer } from "react-toastify";
import { Cookies } from "react-cookie";
import { memberApi } from "@api/memberApi";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { logout } from "@redux/reducers/userInfoSlice";

interface Props {
  sideBar?: boolean;
}

const StatusBar: FC<Props> = ({ sideBar }) => {
  const [menu, setMenu] = useState(false);
  const [word, onChangeWord, setWord] = useInput("");
  const cookie = new Cookies();
  const isLogin = useAppSelector((state) => state.userInfo.isLogin);
  const dispatch = useAppDispatch();

  const [logoutMutation] = memberApi.useLogoutMutation();

  const onClickBar = useCallback(() => {
    setMenu((prev) => !prev);
  }, []);

  const onLogout = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      logoutMutation({});
      dispatch(logout());
    },
    [isLogin],
  );

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
      <ToastContainer />

      <Bar>
        <SubBar>
          <SubMenu>
            <span>
              <Link to="/sellpage/signupitem">판매 페이지</Link>
            </span>
            <span>
              <Link to="/mypage/like">장바구니</Link>
            </span>
            <span>
              <Link to="/mypage/buying">마이 페이지</Link>
            </span>
            <span>
              {!isLogin ? (
                <Link to="/login">로그인</Link>
              ) : (
                <div onClick={onLogout}>로그아웃</div>
              )}
            </span>
          </SubMenu>
        </SubBar>
        <MainBar>
          <Name>
            <a href="/">WAYC</a>
          </Name>
          <div>
            {/*모두 완성되면 하나 지우면됨 구매페이지*/}
            <span className="hidden">
              <Link to="/ProductPage">Shop</Link>
            </span>
            <span>
              <label>
                <input type="text" value={word} onChange={onChangeWord} />
                <Link
                  to={"/searchitem"}
                  state={{
                    word: word,
                  }}
                >
                  <FontAwesomeIcon
                    className={"icon"}
                    icon={faMagnifyingGlass}
                  />
                </Link>
              </label>
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
