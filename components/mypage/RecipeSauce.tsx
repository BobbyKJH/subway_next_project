// React
import React from "react";
import {
  RecipeSauceImage,
  RecipeSauceName,
  RecipeSauceStyle,
} from "../../styles/components/mypage/RecipeSauce.styled";
// Style

const RecipeSauce = ({ title, sauce }: { title?: string; sauce: string[] }) => {
  // 이미지 || 이름 판단
  const SauceKind = sauce.find((menu) => menu.includes("https"));

  return (
    <RecipeSauceStyle>
      {sauce.length ? <span>{title}</span> : null}

      {SauceKind ? (
        // 이미지

        <RecipeSauceImage>
          {sauce.map((menu, idx) => (
            <img src={menu} key={idx} />
          ))}
        </RecipeSauceImage>
      ) : (
        // 이름

        <RecipeSauceName>
          {sauce.map((menu, idx) => (
            <p key={idx}>{menu}</p>
          ))}
        </RecipeSauceName>
      )}
    </RecipeSauceStyle>
  );
};

export default RecipeSauce;
