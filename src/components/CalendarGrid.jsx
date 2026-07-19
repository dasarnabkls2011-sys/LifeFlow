import CalendarDay from "./CalendarDay";

function CalendarGrid({
  month,
  year,
  today,
  events,
  onDayClick,
}) {

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells = [];

  // Previous month's days
  for (let i = firstDay - 1; i >= 0; i--) {

    const day = prevMonthDays - i;

    cells.push(
      <CalendarDay
        key={`prev-${day}`}
        day={day}
        isOtherMonth={true}
        onClick={() => {}}
      />
    );

  }

  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {

    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    const dateKey =
      `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    cells.push(

      <CalendarDay
        key={dateKey}
        day={day}
        isToday={isToday}
        event={events[dateKey]}
        onClick={() => onDayClick(day)}
      />

    );

  }

  // Next month's days
  let nextDay = 1;

  while (cells.length < 42) {

    cells.push(
      <CalendarDay
        key={`next-${nextDay}`}
        day={nextDay}
        isOtherMonth={true}
        onClick={() => {}}
      />
    );

    nextDay++;

  }

  return (

    <div className="calendar-grid">

<div className="weekdays">
  <div className="weekday">Sun</div>
  <div className="weekday">Mon</div>
  <div className="weekday">Tue</div>
  <div className="weekday">Wed</div>
  <div className="weekday">Thu</div>
  <div className="weekday">Fri</div>
  <div className="weekday">Sat</div>
</div>

      <div className="days">

        {cells}

      </div>

    </div>

  );

}

export default CalendarGrid;