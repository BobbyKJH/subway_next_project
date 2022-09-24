// React
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// Style
import {
  MobileFooterBox,
  MobileFooterStyle,
} from "../../styles/layout/Footer.styled";

const MobileFooter = () => {
  const router = useRouter();

  const Page = (title: string) => {
    return router.pathname.includes(`${title}`);
  };

  return (
    <MobileFooterStyle>
      <Link href={"/"}>
        <MobileFooterBox className={Page("/") ? "active" : ""}>
          홈
        </MobileFooterBox>
      </Link>
      <Link href={"/menu/sandwich"}>
        <MobileFooterBox className={Page("/menu") ? "active" : ""}>
          메뉴
        </MobileFooterBox>
      </Link>
      <Link
        href={"/combination/sandwich"}
        className={Page("/combination") ? "active" : ""}
      >
        <MobileFooterBox>조합</MobileFooterBox>
      </Link>
      <Link href={"/mypage"}>
        <MobileFooterBox className={Page("/mypage") ? "active" : ""}>
          마이페이지
        </MobileFooterBox>
      </Link>
    </MobileFooterStyle>
  );
};

export default MobileFooter;
