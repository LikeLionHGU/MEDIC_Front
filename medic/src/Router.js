import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SignUpPage2 from "./pages/SignUpPage2";
import MainPage from "./pages/MainPage";
import AllProductPage from "./pages/AllProductPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Medic/LoginPage" element={<LoginPage />} />
        <Route path="/Medic/SignUpPage" element={<SignUpPage />} />
        <Route path="/Medic/SignUpPage2" element={<SignUpPage2 />} />
        <Route path="/Medic" element={<MainPage />} />
        <Route path="/Medic/AllProductPage" element={<AllProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
