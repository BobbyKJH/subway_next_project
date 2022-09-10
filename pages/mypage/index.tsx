// React
import React from "react";
// Component
import LinkMenu from "../../components/mypage/LikeMenu";
import MyRecipe from "../../components/mypage/MyRecipe";

const MyPage = () => {
  return (
    <>
      <MyRecipe />

      <LinkMenu title="sandwich" select="샌드위치" />

      <LinkMenu title="bread" select="빵" />

      <LinkMenu title="cheese" select="치즈" />

      <LinkMenu title="sauce" select="소스" />
    </>
  );
};

export default MyPage;
