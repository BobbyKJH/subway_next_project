// React
import Link from "next/link";
import React from "react";
// Style
import { HeaderStyle } from "../styles/HeaderStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <div id="header">
        <Link href={"/"}>
          <a id="title">My Subway Recipe</a>
        </Link>

        <div className="header">
          <Link href={"/menu/sandwich"}>
            <a className="nav">메뉴소개</a>
          </Link>

          <hr />

          <Link href={"/combination/sandwich"}>
            <a className="nav">조합</a>
          </Link>

          <hr />

          <Link href={"/mypage"}>
            <a className="nav">마이페이지</a>
          </Link>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
