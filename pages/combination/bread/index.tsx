// React
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
// Redux
import { useAppDispatch } from "../../../store/hooks";
import { selectBread } from "../../../store/recipeSlice";
// Component
import MenuComination from "../../../components/combination/MenuCombination";
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
    </>
  );
};

export default Bread;

export const getStaticProps = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/menu/bread");
    const data = res.data;
    return { props: { bread: data } };
  } catch (err) {
    console.error(err);
  }
};
