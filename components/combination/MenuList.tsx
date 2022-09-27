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
  MenuListMaterial,
  MenuListName,
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
  const [open, setOpen] = useState(10);
  const [bottom, setBottom] = useState(true);
  const select = useAppSelector(selectMenu);

  // 선택 메뉴 보기
  const OpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (open === 10) {
      setOpen(65);
    } else {
      setOpen(10);
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
      setOpen(65);
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
      <ComplecationBtn onClick={OpenMenu}>
        {open > 10 ? <>닫기</> : <>열기</>}
      </ComplecationBtn>

      <SandwichImg src={select.sandwich} alt={select.name} />

      <MenuListName>
        <span>{select.name}</span>
      </MenuListName>

      <MenuListMaterial>
        <List name="빵" menu={select.bread} />
      </MenuListMaterial>

      <MenuListMaterial>
        <List name="치즈" menu={select.cheese} />
      </MenuListMaterial>

      <MenuListMaterial>
        {sauce?.length ? (
          <>
            <span>소스</span>

            <div>
              {sauce?.slice(0, 3).map((list, idx) => (
                <p className="sauce" key={idx}>
                  {list}
                </p>
              ))}
            </div>
          </>
        ) : null}
      </MenuListMaterial>

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
