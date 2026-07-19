import "../styles/Calendar.css";

function CalendarHeader({
  monthName,
  year,
  previousMonth,
  nextMonth,
}) {
  return (
    <div className="calendar-header">

      <button
        className="calendar-nav-btn"
        onClick={previousMonth}
      >
        ◀
      </button>

      <div className="calendar-title">

        <h1>{monthName}</h1>

        <span>{year}</span>

      </div>

      <button
        className="calendar-nav-btn"
        onClick={nextMonth}
      >
        ▶
      </button>

    </div>
  );
}

export default CalendarHeader;