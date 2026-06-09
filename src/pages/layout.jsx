import { Outlet, Link } from "react-router-dom";
import Layout from "./pages/Layout.jsx";

function Layout() {
  return (
    <div className="app-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>🌱 AgriSphere AI</h2>

        <Link to="/">🏠 Home</Link>
        <Link to="/dashboard">📊 Dashboard</Link>
        <Link to="/features">⚙ Features</Link>
        <Link to="/about">📘 About</Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="main">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;