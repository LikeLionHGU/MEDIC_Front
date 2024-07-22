import React from "react";
import HashtagSelect from "../components/MainPage/HashtagSelect";
import Customization from "../components/MainPage/Customization";
import Header from "../components/MainPage/Header";
import BEST from "../components/MainPage/BEST";

const MainPage = () => {
  return (
    <>
      <Header />
      <HashtagSelect />
      <Customization />
      <BEST />
    </>
  );
};

export default MainPage;
