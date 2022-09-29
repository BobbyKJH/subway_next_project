// React
import React from "react";
// Style
import {
  RecipeListImage,
  RecipeListName,
  RecipeListStyle,
  RecipeListTitle,
} from "../../styles/components/mypage/RecipeList.styled";
// Type
import { StringType } from "../../utils/type";

const RecipeList = ({ title, img, name }: StringType) => {
  return (
    <RecipeListStyle>
      <RecipeListTitle>{title}</RecipeListTitle>

      <RecipeListImage src={img} alt={img} />

      <RecipeListName>{name}</RecipeListName>
    </RecipeListStyle>
  );
};

export default RecipeList;
