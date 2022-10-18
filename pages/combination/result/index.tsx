// React
import Link from "next/link";
import React from "react";
// Component
import Result from "../../../components/combination/Result";
import { CombinationResult } from "../../../styles/pages/CombinationPage.styled";

const ResultPage = () => {
  const result = JSON.parse(localStorage.getItem("recipe") as string);

  return (
    <>
      {result ? (
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
      ) : (
        <CombinationResult>
          <span>레시피를 만들어 보세요</span>
          <Link href={"/combination/sandwich"}>
            <div>만들기</div>
          </Link>
        </CombinationResult>
      )}
    </>
  );
};

export default ResultPage;
