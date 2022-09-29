// React
import React from "react";
import Link from "next/link";
// Component
import RecipeList from "./RecipeList";
// Style
import {
  MakeStyle,
  MyRecipeKcal,
  MyRecipeName,
  MyRecipeSandwich,
  MyRecipeSauce,
  MyRecipeStyle,
} from "../../styles/components/mypage/MyRecipe.styled";
// Utils
import { AddCommas } from "../../utils/utils";

const MyRecipe = () => {
  const menu = JSON.parse(localStorage.getItem("recipe") as string);

  return (
    <>
      {menu ? (
        <MyRecipeStyle>
          {/* 샌드위치 이미지 */}
          <MyRecipeSandwich src={menu.sandwich} alt={menu.sandwich} />

          <MyRecipeName>{menu.name}</MyRecipeName>

          {/* 빵 이름 및 이미지 */}
          <RecipeList title="빵" img={menu.breadImg} name={menu.bread} />

          {/* 치즈 이름 및 이미지 */}
          <RecipeList title="치즈" img={menu.cheeseImg} name={menu.cheese} />

          {/* 소스 선택 종류 Style 예정 */}
          <MyRecipeSauce>
            <span>소스</span>
            {menu.sauceImg.map((item: string, idx: number) => (
              <img src={item} key={idx} />
            ))}

            {menu.sauce.map((item: string, idx: number) => (
              <p key={idx}>{item}</p>
            ))}
          </MyRecipeSauce>

          {/* Kcal */}
          <MyRecipeKcal>{AddCommas(menu.kcal)} Kcal</MyRecipeKcal>
        </MyRecipeStyle>
      ) : (
        <MakeStyle>
          <p>레서피를 만들어 보세요.</p>
          <Link href={"/combination/sandwich"}>만들기</Link>
        </MakeStyle>
      )}
    </>
  );
};

export default MyRecipe;
