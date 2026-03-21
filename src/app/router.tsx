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
import LeaderboardPage from "../features/leaderboard/pages/LeaderboardPage";
import QuestionReviewPage from "../features/questionReview/pages/QuestionReviewPage";
import QuestionBookmarkPage from "../features/bookmark/pages/BookmarkPage";
import AchievementsPage from "../features/achievements/pages/AchievementPage";
import DTPointsPage from "../features/dtPoints/pages/DTPointsPage";
import CMETrackingPage from "../features/cmeTracking/pages/CMETrackingPage";
import EditProfilePage from "../features/account/pages/EditProfilePage";
import ContestQuestionsPage from "../features/contests/pages/ContestQuestionsPage";
import ProgramDetailPage from "../features/programs/pages/ProgramDetailPage";
import ProgramQuestionPage from "../features/programs/pages/ProgramQuestionPage";
import ProgramResultPage from "../features/programs/components/ProgramResultSection";
import ContentDetailPage from "../features/content-feed/pages/ContentDetailPage";
import LearningInsightsPage from "../features/provider-scorecard/pages/LearningInsightsPage";

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
        <Route path="/content-feed/:post_id" element={<ContentDetailPage />} />
        <Route path="provider-scorecard" element={<ProviderScorecardPage /> } />
        <Route path="/learning-insights" element={<LearningInsightsPage /> } />
        <Route path="icd10" element={<ICDCodeSearchPage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="/question-review" element={<QuestionReviewPage />} />
        <Route path="/question-bookmark" element={<QuestionBookmarkPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/dt-points" element={<DTPointsPage />} />
        <Route path="/cme-tracking" element={<CMETrackingPage />} />

         {/* Learning */}
        <Route path="programs" element={<MyProgramsPage />} />
        <Route path="/programs/:programId" element={<ProgramDetailPage />}/>
        <Route
        path="/programs/:programId/chapters/:chapterId"
        element={<ProgramQuestionPage />}
      />
      <Route
        path="/programs/:programId/result"
        element={<ProgramResultPage />}
      />
        <Route path="contests" element={<ContestsPage />} />
        <Route path="contests/:questionnaireId" element={<ContestQuestionsPage />} />

        {/* Account */}
        <Route path="/account" element={<EditProfilePage />} />

      </Route>

      {/* Fallback */}
      <Route
        path="*"
        element={<Navigate to={token ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}
