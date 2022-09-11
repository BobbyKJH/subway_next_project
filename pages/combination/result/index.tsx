// React
import React from "react";
// Component
import Result from "../../../components/combination/Result";

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("recipe") as string);

  return (
    <Result
      sandwich={result.sandwich}
      bread={result.bread}
      cheese={result.cheese}
      sauce={result.sauce}
    />
  );
};

export default ResultPage;
