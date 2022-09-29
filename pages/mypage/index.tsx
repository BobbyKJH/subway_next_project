// React
import React, { useState } from "react";
// Component
import FavoriteCollection from "../../components/mypage/FavoriteCollection";
import MyRecipe from "../../components/mypage/MyRecipe";
// Style
import { ListButton } from "../../styles/pages/MyPage.styled";

const MyPage = () => {
  const [recipe, setRecipe] = useState(true);
  const [like, setLike] = useState(false);

  const RecipeButton = () => {
    setRecipe(!recipe);
  };

  const LikeButton = () => {
    setLike(!like);
  };

  return <>11</>;
};

export default MyPage;
