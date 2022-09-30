// React
import React from "react";
// Style

const RecipeSauce = ({ title, sauce }: { title?: string; sauce: string[] }) => {
  // 이미지 || 이름 판단
  const SauceKind = sauce.find((menu) => menu.includes("https"));

  return (
    <div>
      <span>{title}</span>

      {SauceKind ? (
        // 이미지

        <>
          {sauce.map((menu, idx) => (
            <img src={menu} key={idx} />
          ))}
        </>
      ) : (
        // 이름

        <>
          {sauce.map((menu, idx) => (
            <p key={idx}>{menu}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default RecipeSauce;
