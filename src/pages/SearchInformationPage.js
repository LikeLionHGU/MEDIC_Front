import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/MainPage/Header";
import SearchTopInformation from "../components/SearchInformationPage/SearchTopInformation";
import SearchDetail from "../components/SearchInformationPage/SearchDetail";
import SearchReview from "../components/SearchInformationPage/SearchReview";
import { dummyProducts } from "../components/SearchInformationPage/dummyProducts";

const SearchInformationPage = ({ onSearchOptionChange }) => {
  const { productId } = useParams();

  const product = dummyProducts.find((p) => p.productId === productId);

  return (
    <>
      <Header onSearchOptionChange={onSearchOptionChange} />
      {product ? (
        <>
          <SearchTopInformation product={product} />
          <SearchDetail productId={productId} products={dummyProducts} />
          <SearchReview product={product} />
        </>
      ) : (
        <div>Product not found</div>
      )}
    </>
  );
};

export default SearchInformationPage;
