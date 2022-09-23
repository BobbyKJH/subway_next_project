// React
import React from "react";
// Style
import {
  ResultBread,
  ResultCalorie,
  ResultCheese,
  ResultImg,
  ResultSandwich,
  ResultSauce,
  ResultStyle,
} from "../../styles/components/combination/Recipe.styled";
// Utils
import { AddCommas } from "../../utils/utils";

interface Type {
  name: string;
  sandwich: string;
  bread: string;
  cheese: string;
  sauce: string[];
  kcal: number;
}

const Result = ({ name, sandwich, bread, cheese, sauce, kcal }: Type) => (
  <ResultStyle>
    <ResultImg src={sandwich} alt={sandwich} />
    <ResultSandwich>{name}</ResultSandwich>
    <ResultBread className="bread">
      <div>
        <span>빵</span>
        <p className="arrow" />
        <p>{bread}</p>
      </div>
    </ResultBread>
    <ResultCheese className="cheese">
      <div>
        <span>치즈</span>
        <p className="arrow" />
        <p>{cheese}</p>
      </div>
    </ResultCheese>
    <ResultSauce width={sauce.length === 0 ? 1 : sauce.length}>
      <span>소스</span>
      <div>
        {sauce.map((sauce: string, idx: number) => (
          <p key={idx}>
            {idx + 1}. {sauce}
          </p>
        ))}
      </div>
    </ResultSauce>
    <ResultCalorie>{AddCommas(kcal)} kcal</ResultCalorie>
  </ResultStyle>
);

export default Result;
