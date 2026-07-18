import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>LifeFlow</h2>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>

          <li>
            <NavLink to="/planner">Planner</NavLink>
          </li>

          <li>
            <NavLink to="/notes">Notes</NavLink>
           </li>
           <li>
            <NavLink to="/habits">Habits</NavLink>
           </li>
           <li>
            <NavLink to="/focus">Focus</NavLink>
           </li>
           <li>
            <NavLink to="/calendar">Calendar</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}