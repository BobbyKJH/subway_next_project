// React
import { useRouter } from "next/router";
import React from "react";
// Redux
import { useAppSelector } from "../../store/hooks";
import { selectMenu } from "../../store/recipeSlice";
// Style
import { RecipeButton } from "../../styles/components/combination/RecipeBtn.styled";

const RecipeBtn = ({ arr }: { arr: string[] | any }) => {
  const router = useRouter();
  const select = useAppSelector(selectMenu);

  const Result = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem(
      "recipe",
      JSON.stringify({
        name: select.name,
        eng: select.eng,
        sandwich: select.sandwich,
        bread: select.bread,
        cheese: select.cheese,
        sauce: arr.slice(0, 3),
      })
    );
    router.push("/combination/result");
  };
  return (
    <RecipeButton onClick={Result}>
      <strong>완성</strong>
    </RecipeButton>
  );
};

export default RecipeBtn;
