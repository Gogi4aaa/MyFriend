import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App.tsx"
import NotFoundPage from "../Pages/NotFoundPage.tsx";
import AuthPage from "../components/Auth/Auth.tsx";
import Register from "../components/Register/Register.tsx";
import { Games } from "../Pages/Games.tsx";


export const RouteSettings = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        
        {/* Here change the component to uslugi */}
        
        {/* Admin routes */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<AuthPage />} />
        {/* Catch-all route for 404 pages */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};