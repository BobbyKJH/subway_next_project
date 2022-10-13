// React
import React, { useState } from "react";
// Component
import FavoriteCollection from "../../components/mypage/FavoriteCollection";
import MyRecipe from "../../components/mypage/MyRecipe";
// Style
import { MyPageBox, OpenButton } from "../../styles/pages/MyPage.styled";
// Image
import { AiOutlineArrowUp } from "react-icons/ai";

const MyPage = () => {
  const [recipe, setRecipe] = useState(true);
  const [favorite, setFavorite] = useState(true);

  const recipeBtn = (e: React.MouseEvent<HTMLButtonElement>) =>
    setRecipe(!recipe);

  const favoriteBtn = (e: React.MouseEvent<HTMLButtonElement>) =>
    setFavorite(!favorite);

  return (
    <>
      <OpenButton onClick={recipeBtn} fc={recipe}>
        <div>
          <AiOutlineArrowUp />
        </div>
        <p> 나만의 레시피 </p>
        <div>
          <AiOutlineArrowUp />
        </div>
      </OpenButton>

      <MyPageBox open={recipe}>
        <MyRecipe />
      </MyPageBox>

      <OpenButton onClick={favoriteBtn} fc={favorite}>
        <div>
          <AiOutlineArrowUp />
        </div>
        <p> 좋아하는 메뉴 </p>
        <div>
          <AiOutlineArrowUp />
        </div>
      </OpenButton>

      <MyPageBox open={favorite}>
        <FavoriteCollection />
      </MyPageBox>
    </>
  );
};

export default MyPage;
