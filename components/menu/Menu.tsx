// React
import React from "react";
// Style
// Type
import { StringType } from "../../utils/type";

const Menu = ({ img, name, eng }: StringType) => {
  return (
    <>
      <img src={img} alt={name} />
      <div>
        <span>{name}</span>
        <p>{eng}</p>
      </div>
    </>
  );
};

export default Menu;
