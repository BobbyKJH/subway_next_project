// React
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// Redux
import { useAppSelector } from "../../store/hooks";
import { selectMenu } from "../../store/recipeSlice";
// Component
import RecipeBtn from "./RecipeBtn";
// Style
import {
  ComplecationBtn,
  MenuListBox,
  MenuListBread,
  MenuListCheese,
  MenuListName,
  MenuListSauce,
  SandwichImg,
} from "../../styles/components/combination/MenuList.styled";

const MenuList = ({
  sauce,
  sauceKcal,
}: {
  sauce?: string[];
  // 소스 칼로리
  sauceKcal?: number[];
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(5);
  const select = useAppSelector(selectMenu);

  // 선택 메뉴 보기
  const OpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (open === 5) {
      setOpen(30);
    } else {
      setOpen(5);
    }
  };

  // 선택 하지 않으면 처음으로 돌아간다.
  useEffect(() => {
    if (select.name === "") {
      router.push("/combination/sandwich");
    }
  }, []);

  // 소스 3개 선택시 올라오는 효과
  useEffect(() => {
    if (sauce?.length === 3) {
      setOpen(30);
    }
  }, [sauce]);

  return (
    <MenuListBox height={open}>
      <ComplecationBtn onClick={OpenMenu}>
        {open > 5 ? <>닫기</> : <>열기</>}
      </ComplecationBtn>

      <SandwichImg src={select.sandwich} alt={select.name} />

      <MenuListName>
        <span>{select.name}</span>
        <p>{select.eng}</p>
      </MenuListName>

      <MenuListBread>{select.bread}</MenuListBread>

      <MenuListCheese>{select.cheese}</MenuListCheese>

      <MenuListSauce
        width={sauce?.length === undefined ? 1 : sauce?.slice(0, 3).length}
      >
        {sauce?.slice(0, 3).map((list, idx) => (
          <p className="sauce" key={idx}>
            {list}
          </p>
        ))}
      </MenuListSauce>

      {router.pathname.includes("/sauce") && (
        <RecipeBtn sauce={sauce} sauceKcal={sauceKcal} />
      )}
    </MenuListBox>
  );
};

export default MenuList;
