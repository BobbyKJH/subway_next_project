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

const CheeseProduct = ({ cheese }: { cheese: ProductType }) => {
  return (
    <ProductPageStyle>
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

      <MenuReveiw storage={cheese.name} />
    </ProductPageStyle>
  );
};

export default CheeseProduct;

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:3000/api/menu/cheese");
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
    const res = await axios.get("http://localhost:3000/api/menu/cheese");
    const data = res.data[id];
    return {
      props: { cheese: data },
    };
  } catch (err) {
    console.error(err);
  }
};
