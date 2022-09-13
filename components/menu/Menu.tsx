// React
import React from "react";
// Style
import {
  MenuBox,
  MenuImg,
  MenuName,
} from "../../styles/components/menu/Menu.styled";

// Type
import { StringType } from "../../utils/type";

const Menu = ({ img, name, eng }: StringType) => {
  return (
    <MenuBox>
      <MenuImg src={img} alt={name} />

      <MenuName>
        <span className="name">{name}</span>
        <p className="eng">{eng}</p>
      </MenuName>
    </MenuBox>
  );
};

export default Menu;
