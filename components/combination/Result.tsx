// React
import React from "react";

interface Type {
  sandwich: string;
  bread: string;
  cheese: string;
  sauce: string[];
}

const Result = ({ sandwich, bread, cheese, sauce }: Type) => (
  <>
    <img src={sandwich} alt={sandwich} />

    <div>
      <p className="bread">{bread}</p>

      <p className="cheese">{cheese}</p>

      <div>
        {sauce.map((sauce: string) => (
          <p key={sauce}>{sauce}</p>
        ))}
      </div>
    </div>
  </>
);

export default Result;
