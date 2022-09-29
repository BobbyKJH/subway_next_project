// React
import React from "react";
// Style
import {
  FavoriteCardCalorie,
  FavoriteCardSummary,
  FavoriteCardTitle,
  FavoriteMenuImg,
} from "../../styles/components/mypage/FavoriteCard.styled";
// Type
import { MenuType } from "../../utils/type";

const FavoriteCard = ({ img, name, summary, calorie }: MenuType) => {
  return (
    <>
      <FavoriteMenuImg src={img} alt={name} />

      <FavoriteCardTitle>{name}</FavoriteCardTitle>

      {summary ? (
        <FavoriteCardSummary>{summary}</FavoriteCardSummary>
      ) : (
        <FavoriteCardSummary />
      )}

      <FavoriteCardCalorie>{calorie} Kcal</FavoriteCardCalorie>
    </>
  );
};

export default FavoriteCard;
