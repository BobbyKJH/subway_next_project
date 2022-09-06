// React
import React from "react";
import axios from "axios";
//Component
import MenuProduct from "../../../components/menu/MenuProduct";
import MenuSelect from "../../../components/menu/MenuSelect";
import MenuReveiw from "../../../components/menu/MenuReview";
// Style
import { ProductPageStyle } from "../../../styles/menu/ProductStyle";
// Type
import { ProductType } from "../../../utils/type";

const SauceProduct = ({ sauce }: { sauce: ProductType }) => {
  return (
    <ProductPageStyle>
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

      <MenuReveiw storage={sauce.name} />
    </ProductPageStyle>
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
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
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
