import { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import "../styles/planner.css";

function Planner() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            text: "Finish Physics Homework",
            completed: false,
            priority: "High",
            dueDate: "",
          },
          {
            id: 2,
            text: "Revise Chemistry",
            completed: true,
            priority: "Medium",
            dueDate: "",
          },
        ];
  });

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("Low");
  const [newDueDate, setNewDueDate] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function addTask() {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      priority: newPriority,
      dueDate: newDueDate,
    };

    setTasks([...tasks, task]);
    setNewTask("");
    setNewPriority("Low");
    setNewDueDate("");
  }

  function startEditing(id, text) {
    setEditingId(id);
    setEditingText(text);
  }

  function saveTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: editingText }
          : task
      )
    );

    setEditingId(null);
    setEditingText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <main className="content">
      <h1>Planner</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <input
          type="date"
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
        />

        <button onClick={addTask}>
          Add
        </button>
      </div>

      <p>
        Completed {completedTasks} / {tasks.length}
      </p>

      {tasks.map((task) =>
        editingId === task.id ? (
          <div key={task.id} className="task-item">
            <input
              value={editingText}
              onChange={(e) =>
                setEditingText(e.target.value)
              }
            />

            <button
              onClick={() => saveTask(task.id)}
            >
              Save
            </button>
          </div>
        ) : (
          <TaskItem
            key={task.id}
            id={task.id}
            task={task.text}
            completed={task.completed}
            priority={task.priority}
            dueDate={task.dueDate}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            startEditing={startEditing}
          />
        )
      )}
    </main>
  );
}

export default Planner;