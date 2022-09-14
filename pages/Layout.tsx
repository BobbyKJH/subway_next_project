import React from "react";
import Header from "../components/Header";

interface Type {
  children: React.ReactNode;
}

const Layout = ({ children }: Type) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
