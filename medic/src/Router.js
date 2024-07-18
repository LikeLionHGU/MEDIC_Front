import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Medic/LoginPage" element={<LoginPage />} />
        <Route path="/Medic/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
