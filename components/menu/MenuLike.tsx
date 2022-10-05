// React
import React from "react";
import { useRouter } from "next/router";
// Style
import { ProductLike } from "../../styles/components/menu/MenuProduct.styled";

interface MenuSelectType {
  title: string;
  name: string;
  eng: string;
  img: string;
  summary?: string;
  calorie: number;
}

const MenuLike = ({
  title,
  name,
  eng,
  img,
  summary,
  calorie,
}: MenuSelectType) => {
  const router = useRouter();

  const storage = localStorage.getItem(`${title}`);
  const check = JSON.parse(storage as string);

  const Like = () => {
    localStorage.setItem(
      `${title}`,
      JSON.stringify({
        name: name,
        eng: eng,
        img: img,
        summary: summary,
        calorie: calorie,
      })
    );
    router.reload();
  };

  return (
    <ProductLike onClick={Like}>
      {check !== null && check.name === name ? (
        <span>❤️</span>
      ) : (
        <span>🖤</span>
      )}
    </ProductLike>
  );
};

export default MenuLike;
