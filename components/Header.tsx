// React
import Link from "next/link";
import React from "react";
// Style

const Header = () => {
  return (
    <>
      <div id="header">
        <Link href={"/"}>
          <a id="title">My Subway Recipe</a>
        </Link>

        <div className="header">
          <Link href={"/menu/sandwich"}>
            <a className="nav">메뉴소개</a>
          </Link>

          <Link href={"/combination/sandwich"}>
            <a className="nav">조합</a>
          </Link>

          <Link href={"/mypage"}>
            <a className="nav">마이페이지</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
