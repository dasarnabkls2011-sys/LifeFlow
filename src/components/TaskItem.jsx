function TaskItem({
  id,
  task,
  completed,
  priority,
  dueDate,
  toggleTask,
  deleteTask,
  startEditing,
}) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />

      <div className="task-info">
        <span className={completed ? "done" : ""}>
          {task}
        </span>

        <span className={`priority ${priority.toLowerCase()}`}>
          {priority}
        </span>

        {dueDate && (
          <span className="due-date">
            📅 {dueDate}
          </span>
        )}
      </div>

      <button
        className="edit-btn"
        onClick={() => startEditing(id, task)}
      >
        ✏️
      </button>

      <button
        className="delete-btn"
        onClick={() => deleteTask(id)}
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;