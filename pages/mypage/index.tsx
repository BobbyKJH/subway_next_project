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

  return (
    <>
      <ListButton onClick={RecipeButton} arrow={recipe}>
        <p>▼ </p>
        <span> 나만의 레시피 </span>
        <p> ▼</p>
      </ListButton>

      {recipe && <MyRecipe />}

      {/* 
      <ListButton onClick={LikeButton} arrow={like}>
        <p>▼ </p>
        <span> 베스트 메뉴 </span>
        <p> ▼</p>
      </ListButton>

      {like && <FavoriteCollection />} */}
    </>
  );
};

export default MyPage;
