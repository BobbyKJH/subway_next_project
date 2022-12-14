// React
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// Redux
import { useAppDispatch } from "../../store/hooks";
import { resetButton } from "../../store/recipeSlice";
// Component
import MobileHeader from "./MobileHeader";
// Style
import {
  HeaderNav,
  HeaderStyle,
  HeaderTitle,
} from "../../styles/layout/Header.styled";

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState(true);

  const Page = (title: string) => {
    return router.pathname.includes(title);
  };

  const MobileMode = () => {
    if (window.innerWidth > 1000) {
      setMode(true);
    } else {
      setMode(false);
    }
  };
  // MenuList Reset
  const reset = (e: React.MouseEvent<HTMLAnchorElement>) => {
    dispatch(resetButton());
  };

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setMode(false);
    }
    window.addEventListener("resize", MobileMode);
    return () => {
      window.removeEventListener("resize", MobileMode);
    };
  }, [mode]);

  return (
    <>
      {mode ? (
        <HeaderStyle>
          <div className="header">
            <Link href={"/"}>
              <HeaderTitle id="title">My Subway</HeaderTitle>
            </Link>

            <div>
              <Link href={"/menu/sandwich"}>
                <HeaderNav className={Page("/menu") ? "active" : ""}>
                  메뉴
                </HeaderNav>
              </Link>

              <Link href={"/combination/sandwich"}>
                <HeaderNav
                  onClick={reset}
                  className={Page("/combination") ? "active" : ""}
                >
                  조합
                </HeaderNav>
              </Link>

              <Link href={"/mypage"}>
                <HeaderNav className={Page("/mypage") ? "active" : ""}>
                  마이 페이지
                </HeaderNav>
              </Link>
            </div>
          </div>
        </HeaderStyle>
      ) : (
        <MobileHeader />
      )}
    </>
  );
};

export default Header;
