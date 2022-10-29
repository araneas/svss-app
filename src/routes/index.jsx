import { Outlet, Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="page">
      <header className="app-header">
        <div className="logo"></div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to={'/competitions'}>Лиги</Link>
            </li>
            <li>
              <Link to={'/teams'}>Команды</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}