// React
import Link from "next/link";
import React from "react";
// Style
import { MenuButtonStyle } from "../../styles/menu/MenuStyle";

const MenuButton = () => {
  return (
    <MenuButtonStyle>
      <Link href={`/menu/sandwich`} id="sandwich">
        <a>샌드위치</a>
      </Link>
      <Link href={`/menu/bread`} id="bread">
        <a>빵</a>
      </Link>
      <Link href={`/menu/cheese`} id="cheese">
        <a>치즈</a>
      </Link>
      <Link href={`/menu/sauce`} id="sauce">
        <a>소스</a>
      </Link>
    </MenuButtonStyle>
  );
};

export default MenuButton;
