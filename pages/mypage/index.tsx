// React
import React, { useState } from "react";
// Component
import FavoriteCollection from "../../components/mypage/FavoriteCollection";
import MyRecipe from "../../components/mypage/MyRecipe";

const MyPage = () => {
  return (
    <div>
      <MyRecipe />
      <FavoriteCollection />
    </div>
  );
};

export default MyPage;
