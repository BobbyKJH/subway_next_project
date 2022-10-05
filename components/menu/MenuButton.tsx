// React
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
// Style
import {
  MenuBtn,
  MenuButtonBox,
} from "../../styles/components/menu/MenuButton.styled";

const MenuButton = () => {
  const router = useRouter();

  const menu = (title: string) => router.pathname === `/menu/${title}`;

  return (
    <MenuButtonBox>
      <Link href={`/menu/sandwich`} id="sandwich">
        <MenuBtn className={menu("sandwich") ? "active" : ""}>샌드위치</MenuBtn>
      </Link>

      <Link href={`/menu/bread`} id="bread">
        <MenuBtn className={menu("bread") ? "active" : ""}>빵</MenuBtn>
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
