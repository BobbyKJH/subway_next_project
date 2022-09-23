// React
import React from "react";
// Tyoe
import { StringType } from "../../utils/type";

const List = ({ name, menu }: StringType) => (
  <>
    {menu && (
      <>
        <span>{name}</span>

        <div className="arrow" />

        <p>{menu}</p>
      </>
    )}
  </>
);

export default List;
