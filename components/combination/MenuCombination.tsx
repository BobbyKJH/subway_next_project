// React
import React from "react";
// Type
import { MenuType } from "../../utils/type";

const MenuComination = ({ img, name, eng, calorie }: MenuType) => {
  return (
    <>
      <img src={img} alt={name} />
      <div>
        <span className="name">{name}</span>
        <p className="eng">{eng}</p>
      </div>
      <p className="calorie">{calorie} kcal</p>
    </>
  );
};

export default MenuComination;
