import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/LoginAdmin";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import AdminManagement from "./pages/AdminManagement";
import BeepManagement from "./pages/AdminBeepManagement";
import LoadBeep from "./pages/AdminLoadBeep";
import StationList from "./pages/AdminStationList";
import StationManagement from "./pages/AdminStationManagement";

export default function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set Home as default */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/admin/home" element={<AdminDashboard />} />
          <Route path="/admin/admin-management" element={<AdminManagement />} />
          <Route
            path="/admin/beep-card-management"
            element={<BeepManagement />}
          />
          <Route path="admin/beep-load" element={<LoadBeep />} />
          <Route path="/admin/station-list" element={<StationList />} />
          <Route
            path="/admin/station-management"
            element={<StationManagement />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
