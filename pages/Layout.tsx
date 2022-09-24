// React
import React from "react";
// Component
import Header from "../components/Header";
import Footer from "../components/layout/Footer";

interface Type {
  children: React.ReactNode;
}

const Layout = ({ children }: Type) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
