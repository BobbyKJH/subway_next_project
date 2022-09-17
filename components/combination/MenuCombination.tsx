// React
import React from "react";
// Style
import {
  CombinationContent,
  CombinationImg,
} from "../../styles/components/combination/MenuCombination.styled";
// Type
import { MenuType } from "../../utils/type";

const MenuComination = ({ img, name, eng, calorie }: MenuType) => {
  return (
    <>
      <CombinationImg src={img} alt={name} />
      <CombinationContent>
        <span className="name">{name}</span>

        <p className="eng">{eng}</p>

        <p className="calorie">{calorie} kcal</p>
      </CombinationContent>
    </>
  );
};

export default MenuComination;
