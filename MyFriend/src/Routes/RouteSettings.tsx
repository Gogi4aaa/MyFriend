import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App.tsx"
import NotFoundPage from "../Pages/NotFoundPage.tsx";
import AuthPage from "../components/Auth/Auth.tsx";
import Register from "../components/Register/Register.tsx";
import { Games } from "../Pages/Games.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";


export const RouteSettings = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        
        {/* ProtectedRoutes */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/games" element={<Games />} />
          <Route path="/profile" element={<AuthPage />} />
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