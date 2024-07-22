import React from "react";
import HashtagSelect from "../components/MainPage/HashtagSelect";
import Customization from "../components/MainPage/Customization";
import Header from "../components/MainPage/Header";

const MainPage = () => {
  return (
    <>
      <Header />
      <HashtagSelect />
      <Customization />
    </>
  );
};

export default MainPage;
