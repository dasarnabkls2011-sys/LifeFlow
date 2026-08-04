import { useNavigate } from "react-router-dom";
import "../styles/quickactions.css";

function QuickActions() {

  const navigate = useNavigate();

  return (

    <div className="quick-actions">

      <button
        className="quick-card"
        onClick={() => navigate("/planner")}
      >

        <div className="quick-icon">➕</div>

        <h3>New Task</h3>

        <p>Create and organize your next task.</p>

      </button>

      <button
        className="quick-card"
        onClick={() => navigate("/notes")}
      >

        <div className="quick-icon">📝</div>

        <h3>New Note</h3>

        <p>Capture your ideas instantly.</p>

      </button>

    </div>

  );

}

export default QuickActions;