import "../styles/CalendarPreview.css";

function CalendarPreview() {
  const today = new Date();

  const month = today.toLocaleString("default", {
    month: "long",
  });

  const year = today.getFullYear();

  const day = today.getDate();

  return (
    <div className="calendar-preview">

      <div className="card-header">
        <h2>📅 Calendar</h2>
      </div>

      <div className="calendar-box">

        <h3>
          {month} {year}
        </h3>

        <div className="today-circle">
          {day}
        </div>

        <p>
          Today
        </p>

      </div>

      <button className="open-calendar">
        Open Calendar →
      </button>

    </div>
  );
}

export default CalendarPreview;