// React
import React, { useCallback, useEffect, useState } from "react";
import ScrollTop from "../common/ScrollTop";
// Component
import MobileFooter from "./MobileFooter";
// Style

const Footer = () => {
  const [mode, setMode] = useState(true);

  const MobileMode = useCallback(() => {
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

  return (
    <>
      <ScrollTop />

      {mode ? null : (
        <>
          <MobileFooter />
        </>
      )}
    </>
  );
};

export default Footer;
