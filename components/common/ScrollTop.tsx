// React
import React, { useEffect, useState } from "react";
// Style
import { ScorllTopButton } from "../../styles/common/ScrollTop.styled";
// Image
import { BiArrowToTop } from "react-icons/bi";

const ScrollTop = () => {
  const [top, setTop] = useState(0);

  const handleScroll = () => {
    if (top > 299) {
      setTop(window.pageYOffset);
    } else {
      setTop(window.pageYOffset);
    }
    console.log(top);
  };

  const scrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll);
    };
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {scrollY > 299 ? (
        <ScorllTopButton onClick={scrollTop}>
          <BiArrowToTop />
        </ScorllTopButton>
      ) : null}
    </>
  );
};

export default ScrollTop;
