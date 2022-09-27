// React
import { useRouter } from "next/router";
import React from "react";
// Redux
import { useAppSelector } from "../../store/hooks";
import { selectMenu } from "../../store/recipeSlice";
// Style
import { RecipeButton } from "../../styles/components/combination/RecipeBtn.styled";

const RecipeBtn = ({
  sauce,
  sauceKcal,
  sauceImage,
}: {
  sauce?: string[];
  sauceKcal?: number[];
  sauceImage?: string[];
}) => {
  const router = useRouter();
  const select = useAppSelector(selectMenu);

  // 소스 Kcal 합산
  const sum = sauceKcal
    ? sauceKcal.slice(0, 3).reduce((a: number, b: number) => a + b)
    : null;

  // 총 Kcal 합산
  const Kcal = sum
    ? sum +
      Number(select.sandwichCalorie) +
      Number(select.breadCalorie) +
      Number(select.cheeseCalorie)
    : null;

  // 완성 storage 저장
  const Result = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem(
      "recipe",
      JSON.stringify({
        name: select.name,
        sandwich: select.sandwich,
        kcal: Kcal,
        bread: select.bread,
        breadImg: select.breadImg,
        cheese: select.cheese,
        cheeseImg: select.cheeseImg,
        sauce: sauce,
        sauceImg: sauceImage,
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
