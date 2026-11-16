import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const tabs = [
  { label: "HOME", path: "/home" },
  { label: "LIBRARY", path: "/library" },
  { label: "COMMENTS", path: "/comments" },
  { label: "STATISTICS", path: "/statistics" },
  { label: "RATINGS", path: "/ratings" },
  { label: "PROFILE", path: "/profile" },
];

function FolderLayout() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/home";

  function handleLogout() {
    logout();
    navigate("/home");
  }

  return (
    <main className="folder">
      <header className="folder-header">
        <div className="folder-brand">
          {!isHome && <img src={logo} alt="LIBGA P.D. - Game Archive" />}
          <p>BIBLIOTECA PERSONAL DE VIDEOJUEGOS</p>
        </div>
        <div className="folder-user">
          <span className="folder-code">
            ARCHIVO PRIVADO / ACCESO AUTORIZADO
          </span>

          {isAuthenticated && (
            <>
              <span>{user?.username}</span>
              <button type="button" onClick={handleLogout}>
                LOGOUT
              </button>
            </>
          )}
        </div>
      </header>

      <nav className="folder-tabs">
        {tabs.map((tab) => {
          const isHomeTab = tab.path === "/home";
          const isDisabled = !isAuthenticated && !isHomeTab;

          if (isDisabled) {
            return (
              <span
                key={tab.path}
                className="folder-tab folder-tab-disabled"
                aria-disabled="true"
              >
                {tab.label}
              </span>
            );
          }

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                isActive ? "folder-tab active" : "folder-tab"
              }
            >
              {tab.label}
            </NavLink>
          );
        })}
      </nav>

      {isHome ? (
        <section className="folder-cover">
          <Outlet />
        </section>
      ) : (
        <section className="folder-document">
          <Outlet />
        </section>
      )}

      <footer className="folder-footer">
        <span>GAME ARCHIVE / PROPIEDAD PERSONAL</span>
        <span>NO DESTRUIR</span>
      </footer>
    </main>
  );
}

export default FolderLayout;
