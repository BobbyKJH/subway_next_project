// React
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
// Redux
import { useAppDispatch } from "../../../store/hooks";
import { selectBread } from "../../../store/recipeSlice";
// Component
import MenuComination from "../../../components/combination/MenuCombination";
import MenuList from "../../../components/combination/MenuList";
// Style
// Type
import { MapType, ProductType } from "../../../utils/type";

const Bread = ({ bread }: { bread: MapType }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const BreadMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    dispatch(selectBread(value));
    router.push("/combination/cheese");
  };

  return (
    <>
      {bread.map((item: ProductType) => (
        <button onClick={BreadMenu} value={item.name} key={item.id}>
          <MenuComination
            img={item.img}
            name={item.name}
            eng={item.eng_name}
            calorie={item.calorie}
          />
        </button>
      ))}

      {/* 메뉴 선택 리스트 */}
      <MenuList />
    </>
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
