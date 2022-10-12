// React
import React from "react";
import { useRouter } from "next/router";
// Style
import { MainDescriptionStyle } from "../../styles/components/main/MainDescription.styled";

const MainDescription = () => {
  const router = useRouter();

  const Nick = localStorage.getItem("nick");

  const removeNick = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem("nick");
    router.reload();
  };

  return (
    <MainDescriptionStyle>
      <span>{Nick}</span>
      <p>자신만의 레시피를 만들어보세요</p>
      <button onClick={removeNick}>변경</button>
    </MainDescriptionStyle>
  );
};

export default MainDescription;
