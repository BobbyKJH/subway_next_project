// React
import React from "react";

const MyRecipe = () => {
  const menu = JSON.parse(localStorage.getItem("recipe") as string);

  return (
    <>
      <span>나만의 레시피</span>

      <div>
        {/* 샌드위치 이미지 */}
        <img src={menu.sandwich} alt={menu.sandwich} width={500} height={500} />
        {/* 빵 종류 */}
        <p>{menu.bread}</p>
        {/* 치즈 종류 */}
        <p>{menu.cheese}</p>
        {/* 소스 선택 종류 */}
        <p>
          {menu.sauce.map((item: string, idx: number) => (
            <p key={idx}>{item}</p>
          ))}
        </p>
      </div>
    </>
  );
};

export default MyRecipe;
