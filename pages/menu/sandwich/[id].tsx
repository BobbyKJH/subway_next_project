// React
import React from "react";
import axios from "axios";
// Component
import MenuProduct from "../../../components/menu/MenuProduct";
import MenuSelect from "../../../components/menu/MenuSelect";
// Style
// Type
import { ProductType } from "../../../utils/type";

const SandwichProduct = ({ sandwich }: { sandwich: ProductType }) => {
  return (
    <>
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
    </>
  );
};

export default SandwichProduct;

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:3000/api/menu/sandwich");
  const data = res.data;
  return {
    paths: data.map((menu: { id: number }) => ({
      params: {
        id: menu.id.toString(),
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  try {
    const res = await axios.get("http://localhost:3000/api/menu/sandwich");
    const data = res.data[id];
    return {
      props: { sandwich: data },
    };
  } catch (err) {
    console.error(err);
  }
};
