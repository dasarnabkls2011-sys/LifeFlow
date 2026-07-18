import "../styles/TodayTasks.css";

function TodayTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  return (
    <div className="today-tasks">

      <div className="card-header">
        <h2>📋 Today's Tasks</h2>

        <span>{tasks.length} Tasks</span>
      </div>

      <div className="task-list">

        {tasks.length === 0 ? (

          <p className="empty">
            No tasks for today 🎉
          </p>

        ) : (

          tasks.slice(0, 5).map((task, index) => (

            <div
              key={index}
              className={`task-item ${
                task.completed ? "completed" : ""
              }`}
            >
              <span className="task-check">
                {task.completed ? "✅" : "⬜"}
              </span>

              <span className="task-name">
                {task.title}
              </span>
            </div>

          ))

        )}

      </div>

      {tasks.length > 5 && (

        <button className="view-all">
          View All →
        </button>

      )}

    </div>
  );
}

export default TodayTasks;