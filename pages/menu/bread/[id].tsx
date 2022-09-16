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

const BreadProduct = ({ bread }: { bread: ProductType }) => {
  return (
    <ProductPage>
      <MenuProduct
        name={bread.name}
        eng={bread.eng_name}
        img={bread.img}
        calorie={bread.calorie}
        summary={bread.summary}
      />

      <MenuSelect
        title="bread"
        name={bread.name}
        eng={bread.eng_name}
        img={bread.img}
        calorie={bread.calorie}
        summary={bread.summary}
      />
    </ProductPage>
  );
};

export default BreadProduct;

export const getStaticPaths = async () => {
  const res = await axios.get("https://bobbykjh.github.io/subway/bread.json");
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
    const res = await axios.get("https://bobbykjh.github.io/subway/bread.json");
    const data = res.data[id];
    return {
      props: { bread: data },
    };
  } catch (err) {
    console.error(err);
  }
};
