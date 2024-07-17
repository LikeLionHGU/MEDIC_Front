import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Medic/LoginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
