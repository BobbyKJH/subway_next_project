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

const Sandwich = ({ sandwich }: { sandwich: MapType }) => {
  return (
    <>
      <MenuButton />

      <>
        {sandwich.map((menu: MapType) => (
          <Link href={`/menu/sandwich/${menu.id}`} key={menu.id}>
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
    const res = await axios.get("http://localhost:3000/api/menu/sandwich");
    const data = res.data;
    return { props: { sandwich: data } };
  } catch (err) {
    console.error(err);
  }
};
