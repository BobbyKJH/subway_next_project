// React
import React from "react";
// Component
import MainBox from "../components/main/MainBox";
// Style
import { MainPageStyle } from "../styles/pages/MainPage.styled";
// Type
import type { NextPage } from "next";

const Home: NextPage = () => (
  <MainPageStyle>
    <MainBox />
  </MainPageStyle>
);
export default Home;
