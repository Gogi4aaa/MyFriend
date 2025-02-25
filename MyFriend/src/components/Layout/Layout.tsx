import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src="logo.png" alt="My friend" width="85" height="80" />
          </div>
          <div className="nav-buttons">
            <Link to={"/"}>Начало</Link>
            <Link to={"/login"} id="profile-button">Вход / Регистрация</Link>
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
      <main>{children}</main>
    </>
  );
};

export default Layout;
