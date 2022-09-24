// React
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// Style
import {
  MobileFooterBox,
  MobileFooterStyle,
} from "../../styles/layout/Footer.styled";
// Image
import Image from "next/image";
import home from "../../img/home.png";
import menu from "../../img/menu.png";
import combination from "../../img/combination.png";
import mypage from "../../img/mypage.png";

const MobileFooter = () => {
  const router = useRouter();

  const Page = (title: string) => {
    return router.pathname.includes(`${title}`);
  };

  return (
    <MobileFooterStyle>
      <Link href={"/"}>
        <MobileFooterBox className={router.pathname === "/" ? "active" : ""}>
          <Image src={home} width={30} height={30} />
        </MobileFooterBox>
      </Link>

      <Link href={"/menu/sandwich"}>
        <MobileFooterBox className={Page("/menu") ? "active" : ""}>
          <Image src={menu} width={30} height={30} />
        </MobileFooterBox>
      </Link>

      <Link href={"/combination/sandwich"}>
        <MobileFooterBox className={Page("/combination") ? "active" : ""}>
          <Image src={combination} width={30} height={30} />
        </MobileFooterBox>
      </Link>

      <Link href={"/mypage"}>
        <MobileFooterBox className={Page("/mypage") ? "active" : ""}>
          <Image src={mypage} width={30} height={30} />
        </MobileFooterBox>
      </Link>
    </MobileFooterStyle>
  );
};

export default MobileFooter;
