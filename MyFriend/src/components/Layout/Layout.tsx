import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LoginProtection } from "../../Utils/HelperFunctions";
import { useNavigate } from "react-router-dom";
const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const logout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src="https://res.cloudinary.com/dzrp3c1cv/image/upload/v1740601496/g2g03wloxkvdiacox5uv.png" alt="My friend" width="85" height="80" />
          </div>
          <div className="nav-buttons">
            <Link to={"/"}>Начало</Link>
            {LoginProtection() && <Link to={"/games"} id="games-button">Игри</Link>} 
            {!LoginProtection() && <Link to={"/login"} id="profile-button">Вход</Link>}
            {!LoginProtection() && <Link to={"/register"} id="profile-button">Регистрация</Link>}
            {LoginProtection() && <button id="profile-button" onClick={logout}>Logout</button>}
            <Link to={"/profile"} id="profile-info-button" style={{ display: "none" }}>
              Профил
            </Link>
          </div>
        </nav>
      </header>
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>
      <main style={{minHeight: "100vh", width: "70%", margin: "0 auto"}} className="d-flex justify-content-between align-items-center flex-wrap">
        {children}
      </main>
    </>
  );
};

export default Layout;
