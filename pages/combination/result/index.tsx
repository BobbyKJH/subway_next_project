// React
import React from "react";
// Component
import Result from "../../../components/combination/Result";

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("recipe") as string);

  return (
    <Result
      name={result.name}
      sandwich={result.sandwich}
      bread={result.bread}
      cheese={result.cheese}
      sauce={result.sauce}
      kcal={result.kcal}
    />
  );
};

export default ResultPage;
