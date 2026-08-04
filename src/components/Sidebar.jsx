import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="sidebar-header">

        <div className="logo-circle">
          🌿
        </div>

        <div>

          <h2>LifeFlow</h2>

          <p>Your digital workspace</p>

        </div>

      </div>

      <nav>

        <ul>

          <li>

            <NavLink to="/">

              <span>🏠</span>

              Dashboard

            </NavLink>

          </li>

          <li>

            <NavLink to="/planner">

              <span>📝</span>

              Planner

            </NavLink>

          </li>

          <li>

            <NavLink to="/notes">

              <span>📖</span>

              Notes

            </NavLink>

          </li>

          <li>

            <NavLink to="/habits">

              <span>🌱</span>

              Habits

            </NavLink>

          </li>

          <li>

            <NavLink to="/focus">

              <span>🎯</span>

              Focus

            </NavLink>

          </li>

          <li>

            <NavLink to="/calendar">

              <span>📅</span>

              Calendar

            </NavLink>

          </li>

          <li>

            <NavLink to="/settings">

              <span>⚙️</span>

              Settings

            </NavLink>

          </li>

        </ul>

      </nav>

      <div className="sidebar-footer">

        <div className="footer-glow"></div>

        <p>LifeFlow v1.0</p>

      </div>

    </aside>

  );

}