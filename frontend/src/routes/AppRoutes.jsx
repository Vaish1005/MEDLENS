import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import ClinicalWorkbench from "../pages/ClinicalWorkbench";
import EvidenceExplorer from "../pages/EvidenceExplorer";
import PatientMemory from "../pages/PatientMemory";
import AuditTrail from "../pages/AuditTrail";

import ProtectedRoute from "./ProtectedRoute";
import SavedCases from "../pages/SavedCases";
import History from "../pages/History";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/workbench"
          element={
            <ProtectedRoute>
              <ClinicalWorkbench />
            </ProtectedRoute>
          }
        />

        <Route
          path="/evidence"
          element={
            <ProtectedRoute>
              <EvidenceExplorer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient-memory"
          element={
            <ProtectedRoute>
              <PatientMemory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cases"
          element={
            <ProtectedRoute>
              <SavedCases />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />

        <Route
          path="/audit"
          element={
            <ProtectedRoute>
              <AuditTrail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
