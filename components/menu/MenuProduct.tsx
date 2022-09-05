// React
import React from "react";
// Style
import { MenuProductStyle } from "../../styles/menu/MenuStyle";

interface MenuProductType {
  name: string;
  eng: string;
  img: string;
  calorie: number;
  summary: string;
}

const MenuProduct = ({ name, eng, img, calorie, summary }: MenuProductType) => {
  return (
    <MenuProductStyle>
      <div>
        <span className="name">{name}</span>
        <p className="eng">{eng}</p>
      </div>

      <img src={img} alt={name} />

      <p className="calorie">{calorie}</p>

      <span className="summary">{summary}</span>
    </MenuProductStyle>
  );
};

export default MenuProduct;
