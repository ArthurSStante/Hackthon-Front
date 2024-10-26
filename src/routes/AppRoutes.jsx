import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import LandingPage from "../pages/LandingPage/LandingPage.jsx";
import Dashboard from "../pages/interfaces/DashboardCompany.jsx";
import DashboardUser from "../pages/interfaces/DashboardUser.jsx";
import Quests from "../pages/Quests/Quest.jsx";
import Dashboard from "../pages/interfaces/Dashboard";
import RegisterUsuario from "../pages/Auth/RegisterUsuario.jsx";
import RegisterEmp from "../pages/Auth/RegisterEmp.jsx";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registerCompany" element={<RegisterEmp />}></Route>
        <Route path="/registerUser" element={<RegisterUsuario />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboardUser" element={<DashboardUser />}></Route>
        <Route path="/quests" element={<Quests />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
