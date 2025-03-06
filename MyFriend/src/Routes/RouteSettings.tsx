import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App.tsx"
import NotFoundPage from "../Pages/NotFoundPage.tsx";
import AuthPage from "../components/Auth/Auth.tsx";
import Register from "../components/Register/Register.tsx";
import { Games } from "../Pages/Games.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import StoryGame from "../components/games/StoryGame.tsx";
import MindMapGame from "../components/games/MindMapGame.tsx";
import { AnimalSoundGame } from "../components/games/AnimalSoundGame.tsx";


export const RouteSettings = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        
        {/* ProtectedRoutes */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/games" element={<Games />} />
          <Route path="/profile" element={<AuthPage />} />
          <Route path="/storygame" element={<StoryGame />} />
          <Route path="/mindmapgame" element={<MindMapGame />} />
          <Route path="/animalsoundgame" element={<AnimalSoundGame />} />
        </Route>
        {/* Main routes */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<Register />} />
        
        {/* Catch-all route for 404 pages */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};