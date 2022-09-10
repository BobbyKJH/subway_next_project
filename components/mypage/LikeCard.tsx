// React
import React from "react";
// Style
// Type
import { MenuType } from "../../utils/type";

const LikeCard = ({ img, name, eng, summary, calorie }: MenuType) => {
  return (
    <>
      <img src={img} alt={name} />

      <span>{name}</span>

      <p>{eng}</p>

      <p>{summary}</p>

      <p>{calorie}</p>
    </>
  );
};

export default LikeCard;
