// React
import React from "react";
import axios from "axios";
//Component
import MenuProduct from "../../../components/menu/MenuProduct";
import MenuLike from "../../../components/menu/MenuLike";
// Style
import { ProductPage } from "../../../styles/pages/ProductPage.styled";
// Type
import { ProductType } from "../../../utils/type";
import { GetStaticPropsContext } from "next";

const SauceProduct = ({ sauce }: { sauce: ProductType }) => {
  return (
    <ProductPage>
      <MenuProduct
        name={sauce.name}
        eng={sauce.eng_name}
        img={sauce.img}
        calorie={sauce.calorie}
        summary={sauce.summary}
      />

      <MenuLike
        title="sauce"
        name={sauce.name}
        eng={sauce.eng_name}
        img={sauce.img}
        calorie={sauce.calorie}
        summary={sauce.summary}
      />
    </ProductPage>
  );
};

export default SauceProduct;

export const getStaticPaths = async () => {
  const res = await axios.get("https://bobbykjh.github.io/subway/sauce.json");
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
    const res = await axios.get("https://bobbykjh.github.io/subway/sauce.json");
    const data = res.data[id];
    return {
      props: { sauce: data },
    };
  } catch (err) {
    console.error(err);
  }
};
