// React
import React from "react";
// Component
import FavoriteMenu from "./FavoriteMenu";
// Style
import { FavoriteCollectionStyle } from "../../styles/components/mypage/FavoriteCollection.styled";

const FavoriteCollection = () => {
  return (
    <FavoriteCollectionStyle>
      <FavoriteMenu title="sandwich" select="샌드위치" />

      <FavoriteMenu title="bread" select="빵" />

      <FavoriteMenu title="cheese" select="치즈" />

      <FavoriteMenu title="sauce" select="소스" />
    </FavoriteCollectionStyle>
  );
};

export default FavoriteCollection;
