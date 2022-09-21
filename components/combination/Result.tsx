// React
import React from "react";

interface Type {
  name: string;
  eng: string;
  sandwich: string;
  bread: string;
  cheese: string;
  sauce: string[];
  kcal: number;
}

const Result = ({ name, eng, sandwich, bread, cheese, sauce, kcal }: Type) => (
  <>
    <img src={sandwich} alt={sandwich} />

    <span>{name}</span>
    <p>{eng}</p>

    <div>
      <p className="bread">{bread}</p>

      <p className="cheese">{cheese}</p>

      <div>
        {sauce.map((sauce: string, idx: number) => (
          <p key={idx}>{sauce}</p>
        ))}
      </div>
      <p>{kcal} kcal</p>
    </div>
  </>
);

export default Result;
