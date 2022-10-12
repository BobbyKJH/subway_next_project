// React
import Link from "next/link";
import React from "react";
// Style
import { NavBoxStyle } from "../../styles/components/main/NavBox.styled";

const NavBox = ({
  link,
  title,
  bgc,
}: {
  link: string;
  title: string;
  bgc: string;
}) => {
  return (
    <Link href={`${link}`}>
      <NavBoxStyle bgc={bgc}>
        <span>{title}</span>
      </NavBoxStyle>
    </Link>
  );
};

export default NavBox;
