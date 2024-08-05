import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SignUpPage2 from "./pages/SignUpPage2";
import MainPage from "./pages/MainPage";
import AllProductPage from "./pages/AllProductPage";
import InformationPage from "./pages/InformationPage";
import ScrollToTop from "./components/ScrollToTop";
import HashtagPage from "./pages/HashtagPage";
import CertificatePage from "./pages/CertificatePage";
import RelatedPage from "./pages/RelatedPage";
import SearchPage from "./pages/SearchPage";
import SearchInformationPage from "./pages/SearchInformationPage";
import React, { useState } from "react";

export default function AppRouter() {
  const [searchOption, setSearchOption] = useState("제품");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Medic/SignUpPage" element={<SignUpPage />} />
        <Route path="/Medic/SignUpPage2" element={<SignUpPage2 />} />
        <Route
          path="/Medic"
          element={
            <MainPage
              searchOption={searchOption}
              onSearchOptionChange={setSearchOption}
            />
          }
        />
        <Route
          path="/Medic/AllProductPage"
          element={
            <AllProductPage
              searchOption={searchOption}
              onSearchOptionChange={setSearchOption}
            />
          }
        />
        <Route
          path="/Medic/InformationPage/:productId"
          element={
            <InformationPage
              searchOption={searchOption}
              onSearchOptionChange={setSearchOption}
            />
          }
        />
        <Route
          path="/Medic/HashtagPage"
          element={
            <HashtagPage
              searchOption={searchOption}
              onSearchOptionChange={setSearchOption}
            />
          }
        />
        <Route path="/Medic/CertificatePage" element={<CertificatePage />} />
        <Route
          path="/Medic/RelatedPage"
          element={
            <RelatedPage
              searchOption={searchOption}
              onSearchOptionChange={setSearchOption}
            />
          }
        />
        <Route
          path="/Medic/SearchPage"
          element={
            <SearchPage
              searchOption={searchOption}
              onSearchOptionChange={setSearchOption}
            />
          }
        />
        <Route
          path="/Medic/SearchInformationPage/:productId"
          element={
            <SearchInformationPage
              searchOption={searchOption}
              onSearchOptionChange={setSearchOption}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
