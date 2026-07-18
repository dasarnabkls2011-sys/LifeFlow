import { useState, useEffect } from "react";
import "../styles/habits.css";

function Habits() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Read Physics",
            completed: false,
            streak: 12,
          },
          {
            id: 2,
            name: "Workout",
            completed: false,
            streak: 5,
          },
        ];
  });

  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  function addHabit() {
    if (newHabit.trim() === "") return;

    const habit = {
      id: Date.now(),
      name: newHabit,
      completed: false,
      streak: 0,
    };

    setHabits([...habits, habit]);
    setNewHabit("");
  }

  function toggleHabit(id) {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
              streak: !habit.completed
                ? habit.streak + 1
                : Math.max(habit.streak - 1, 0),
            }
          : habit
      )
    );
  }

  function deleteHabit(id) {
    setHabits(
      habits.filter((habit) => habit.id !== id)
    );
  }

  return (
    <main className="content">
      <h1>Habit Tracker</h1>

      <div className="habit-input">
        <input
          type="text"
          placeholder="Add a habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addHabit();
            }
          }}
        />

        <button onClick={addHabit}>
          Add Habit
        </button>
      </div>

      {habits.map((habit) => (
        <div
          key={habit.id}
          className="habit-card"
        >
          <div className="habit-header">
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleHabit(habit.id)}
            />

            <h3>{habit.name}</h3>
          </div>

          <p>🔥 Streak: {habit.streak}</p>

          <button
            className="delete-habit"
            onClick={() => deleteHabit(habit.id)}
          >
            🗑 Delete
          </button>
        </div>
      ))}
    </main>
  );
}

export default Habits;