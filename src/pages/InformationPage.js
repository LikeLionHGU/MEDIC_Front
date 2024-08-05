import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/MainPage/Header";
import TopInformation from "../components/InformationPage/TopInformation";
import Detail from "../components/InformationPage/Detail";
import Review from "../components/InformationPage/Review";

const InformationPage = ({ onSearchOptionChange }) => {
  const { productId } = useParams();

  return (
    <>
      <Header onSearchOptionChange={onSearchOptionChange} />
      <TopInformation productId={productId} />
      <Detail productId={productId} />
      <Review productId={productId} />
    </>
  );
};

export default InformationPage;
