import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import AppLayout from "./layout/AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import { useAuthStore } from "../features/auth/store";

export function AppRouter() {
  const token = useAuthStore((s) => s.token);

  return (
    <Routes>
      {/* Public Route */}
      <Route
        path="/login"
        element={
          token ? <Navigate to="/" replace /> : <LoginPage />
        }
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
      </Route>

      {/* Fallback */}
      <Route
        path="*"
        element={<Navigate to={token ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}
