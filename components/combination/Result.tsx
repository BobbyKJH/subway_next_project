// React
import React from "react";
// component
import List from "./List";
// Style
import {
  ResultCalorie,
  ResultImg,
  ResultList,
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
  breadImage: string;
  cheese: string;
  cheeseImage: string;
  sauce: string[];
  sauceImage: string[];
  kcal: number;
}

const Result = ({
  name,
  sandwich,
  bread,
  breadImage,
  cheese,
  cheeseImage,
  sauce,
  sauceImage,
  kcal,
}: Type) => {
  return (
    <ResultStyle>
      <ResultImg src={sandwich} alt={sandwich} />

      <ResultSandwich>{name}</ResultSandwich>

      <ResultList className="bread">
        <List name="빵" image={breadImage} menu={bread} />
      </ResultList>

      <ResultList className="cheese">
        <List name="치즈" image={cheeseImage} menu={cheese} />
      </ResultList>

      <ResultSauce>
        <span>소스</span>
        <div className="image">
          {sauceImage.map((img: string, idx: number) => (
            <img key={idx} src={img} alt={img} />
          ))}
        </div>
        <div className="name">
          {sauce.map((sauce: string, idx: number) => (
            <p key={idx}>{sauce}</p>
          ))}
        </div>
      </ResultSauce>

      <ResultCalorie>{AddCommas(kcal)} kcal</ResultCalorie>
    </ResultStyle>
  );
};

export default Result;
