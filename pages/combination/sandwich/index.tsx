// React
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
// Redux
import { useAppDispatch } from "../../../store/hooks";
import { selectName, selectSandwich } from "../../../store/recipeSlice";
// Component
import MenuComination from "../../../components/combination/MenuCombination";
import MenuList from "../../../components/combination/MenuList";
// Style
import { CombinationPage } from "../../../styles/pages/CombinationPage.styled";
import { CombinationButton } from "../../../styles/components/combination/MenuCombination.styled";
// Type
import { MapType, ProductType } from "../../../utils/type";

const Sandwich = ({ sandwich }: { sandwich: MapType }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // 샌드위치 이름 및 이미지 선택
  const SandwichMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name } = e.currentTarget;
    dispatch(selectName(name));
    dispatch(selectSandwich(value));
    router.push("/combination/bread");
  };

  return (
    <CombinationPage>
      {sandwich.map((item: ProductType) => (
        <CombinationButton
          onClick={SandwichMenu}
          value={item.img}
          name={item.name}
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
      <MenuList />
    </CombinationPage>
  );
};

export default Sandwich;

export const getStaticProps = async () => {
  try {
    const res = await axios("https://bobbykjh.github.io/subway/sandwich.json");
    const data = res.data;
    return { props: { sandwich: data } };
  } catch (err) {
    console.error(err);
  }
};
