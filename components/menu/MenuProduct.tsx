// React
import React from "react";
// Style
import {
  ProductImg,
  ProductKcal,
  ProductName,
  ProductSummary,
} from "../../styles/components/menu/MenuProduct.styled";

interface MenuProductType {
  name: string;
  eng: string;
  img: string;
  calorie: number;
  summary?: string;
}

const MenuProduct = ({ name, eng, img, calorie, summary }: MenuProductType) => {
  return (
    <>
      <ProductImg src={img} alt={name} />

      <ProductName>
        <span className="name">{name}</span>
        <p className="eng">{eng}</p>
      </ProductName>

      <ProductSummary className="summary">{summary}</ProductSummary>

      <ProductKcal className="calorie">{calorie} kcal</ProductKcal>
    </>
  );
};

export default MenuProduct;
