import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/MainPage/Header";
import styled from "styled-components";
import TopInformation from "../components/InformationPage/TopInformation";

const InformationPage = () => {
  const { productId } = useParams();

  return (
    <>
      <Header />
      <TopInformation productId={productId} />
    </>
  );
};

export default InformationPage;
