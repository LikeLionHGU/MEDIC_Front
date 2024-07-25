import React from "react";
import HashtagSelect from "../components/MainPage/HashtagSelect";
import Customization from "../components/MainPage/Customization";
import Header from "../components/MainPage/Header";
import BEST from "../components/MainPage/BEST";
import EffectiveProduct from "../components/MainPage/EffectiveProduct";

const MainPage = () => {
  return (
    <>
      <Header />
      <HashtagSelect />
      <Customization />
      <BEST />
      <EffectiveProduct />
    </>
  );
};

export default MainPage;
