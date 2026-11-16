import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import FolderLayout from "./components/FolderLayout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import PlaceholderPage from "./pages/PlaceholderPage";
import GameDetail from "./pages/GameDetail";
import Comments from "./pages/Comments";
import ProfilePage from "./pages/Profile";
import Statistics from "./pages/Statistics";
import Ratings from "./pages/Ratings";
import "./App.css";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route element={<FolderLayout />}>
        <Route path="/home" element={<Home />} />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />
        <Route
          path="/library/:id"
          element={
            <ProtectedRoute>
              <GameDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/comments"
          element={
            <ProtectedRoute>
              <Comments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/statistics"
          element={
            <ProtectedRoute>
              <Statistics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ratings"
          element={
            <ProtectedRoute>
              <Ratings />
            </ProtectedRoute>
          }
        />{" "}
      </Route>

      <Route
        path="*"
        element={<PlaceholderPage title="404 - FILE NOT FOUND" />}
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
