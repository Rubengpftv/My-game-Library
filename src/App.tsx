import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FolderLayout from "./components/FolderLayout";
import Library from "./pages/Library";
import PlaceholderPage from "./pages/PlaceholderPage";
import GameDetail from "./pages/GameDetail";
import Comments from "./pages/Comments";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/library" replace />} />

        <Route element={<FolderLayout />}>
          <Route path="/home" element={<PlaceholderPage title="HOME" />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:id" element={<GameDetail />} />
          <Route path="/comments" element={<Comments />} />{" "}
          <Route
            path="/profile"
            element={<PlaceholderPage title="PROFILE" />}
          />
          <Route
            path="/statistics"
            element={<PlaceholderPage title="STATISTICS" />}
          />
          <Route
            path="/ratings"
            element={<PlaceholderPage title="RATINGS" />}
          />
        </Route>

        <Route
          path="*"
          element={<PlaceholderPage title="404 - FILE NOT FOUND" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
