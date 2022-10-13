// React
import React from "react";
import Link from "next/link";
// Component
import RecipeList from "./RecipeList";
import RecipeSauce from "./RecipeSauce";
// Style
import {
  MakeStyle,
  MyRecipeKcal,
  MyRecipeSandwich,
  MyRecipeSandwichName,
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
          <MyRecipeSandwich src={menu.sandwich} alt={menu.sandwich} />

          <MyRecipeSandwichName>{menu.name}</MyRecipeSandwichName>

          <MyRecipeSandwichName>
            <p className="eng">{menu.eng}</p>
          </MyRecipeSandwichName>

          {/* 선택 Bread List */}
          <RecipeList title="빵" img={menu.breadImg} name={menu.bread} />

          {/* 선택 Cheese List */}
          <RecipeList title="치즈" img={menu.cheeseImg} name={menu.cheese} />

          <MyRecipeSauce>
            <span>소스</span>
            <RecipeSauce sauce={menu.sauceImg} />

            <RecipeSauce sauce={menu.sauce} />
          </MyRecipeSauce>

          <MyRecipeKcal>{AddCommas(menu.kcal)} Kcal</MyRecipeKcal>
        </MyRecipeStyle>
      ) : (
        <MakeStyle>
          <p>레서피를 만들어 보세요.</p>
          <Link href={"/combination/sandwich"}>
            <span>만들기</span>
          </Link>
        </MakeStyle>
      )}
    </>
  );
};

export default MyRecipe;
