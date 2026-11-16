import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { label: "HOME", path: "/home" },
  { label: "LIBRARY", path: "/library" },
  { label: "COMMENTS", path: "/comments" },
  { label: "PROFILE", path: "/profile" },
  { label: "STATISTICS", path: "/statistics" },
  { label: "RATINGS", path: "/ratings" },
];

function FolderLayout() {
  return (
    <main className="folder">
      <header className="folder-header">
        <div>
          <h1>GAME ARCHIVE</h1>
          <p>BIBLIOTECA PERSONAL DE VIDEOJUEGOS</p>
        </div>

        <span className="folder-code">ARCHIVO PRIVADO / ACCESO AUTORIZADO</span>
      </header>

      <nav className="folder-tabs">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              isActive ? "folder-tab active" : "folder-tab"
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>

      <section className="folder-document">
        <Outlet />
      </section>

      <footer className="folder-footer">
        <span>GAME ARCHIVE / PROPIEDAD PERSONAL</span>
        <span>NO DESTRUIR</span>
      </footer>
    </main>
  );
}

export default FolderLayout;
