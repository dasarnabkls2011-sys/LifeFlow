import "../styles/HabitProgress.css";

function HabitProgress() {

  const habits =
    JSON.parse(localStorage.getItem("habits")) || [];

  return (
    <div className="habit-progress">

      <div className="card-header">
        <h2>🔥 Habit Progress</h2>
      </div>

      {habits.length === 0 ? (

        <p className="empty">
          No habits yet.
        </p>

      ) : (

        habits.slice(0,5).map((habit,index)=>(

          <div
            key={index}
            className="habit-row"
          >

            <div className="habit-top">

              <span>{habit.name}</span>

              <span>{habit.streak} 🔥</span>

            </div>

            <div className="progress">

              <div
                className="progress-fill"
                style={{
                  width: `${Math.min(habit.streak*10,100)}%`
                }}
              />

            </div>

          </div>

        ))

      )}

    </div>
  );

}

export default HabitProgress;