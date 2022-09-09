// React
import { useRouter } from "next/router";
import React from "react";
// Redux
import { useAppSelector } from "../../store/hooks";
import { selectMenu } from "../../store/recipeSlice";
// Style

const RecipeBtn = ({ arr }: { arr: string[] }) => {
  const router = useRouter();
  const select = useAppSelector(selectMenu);

  const Result = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem(
      "recipe",
      JSON.stringify({
        sandwich: select.sandwich,
        bread: select.bread,
        cheese: select.cheese,
        sauce: arr.slice(0, 3),
      })
    );
    router.push("/combination/result");
  };
  return <button onClick={Result}>완료</button>;
};

export default RecipeBtn;
