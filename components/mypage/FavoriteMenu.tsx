// React
import React from "react";
import { FavoriteMenuStyle } from "../../styles/components/mypage/FavoriteMenu.styled";
// Component
import FavoriteCard from "./FavoriteCard";

const FavoriteMenu = ({ title, select }: { title: string; select: string }) => {
  const menu = JSON.parse(localStorage.getItem(`${title}`) as string);

  return (
    <FavoriteMenuStyle>
      <span className="menu">{select}</span>
      {menu ? (
        <FavoriteCard
          img={menu.img}
          name={menu.name}
          summary={menu.summary}
          calorie={menu.calorie}
        />
      ) : (
        <p>좋아하는 메뉴를 선택해주세요.</p>
      )}
    </FavoriteMenuStyle>
  );
};

export default FavoriteMenu;
