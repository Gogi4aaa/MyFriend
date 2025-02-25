import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App.tsx"
import NotFoundPage from "../Pages/NotFoundPage.tsx";
import AuthPage from "../components/Auth/Auth.tsx";


export const RouteSettings = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        
        {/* Here change the component to uslugi */}
        
        {/* Admin routes */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/games" element={<AuthPage />} />
        <Route path="/profile" element={<AuthPage />} />
        {/* Catch-all route for 404 pages */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};