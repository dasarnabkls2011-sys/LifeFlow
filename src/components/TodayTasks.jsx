import { useNavigate } from "react-router-dom";
import "../styles/TodayTasks.css";

function TodayTasks() {

  const navigate = useNavigate();

  const tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  const pendingTasks =
    tasks.filter(task => !task.completed);

  return (

    <section className="today-tasks">

      <div className="today-card-header">

        <div>

          <h2>📋 Today's Tasks</h2>

          <p className="card-subtitle">
            Stay on top of your day.
          </p>

        </div>

        <span className="task-count">
          {pendingTasks.length} Left
        </span>

      </div>

      {tasks.length === 0 ? (

        <div className="today-empty">

          <div className="empty-icon">
            🎉
          </div>

          <h3>You're All Caught Up!</h3>

          <p>
            No tasks scheduled for today.
          </p>

        </div>

      ) : (

        <div className="today-task-list">

          {tasks.slice(0,5).map((task)=>(

            <div
              key={task.id}
              className={`today-task-item ${
                task.completed ? "completed" : ""
              }`}
            >

              <span className="today-task-check">

                {task.completed ? "✅" : "⬜"}

              </span>

              <span className="today-task-name">

                {task.text}

              </span>

            </div>

          ))}

        </div>

      )}

      {tasks.length > 5 && (

        <button
          className="view-all"
          onClick={() => navigate("/planner")}
        >

          View All →

        </button>

      )}

    </section>

  );

}

export default TodayTasks;