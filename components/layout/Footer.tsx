import React, { useCallback, useEffect, useState } from "react";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const [mode, setMode] = useState(true);

  const MobileMode = useCallback(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 1000) {
      setMode(true);
    } else {
      setMode(false);
    }
  }, [mode]);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setMode(false);
    }
    window.addEventListener("resize", MobileMode);
    return () => {
      window.removeEventListener("resize", MobileMode);
    };
  }, []);

  return <>{mode ? <div>1</div> : <MobileFooter />}</>;
};

export default Footer;
