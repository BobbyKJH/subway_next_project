// React
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
// Redux
import { useAppDispatch } from "../../../store/hooks";
import { breadImage, breadKcal, selectBread } from "../../../store/recipeSlice";
// Component
import MenuComination from "../../../components/combination/MenuCombination";
import MenuList from "../../../components/combination/MenuList";
import PreviousBtn from "../../../components/combination/PreviousBtn";
// Style
import { CombinationButton } from "../../../styles/components/combination/MenuCombination.styled";
import {
  CombinationPage,
  CombinationTitle,
} from "../../../styles/pages/CombinationPage.styled";
// Type
import { MapType, ProductType } from "../../../utils/type";

const Bread = ({ bread }: { bread: MapType }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const BreadMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name, id } = e.currentTarget;
    dispatch(selectBread(name));
    dispatch(breadKcal(value));
    dispatch(breadImage(id));
    router.push("/combination/cheese");
  };

  return (
    <CombinationPage>
      <CombinationTitle>
        <span>빵</span>
      </CombinationTitle>

      <PreviousBtn link="sandwich" />

      {bread.map((item: ProductType) => (
        <CombinationButton
          onClick={BreadMenu}
          name={item.name}
          id={item.img}
          value={item.calorie}
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

export default Bread;

export const getStaticProps = async () => {
  try {
    const res = await axios.get("https://bobbykjh.github.io/subway/bread.json");
    const data = res.data;
    return { props: { bread: data } };
  } catch (err) {
    console.error(err);
  }
};
