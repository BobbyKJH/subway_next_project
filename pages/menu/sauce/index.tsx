// React
import axios from "axios";
import Link from "next/link";
import React from "react";
// Component
import Menu from "../../../components/menu/Menu";
import MenuButton from "../../../components/menu/MenuButton";
// Style
// Type
import { MapType } from "../../../utils/type";

const Sandwich = ({ sauce }: { sauce: MapType }) => {
  return (
    <>
      <MenuButton />

      <>
        {sauce.map((menu: MapType) => (
          <Link href={`/menu/sauce/${menu.id}`} key={menu.id}>
            <a>
              <Menu img={menu.img} name={menu.name} eng={menu.eng_name} />
            </a>
          </Link>
        ))}
      </>
    </>
  );
};

export default Sandwich;

export const getStaticProps = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/menu/sauce");
    const data = res.data;
    return { props: { sauce: data } };
  } catch (err) {
    console.error(err);
  }
};
