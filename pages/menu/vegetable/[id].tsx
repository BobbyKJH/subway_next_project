// React
import React from "react";
import axios from "axios";
//Component
import MenuProduct from "../../../components/menu/MenuProduct";
// Style
import { ProductPage } from "../../../styles/pages/ProductPage.styled";
// Type
import { ProductType } from "../../../utils/type";
import { GetStaticPropsContext } from "next";

const VegetableProduct = ({ vegetable }: { vegetable: ProductType }) => {
  return (
    <ProductPage>
      <MenuProduct
        name={vegetable.name}
        eng={vegetable.eng_name}
        img={vegetable.img}
        calorie={vegetable.calorie}
      />
    </ProductPage>
  );
};

export default VegetableProduct;

export const getStaticPaths = async () => {
  const res = await axios.get(
    "https://bobbykjh.github.io/subway/vegetable.json"
  );
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = Number(context.params?.id);
  try {
    const res = await axios.get(
      "https://bobbykjh.github.io/subway/vegetable.json"
    );
    const data = res.data[id];
    return {
      props: { vegetable: data },
    };
  } catch (err) {
    console.error(err);
  }
};
