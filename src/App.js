import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { DashboardLayout } from "./components/Navigation/dashboard/DashboardLayout";
import HomeContent from "./components/HomeContent";
import { ProfileEditor } from "./components/Form/profile/ProfileEditor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<HomeContent />} />
          <Route path="/settings" element={<ProfileEditor />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
