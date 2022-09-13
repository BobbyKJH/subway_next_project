// React
import axios from "axios";
import Link from "next/link";
import React from "react";
// Component
import Menu from "../../../components/menu/Menu";
import MenuButton from "../../../components/menu/MenuButton";
// Style
import { MenuCard, MenuPage } from "../../../styles/pages/MenuPage.styled";
// Type
import { MapType } from "../../../utils/type";

const CheesePage = ({ cheese }: { cheese: MapType }) => {
  return (
    <MenuPage>
      {/* 샌드위치, 빵, 치즈, 채소, 소스 버튼 */}
      <MenuButton />

      <MenuCard>
        {cheese.map((menu: MapType) => (
          <Link href={`/menu/cheese/${menu.id}`} key={menu.id}>
            <a>
              <Menu img={menu.img} name={menu.name} eng={menu.eng_name} />
            </a>
          </Link>
        ))}
      </MenuCard>
    </MenuPage>
  );
};

export default CheesePage;

export const getStaticProps = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/menu/cheese");
    const data = res.data;
    return { props: { cheese: data } };
  } catch (err) {
    console.error(err);
  }
};
