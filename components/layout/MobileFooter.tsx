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
import {
  RiHome2Fill,
  RiHome2Line,
  RiCreativeCommonsNdFill,
  RiCreativeCommonsNdLine,
  RiSubwayLine,
  RiSubwayFill,
  RiUser3Fill,
  RiUser3Line,
} from "react-icons/ri";

const MobileFooter = () => {
  const router = useRouter();

  const Page = (title: string) => {
    return router.pathname.includes(`${title}`);
  };

  return (
    <MobileFooterStyle>
      <Link href={"/"}>
        <MobileFooterBox className={router.pathname === "/" ? "active" : ""}>
          {router.pathname === "/" ? <RiHome2Fill /> : <RiHome2Line />}
        </MobileFooterBox>
      </Link>

      <Link href={"/menu/sandwich"}>
        <MobileFooterBox className={Page("/menu") ? "active" : ""}>
          {Page("/menu") ? (
            <RiCreativeCommonsNdFill />
          ) : (
            <RiCreativeCommonsNdLine />
          )}
        </MobileFooterBox>
      </Link>

      <Link href={"/combination/sandwich"}>
        <MobileFooterBox className={Page("/combination") ? "active" : ""}>
          {Page("/combination") ? <RiSubwayFill /> : <RiSubwayLine />}
        </MobileFooterBox>
      </Link>

      <Link href={"/mypage"}>
        <MobileFooterBox className={Page("/mypage") ? "active" : ""}>
          {Page("/mypage") ? <RiUser3Fill /> : <RiUser3Line />}
        </MobileFooterBox>
      </Link>
    </MobileFooterStyle>
  );
};

export default MobileFooter;
