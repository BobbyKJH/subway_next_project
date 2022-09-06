// React
import React from "react";
import axios from "axios";
// Component
import MenuProduct from "../../../components/menu/MenuProduct";
import MenuSelect from "../../../components/menu/MenuSelect";
import MenuReveiw from "../../../components/menu/MenuReview";
// Style
import { ProductPageStyle } from "../../../styles/menu/ProductStyle";
// Type
import { ProductType } from "../../../utils/type";

const BreadProduct = ({ bread }: { bread: ProductType }) => {
  return (
    <ProductPageStyle>
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

      <MenuReveiw storage={bread.name} />
    </ProductPageStyle>
  );
};

export default BreadProduct;

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:3000/api/menu/bread");
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
    const res = await axios.get("http://localhost:3000/api/menu/bread");
    const data = res.data[id];
    return {
      props: { bread: data },
    };
  } catch (err) {
    console.error(err);
  }
};
