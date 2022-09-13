// React
import React from "react";
import axios from "axios";
//Component
import MenuProduct from "../../../components/menu/MenuProduct";
import MenuSelect from "../../../components/menu/MenuSelect";
// Style
// Type
import { ProductType } from "../../../utils/type";
import { GetStaticPropsContext } from "next";

const SauceProduct = ({ sauce }: { sauce: ProductType }) => {
  return (
    <>
      <MenuProduct
        name={sauce.name}
        eng={sauce.eng_name}
        img={sauce.img}
        calorie={sauce.calorie}
        summary={sauce.summary}
      />

      <MenuSelect
        title="sauce"
        name={sauce.name}
        eng={sauce.eng_name}
        img={sauce.img}
        calorie={sauce.calorie}
        summary={sauce.summary}
      />
    </>
  );
};

export default SauceProduct;

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:3000/api/menu/sauce");
  const data = res.data;
  return {
    paths: data.map((menu: { id: number }) => ({
      params: {
        id: menu.id.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = Number(params?.id);
  try {
    const res = await axios.get("http://localhost:3000/api/menu/sauce");
    const data = res.data[id];
    return {
      props: { sauce: data },
    };
  } catch (err) {
    console.error(err);
  }
};
