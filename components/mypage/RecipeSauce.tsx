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

        <>
          {sauce.map((menu, idx) => (
            <RecipeSauceImage src={menu} key={idx} />
          ))}
        </>
      ) : (
        // 이름

        <>
          {sauce.map((menu, idx) => (
            <RecipeSauceName key={idx}>{menu}</RecipeSauceName>
          ))}
        </>
      )}
    </RecipeSauceStyle>
  );
};

export default RecipeSauce;
