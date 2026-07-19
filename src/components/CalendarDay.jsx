function CalendarDay({
  day,
  isToday,
  event,
  onClick,
  isOtherMonth,
}) {

  return (

    <div
      className={`calendar-day
        ${isToday ? "today" : ""}
        ${isOtherMonth ? "other-month" : ""}`}
      onClick={onClick}
    >

      <span className="day-number">
        {day}
      </span>

      {event && (

        <div className="event-item">

          <span className="event-dot"></span>

          <span className="event-title">
            {event.title}
          </span>

        </div>

      )}

    </div>

  );

}

export default CalendarDay;