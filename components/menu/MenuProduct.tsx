// React
import React from "react";
// Style

interface MenuProductType {
  name: string;
  eng: string;
  img: string;
  calorie: number;
  summary?: string;
}

const MenuProduct = ({ name, eng, img, calorie, summary }: MenuProductType) => {
  return (
    <>
      <div>
        <span className="name">{name}</span>
        <p className="eng">{eng}</p>
      </div>

      <img src={img} alt={name} />

      <span className="summary">{summary}</span>

      <p className="calorie">{calorie} kcal</p>
    </>
  );
};

export default MenuProduct;
