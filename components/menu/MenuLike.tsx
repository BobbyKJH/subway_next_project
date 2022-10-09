// React
import React, { useState } from "react";
// Style
import { ProductLike } from "../../styles/components/menu/MenuProduct.styled";
import { useEffect } from "react";

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
  const [like, setLike] = useState<boolean>(false);

  const storage = localStorage.getItem(`${title}`);
  const check = JSON.parse(storage as string);

  useEffect(() => {
    if (check !== null && check.name === name) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, []);

  const Like = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    setLike(true);
  };

  return <ProductLike type="checkbox" onChange={Like} checked={like} />;
};

export default MenuLike;
