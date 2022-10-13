// React
import React from "react";
import {
  RecipeSauceImage,
  RecipeSauceName,
  RecipeSauceStyle,
} from "../../styles/components/mypage/RecipeSauce.styled";
// Style

const RecipeSauce = ({ sauce }: { sauce: string[] }) => {
  // 이미지 || 이름 판단
  const SauceKind = sauce.find((menu) => menu.includes("https"));

  return (
    <>
      {SauceKind ? (
        // 이미지

        <div>
          {sauce.map((menu) => (
            <img src={menu} key={menu} />
          ))}
        </div>
      ) : (
        // 이름

        <div>
          {sauce.map((menu) => (
            <p key={menu}>{menu}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default RecipeSauce;
