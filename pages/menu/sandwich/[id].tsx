// React
import React from "react";
import axios from "axios";
// Component
import MenuProduct from "../../../components/menu/MenuProduct";
import MenuSelect from "../../../components/menu/MenuSelect";
// Style
import { ProductPage } from "../../../styles/pages/ProductPage";
// Type
import { ProductType } from "../../../utils/type";
import { GetStaticPropsContext } from "next";

const SandwichProduct = ({ sandwich }: { sandwich: ProductType }) => {
  return (
    <ProductPage>
      <MenuProduct
        name={sandwich.name}
        eng={sandwich.eng_name}
        img={sandwich.img}
        calorie={sandwich.calorie}
        summary={sandwich.summary}
      />

      <MenuSelect
        title="sandwich"
        name={sandwich.name}
        eng={sandwich.eng_name}
        img={sandwich.img}
        calorie={sandwich.calorie}
        summary={sandwich.summary}
      />
    </ProductPage>
  );
};

export default SandwichProduct;

export const getStaticPaths = async () => {
  const res = await axios.get(
    "https://bobbykjh.github.io/subway/sandwich.json"
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
      "https://bobbykjh.github.io/subway/sandwich.json"
    );
    const data = res.data[id];
    return {
      props: { sandwich: data },
    };
  } catch (err) {
    console.error(err);
  }
};
