// React
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// Redux
import { useAppSelector } from "../../store/hooks";
import { selectMenu } from "../../store/recipeSlice";
// Component
import RecipeBtn from "./RecipeBtn";
import List from "./List";
// Style
import {
  ComplecationBtn,
  MenuListBox,
  MenuListIngredient,
  MenuListName,
  MenuListSauce,
  SandwichImg,
} from "../../styles/components/combination/MenuList.styled";

const MenuList = ({
  sauce,
  sauceKcal,
  sauceImage,
}: {
  sauce?: string[];
  // 소스 칼로리
  sauceKcal?: number[];
  sauceImage?: string[];
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(4);
  const [bottom, setBottom] = useState(true);
  const select = useAppSelector(selectMenu);

  // 선택 메뉴 보기
  const OpenMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (open === 4) {
      setOpen(30);
    } else {
      setOpen(4);
    }
  };

  const BottomLocation = () => {
    if (window.innerWidth <= 1000) {
      setBottom(false);
    } else {
      setBottom(true);
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

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setBottom(false);
    }
    addEventListener("resize", BottomLocation);
    return () => {
      removeEventListener("resize", BottomLocation);
    };
  }, []);

  return (
    <MenuListBox height={open} bottom={bottom}>
      <ComplecationBtn onClick={OpenMenu} arrow={open}>
        <p>◀</p>
      </ComplecationBtn>

      {select.sandwich ? (
        <SandwichImg src={select.sandwich} alt={select.name} />
      ) : null}

      <MenuListName className="eng">{select.name}</MenuListName>

      <MenuListName>
        <p className="eng">{select.eng}</p>
      </MenuListName>

      <MenuListIngredient>
        <List name="빵" menu={select.bread} image={select.breadImg} />
      </MenuListIngredient>

      <MenuListIngredient>
        <List name="치즈" menu={select.cheese} image={select.cheeseImg} />
      </MenuListIngredient>

      <MenuListSauce>
        {sauce?.length ? (
          <>
            <span>소스</span>

            <div>
              {sauce?.slice(0, 3).map((list, idx) => (
                <React.Fragment key={list}>
                  <p className="sauce">
                    {idx + 1}.{list}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </>
        ) : null}
      </MenuListSauce>

      {router.pathname.includes("/sauce") && (
        <RecipeBtn
          sauce={sauce}
          sauceKcal={sauceKcal}
          sauceImage={sauceImage}
        />
      )}
    </MenuListBox>
  );
};

export default MenuList;
