// React
import axios from "axios";
import React, { useState } from "react";
// Component
import RecipeBtn from "../../../components/combination/RecipeBtn";
import MenuComination from "../../../components/combination/MenuCombination";
import MenuList from "../../../components/combination/MenuList";
// Style
import { CombinationPage } from "../../../styles/pages/CombinationPage.styled";
import { CombinationButton } from "../../../styles/components/combination/MenuCombination.styled";
// Type
import { MapType, ProductType } from "../../../utils/type";

const Sauce = ({ sauce }: { sauce: MapType }) => {
  const [arr, setArr] = useState<never[] | string[]>([]);

  const SauceMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setArr([value, ...arr]);
  };

  return (
    <CombinationPage>
      {sauce.map((item: ProductType) => (
        <CombinationButton onClick={SauceMenu} value={item.name} key={item.id}>
          {/* 카드 */}
          <MenuComination
            img={item.img}
            name={item.name}
            eng={item.eng_name}
            calorie={item.calorie}
          />
        </CombinationButton>
      ))}

      {/* 메뉴 선택 리스트 */}
      <MenuList sauce={arr.slice(0, 3)} />
      {/* 메뉴 리스트 완성 버튼 */}
      <RecipeBtn arr={arr} />
    </CombinationPage>
  );
};

export default Sauce;

export const getStaticProps = async () => {
  try {
    const res = await axios.get("https://bobbykjh.github.io/subway/sauce.json");
    const data = res.data;
    return { props: { sauce: data } };
  } catch (err) {
    console.error(err);
  }
};
