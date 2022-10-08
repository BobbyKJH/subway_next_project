// React
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
// Style
import {
  MobileHeaderStyle,
  MobileNav,
  MobileTitle,
  MobileHeaderBox,
  MobileButton,
} from "../../styles/layout/Header.styled";
// Image
import { ImPlus } from "react-icons/im";

const MobileHeader = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  // page 표시
  const page = (title: string) => {
    return router.pathname.includes(title);
  };

  // 페이지 이동 nav open || close
  const openNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNav(!nav);
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

        <MobileButton onClick={openNav} turn={nav}>
          <ImPlus />
        </MobileButton>
      </MobileHeaderBox>

      {/* Nav 창 */}
      {nav && (
        <MobileNav width={nav}>
          <button onClick={openNav}>11</button>
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
              onClick={closeNav}
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
