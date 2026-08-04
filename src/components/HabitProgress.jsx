import "../styles/HabitProgress.css";

function HabitProgress() {

  const habits =
    JSON.parse(localStorage.getItem("habits")) || [];

  return (

    <section className="habit-progress">

      <div className="card-header">

        <div>

          <h2>🌱 Habit Progress</h2>

          <p className="card-subtitle">
            Keep your streak alive.
          </p>

        </div>

      </div>

      {habits.length === 0 ? (

        <div className="empty">

          <div className="empty-icon">
            🌿
          </div>

          <h3>No Habits Yet</h3>

          <p>
            Start building healthy routines today.
          </p>

        </div>

      ) : (

        <div className="habit-list">

          {habits.slice(0, 5).map((habit, index) => (

            <div
              key={index}
              className="habit-row"
            >

              <div className="habit-top">

                <span className="habit-name">
                  {habit.name}
                </span>

                <span className="habit-streak">
                  🔥 {habit.streak}
                </span>

              </div>

              <div className="progress">

                <div
                  className="progress-fill"
                  style={{
                    width: `${Math.min(habit.streak * 10, 100)}%`
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}

export default HabitProgress;