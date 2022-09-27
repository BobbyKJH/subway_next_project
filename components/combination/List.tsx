// React
import React from "react";
// Tyoe
import { StringType } from "../../utils/type";

const List = ({ name, image, menu }: StringType) => (
  <>
    {menu && (
      <>
        <span>{name}</span>

        {image && <img src={image} alt={name} />}

        <p>{menu}</p>
      </>
    )}
  </>
);

export default List;
