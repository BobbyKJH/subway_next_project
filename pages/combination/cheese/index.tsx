// React
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
// Redux
import { useAppDispatch } from "../../../store/hooks";
import { selectCheese } from "../../../store/recipeSlice";
// Component
import MenuComination from "../../../components/combination/MenuCombination";
// Style
import {
  CombinationCard,
  CombinationPage,
} from "../../../styles/combination/CombinationStyle";
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
        <CombinationCard onClick={SandwichMenu} value={item.name} key={item.id}>
          <MenuComination
            img={item.img}
            name={item.name}
            eng={item.eng_name}
            calorie={item.calorie}
          />
        </CombinationCard>
      ))}
    </CombinationPage>
  );
};

export default Cheese;

export const getStaticProps = async () => {
  try {
    const res = await axios("http://localhost:3000/api/menu/cheese");
    const data = res.data;
    return { props: { cheese: data } };
  } catch (err) {
    console.error(err);
  }
};
