// React
import axios from "axios";
import React, { useState } from "react";
// Component
import MenuComination from "../../../components/combination/MenuCombination";
import RecipeBtn from "../../../components/combination/RecipeBtn";
import {
  CombinationCard,
  CombinationPage,
} from "../../../styles/combination/CombinationStyle";
// Style
// Type
import { MapType, ProductType } from "../../../utils/type";

const Sauce = ({ sauce }: { sauce: MapType }) => {
  const [arr, setArr] = useState<never[] | string[]>([]);

  const SauceMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setArr([value, ...arr]);
  };

  return (
    <>
      <RecipeBtn arr={arr} />

      <CombinationPage>
        {sauce.map((item: ProductType) => (
          <CombinationCard onClick={SauceMenu} value={item.name} key={item.id}>
            <MenuComination
              img={item.img}
              name={item.name}
              eng={item.eng_name}
              calorie={item.calorie}
            />
          </CombinationCard>
        ))}
      </CombinationPage>
    </>
  );
};

export default Sauce;

export const getStaticProps = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/menu/sauce");
    const data = res.data;
    return { props: { sauce: data } };
  } catch (err) {
    console.error(err);
  }
};
