import React from "react";
import Link from "next/link";
// Component
import RecipeList from "./RecipeList";
// Style
import {
  MakeStyle,
  MyRecipeSandwich,
  MyRecipeStyle,
} from "../../styles/components/mypage/MyRecipe.styled";

const MyRecipe = () => {
  const menu = JSON.parse(localStorage.getItem("recipe") as string);

  return (
    <>
      {menu ? (
        <MyRecipeStyle>
          <MyRecipeSandwich src={menu.sandwich} alt={menu.sandwich} />

          <RecipeList title="빵" img={menu.breadImg} name={menu.bread} />
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
