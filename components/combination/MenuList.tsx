// React
import React from "react";
// Redux
import { useAppSelector } from "../../store/hooks";
import { selectMenu } from "../../store/recipeSlice";

const MenuList = ({ sauce }: { sauce?: string[] }) => {
  const select = useAppSelector(selectMenu);

  return (
    <div>
      <span>{select.name}</span>
      <img src={select.sandwich} alt={select.name} />
      <p>{select.bread}</p>
      <p>{select.cheese}</p>
      <p>{sauce}</p>
    </div>
  );
};

export default MenuList;
