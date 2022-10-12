// React
import React from "react";
// Component
import MainDescription from "./MainDescription";
import NavBox from "./NavBox";
// Style
import {
  MainLogo,
  MainBoxStyle,
  MainBoxContent,
  NavBoxContent,
} from "../../styles/components/main/MainBox.styled";

const MainBox = () => {
  return (
    <MainBoxStyle>
      <MainBoxContent>
        <MainLogo src="https://i.ibb.co/Ydn7twh/petes-subway.jpg" />
        <MainDescription />
      </MainBoxContent>

      <NavBoxContent>
        <NavBox link={"/menu/sandwich"} title="메뉴" bgc="#755139" />

        <NavBox link={"/combination/sandwich"} title="조합" bgc="#F95700" />

        <NavBox link={"/combination/result"} title="레시피" bgc="#7b9acc" />

        <NavBox link={"/mypage"} title="마이페이지" bgc="#2D2926" />
      </NavBoxContent>
    </MainBoxStyle>
  );
};

export default MainBox;
