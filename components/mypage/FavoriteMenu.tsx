// React
import React from "react";
// Component
import LinkCard from "./LikeCard";

const LikeMenu = ({ title, select }: { title: string; select: string }) => {
  const menu = JSON.parse(localStorage.getItem(`${title}`) as string);

  return (
    <>
      <span>{select}</span>
      {menu ? (
        <LinkCard
          img={menu.img}
          name={menu.name}
          eng={menu.emg_name}
          summary={menu.summary}
          calorie={menu.calorie}
        />
      ) : (
        <p>좋아하는 메뉴를 선택해주세요.</p>
      )}
    </>
  );
};

export default LikeMenu;
