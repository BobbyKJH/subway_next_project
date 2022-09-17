// React
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
// Redux
import { useAppDispatch } from "../../../store/hooks";
import { selectCheese } from "../../../store/recipeSlice";
// Component
import MenuComination from "../../../components/combination/MenuCombination";
import MenuList from "../../../components/combination/MenuList";
// Style
import { CombinationButton } from "../../../styles/components/combination/MenuCombination.styled";
import { CombinationPage } from "../../../styles/pages/CombinationPage.styled";
// Type
import { MapType, ProductType } from "../../../utils/type";

const Cheese = ({ cheese }: { cheese: MapType }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const SandwichMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    dispatch(selectCheese(value));
    router.push("/combination/sauce");
  };

  return (
    <CombinationPage>
      {cheese.map((item: ProductType) => (
        <CombinationButton
          onClick={SandwichMenu}
          value={item.name}
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

export default Cheese;

export const getStaticProps = async () => {
  try {
    const res = await axios("https://bobbykjh.github.io/subway/cheese.json");
    const data = res.data;
    return { props: { cheese: data } };
  } catch (err) {
    console.error(err);
  }
};
