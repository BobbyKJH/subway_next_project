// React
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
// Redux
import { useAppDispatch } from "../../store/hooks";
import { resetButton } from "../../store/recipeSlice";
// Style
import {
  MobileHeaderStyle,
  MobileNav,
  MobileTitle,
  MobileHeaderBox,
  MobileButton,
} from "../../styles/layout/Header.styled";
// Image
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const MobileHeader = () => {
  const router = useRouter();
  const dispath = useAppDispatch();
  const [nav, setNav] = useState(false);

  // page 표시
  const page = (title: string) => {
    return router.pathname.includes(title);
  };

  // 페이지 이동 nav open || close
  const openNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNav(!nav);
  };

  // MenuList Reset
  const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispath(resetButton());
    setNav(false);
  };

  // nav 선택시 close
  const closeNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNav(false);
  };

  return (
    <MobileHeaderStyle>
      <MobileHeaderBox>
        <Link href={`/`}>
          <MobileTitle onClick={closeNav}>My Subway</MobileTitle>
        </Link>

        <MobileButton onClick={openNav}>
          <BsArrowLeftSquareFill />
        </MobileButton>
      </MobileHeaderBox>

      {/* Nav 창 */}
      {nav && (
        <MobileNav width={nav}>
          <button className="close" onClick={closeNav}>
            <BsArrowRightSquareFill />
          </button>
          <Link href={`/menu/sandwich`}>
            <button
              onClick={closeNav}
              className={page("/menu") ? "active" : ""}
            >
              <strong>메뉴</strong>
            </button>
          </Link>

          <Link href={`/combination/sandwich`}>
            <button
              onClick={reset}
              className={page("/combination") ? "active" : ""}
            >
              <strong>조합</strong>
            </button>
          </Link>

          <Link href={`/mypage`}>
            <button
              onClick={closeNav}
              className={page("/mypage") ? "active" : ""}
            >
              <strong>마이페이지</strong>
            </button>
          </Link>
        </MobileNav>
      )}
    </MobileHeaderStyle>
  );
};

export default MobileHeader;
