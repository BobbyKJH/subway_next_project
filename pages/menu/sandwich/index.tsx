// React
import axios from "axios";
import Link from "next/link";
import React from "react";
// Component
import Menu from "../../../components/menu/Menu";
import MenuButton from "../../../components/menu/MenuButton";
// Style
import { MenuPage } from "../../../styles/pages/MenuPage.styled";
// Type
import { MapType } from "../../../utils/type";

const SandwichPage = ({ sandwich }: { sandwich: MapType }) => {
  return (
    <>
      {/* 샌드위치, 빵, 치즈, 채소, 소스 버튼 */}
      <MenuButton />

      <MenuPage>
        {sandwich.map((menu: MapType) => (
          <Link href={`/menu/sandwich/${menu.id}`} key={menu.id}>
            <a>
              {/* 메뉴 카드 */}
              <Menu img={menu.img} name={menu.name} eng={menu.eng_name} />
            </a>
          </Link>
        ))}
      </MenuPage>
    </>
  );
};

export default SandwichPage;

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      "https://bobbykjh.github.io/subway/sandwich.json"
    );
    const data = res.data;
    return { props: { sandwich: data } };
  } catch (err) {
    console.error(err);
  }
};
