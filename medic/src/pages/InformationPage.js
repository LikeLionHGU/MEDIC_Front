import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/MainPage/Header";
import styled from "styled-components";
import TopInformation from "../components/InformationPage/TopInformation";
import Detail from "../components/InformationPage/Detail";

const InformationPage = () => {
  const { productId } = useParams();

  return (
    <>
      <Header />
      <TopInformation productId={productId} />
      <Detail />
    </>
  );
};

export default InformationPage;
