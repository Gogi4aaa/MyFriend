import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src="logo.png" alt="My friend" width="85" height="80" />
          </div>
          <div className="nav-buttons">
            <button>Начало</button>
            <button id="profile-button">Вход / Регистрация</button>
            <button id="games-button" disabled>Игри</button>
            <button id="profile-info-button" style={{ display: "none" }}>
              Профил
            </button>
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
