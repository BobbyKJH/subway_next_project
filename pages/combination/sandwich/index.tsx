// React
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
// Redux
import { useAppDispatch } from "../../../store/hooks";
import { selectSandwich } from "../../../store/recipeSlice";
// Component
import MenuComination from "../../../components/combination/MenuCombination";
// Style
// Type
import { MapType, ProductType } from "../../../utils/type";

const Sandwich = ({ sandwich }: { sandwich: MapType }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const SandwichMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    dispatch(selectSandwich(value));
    router.push("/combination/bread");
  };

  return (
    <>
      {sandwich.map((item: ProductType) => (
        <button onClick={SandwichMenu} value={item.img} key={item.id}>
          <MenuComination
            img={item.img}
            name={item.name}
            eng={item.eng_name}
            calorie={item.calorie}
          />
        </button>
      ))}
    </>
  );
};

export default Sandwich;

export const getStaticProps = async () => {
  try {
    const res = await axios("http://localhost:3000/api/menu/sandwich");
    const data = res.data;
    return { props: { sandwich: data } };
  } catch (err) {
    console.error(err);
  }
};
