// React
import React from "react";
import axios from "axios";
//Component
import MenuProduct from "../../../components/menu/MenuProduct";
// Style
// Type
import { ProductType } from "../../../utils/type";
import { GetStaticPropsContext } from "next";

const VegetableProduct = ({ vegetable }: { vegetable: ProductType }) => {
  return (
    <MenuProduct
      name={vegetable.name}
      eng={vegetable.eng_name}
      img={vegetable.img}
      calorie={vegetable.calorie}
    />
  );
};

export default VegetableProduct;

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:3000/api/menu/vegetable");
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
    const res = await axios.get("http://localhost:3000/api/menu/vegetable");
    const data = res.data[id];
    return {
      props: { vegetable: data },
    };
  } catch (err) {
    console.error(err);
  }
};
