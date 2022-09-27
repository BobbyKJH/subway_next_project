// React
import axios from "axios";
import React, { useState } from "react";
// Component
import MenuComination from "../../../components/combination/MenuCombination";
import MenuList from "../../../components/combination/MenuList";
// Style
import {
  CombinationPage,
  CombinationTitle,
} from "../../../styles/pages/CombinationPage.styled";
import { CombinationButton } from "../../../styles/components/combination/MenuCombination.styled";
// Type
import { MapType, ProductType } from "../../../utils/type";

const Sauce = ({ sauce }: { sauce: MapType }) => {
  // calroie 이름 및 수치
  const [arr, setArr] = useState<{
    name: string[];
    kcal: number[];
    img: string[];
  }>({
    name: [],
    kcal: [0],
    img: [],
  });

  const SauceMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name, id } = e.currentTarget;
    setArr({
      name: [name, ...arr.name],
      kcal: [Number(value), ...arr.kcal],
      img: [id, ...arr.img],
    });
  };

  return (
    <CombinationPage>
      <CombinationTitle>
        <span>소스</span>
        <p className="tip">소스는 최대 3개 선택 가능 합니다.</p>
      </CombinationTitle>

      {sauce.map((item: ProductType) => (
        <CombinationButton
          onClick={SauceMenu}
          name={item.name}
          value={item.calorie}
          id={item.img}
          key={item.id}
        >
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
      <MenuList
        sauce={arr.name.slice(0, 3)}
        sauceKcal={arr.kcal}
        sauceImage={arr.img.slice(0, 3)}
      />
      {/* 메뉴 리스트 완성 버튼 */}
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
