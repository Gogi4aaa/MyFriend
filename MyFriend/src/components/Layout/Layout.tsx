import { ReactNode } from "react";
import { Link } from "react-router-dom";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src="https://res.cloudinary.com/dzrp3c1cv/image/upload/v1740601496/g2g03wloxkvdiacox5uv.png" alt="My friend" width="85" height="80" />
          </div>
          <div className="nav-buttons">
            <Link to={"/"}>Начало</Link>
            <Link to={"/login"} id="profile-button">Вход</Link>
            <Link to={"/register"} id="profile-button">Регистрация</Link>
            <Link to={"/games"} id="games-button">Игри</Link>
            <Link to={"/profile"} id="profile-info-button" style={{ display: "none" }}>
              Профил
            </Link>
            <button id="logout-button" style={{ display: "none" }}>
              Изход
            </button>
          </div>
        </nav>
      </header>
      <main>
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>
        {children}</main>
    </>
  );
};

export default Layout;
