// React
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
// Style
import { MenuButtonBox } from "../../styles/components/menu/MenuButton.styled";

const MenuButton = () => {
  const router = useRouter();

  const menu = (title: string) => router.pathname === `/menu/${title}`;

  return (
    <MenuButtonBox>
      <Link href={`/menu/sandwich`} id="sandwich">
        <a className={menu("sandwich") ? "active" : ""}>샌드위치</a>
      </Link>

      <Link href={`/menu/bread`} id="bread">
        <a className={menu("bread") ? "active" : ""}>빵</a>
      </Link>

      <Link href={`/menu/cheese`} id="cheese">
        <a className={menu("cheese") ? "active" : ""}>치즈</a>
      </Link>

      <Link href={`/menu/vegetable`} id="vegetable">
        <a className={menu("vegetable") ? "active" : ""}>채소</a>
      </Link>

      <Link href={`/menu/sauce`} id="sauce">
        <a className={menu("sauce") ? "active" : ""}>소스</a>
      </Link>
    </MenuButtonBox>
  );
};

export default MenuButton;
