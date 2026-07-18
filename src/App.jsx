import "./index.css";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Notes from "./pages/Notes";
import Habits from "./pages/Habits";
import Focus from "./pages/Focus";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;