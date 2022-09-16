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

const CheeseProduct = ({ cheese }: { cheese: ProductType }) => {
  return (
    <ProductPage>
      <MenuProduct
        name={cheese.name}
        eng={cheese.eng_name}
        img={cheese.img}
        calorie={cheese.calorie}
        summary={cheese.summary}
      />

      <MenuSelect
        title="cheese"
        name={cheese.name}
        eng={cheese.eng_name}
        img={cheese.img}
        calorie={cheese.calorie}
        summary={cheese.summary}
      />
    </ProductPage>
  );
};

export default CheeseProduct;

export const getStaticPaths = async () => {
  const res = await axios.get("https://bobbykjh.github.io/subway/cheese.json");
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
      "https://bobbykjh.github.io/subway/cheese.json"
    );
    const data = res.data[id];
    return {
      props: { cheese: data },
    };
  } catch (err) {
    console.error(err);
  }
};
