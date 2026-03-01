import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import AppLayout from "./layout/AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import { useAuthStore } from "../features/auth/store";
import MyProgramsPage from "../features/programs/pages/ProgramsPage";
import ContestsPage from "../features/contests/pages/ContestsPage";
import ContentFeedPage from "../features/content-feed/pages/ContentFeedPage";
import ProviderScorecardPage from "../features/provider-scorecard/pages/ProviderScorecardPage";
import ICDCodeSearchPage from "../features/icd10/pages/ICDCodeSearchPage";

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
        <Route path="content-feed" element={<ContentFeedPage />} />
        <Route path="provider-scorecard" element={<ProviderScorecardPage /> } />
        <Route path="icd10" element={<ICDCodeSearchPage />} />

         {/* Learning */}
        <Route path="programs" element={<MyProgramsPage />} />
        <Route path="contests" element={<ContestsPage />} />
      </Route>

      {/* Fallback */}
      <Route
        path="*"
        element={<Navigate to={token ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}
