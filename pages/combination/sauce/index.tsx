// React
import axios from "axios";
import React, { useState } from "react";
// Component
import RecipeBtn from "../../../components/combination/RecipeBtn";
import MenuComination from "../../../components/combination/MenuCombination";

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

      <>
        {sauce.map((item: ProductType) => (
          <button onClick={SauceMenu} value={item.name} key={item.id}>
            <MenuComination
              img={item.img}
              name={item.name}
              eng={item.eng_name}
              calorie={item.calorie}
            />
          </button>
        ))}
      </>
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
