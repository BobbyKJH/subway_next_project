// React
import React from "react";
// Style
import { MenuCardStyle } from "../../styles/menu/MenuStyle";
// Type
import { StringType } from "../../utils/type";

const Menu = ({ img, name, eng }: StringType) => {
  return (
    <MenuCardStyle>
      <img src={img} alt={name} />
      <div>
        <span>{name}</span>
        <p>{eng}</p>
      </div>
    </MenuCardStyle>
  );
};

export default Menu;
