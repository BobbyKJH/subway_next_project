// React
import React from "react";
// Component
import Result from "../../../components/combination/Result";

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("recipe") as string);

  return (
    <Result
      name={result.name}
      eng={result.eng}
      sandwich={result.sandwich}
      bread={result.bread}
      breadImage={result.breadImg}
      cheese={result.cheese}
      cheeseImage={result.cheeseImg}
      sauce={result.sauce}
      sauceImage={result.sauceImg}
      kcal={result.kcal}
    />
  );
};

export default ResultPage;
