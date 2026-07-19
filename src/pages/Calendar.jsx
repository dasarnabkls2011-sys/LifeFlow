import { useState, useEffect } from "react";
import CalendarHeader from "../components/CalendarHeader";
import CalendarGrid from "../components/CalendarGrid";
import EventModal from "../components/EventModal";
import "../styles/Calendar.css";

function Calendar() {

  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem("calendarEvents")) || {};
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "calendarEvents",
      JSON.stringify(events)
    );
  }, [events]);

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });

  function previousMonth() {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  }

  function getDateKey(day) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  return (
    <main className="content calendar-page">

      <CalendarHeader
        monthName={monthName}
        year={year}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
      />

      <CalendarGrid
        month={month}
        year={year}
        today={today}
        events={events}
        onDayClick={(day) => {
          setSelectedDate(day);
          setShowModal(true);
        }}
      />

      {showModal && (
        <EventModal
          date={selectedDate}
          event={events[getDateKey(selectedDate)]}
          close={() => setShowModal(false)}

          save={(title) => {

            const key = getDateKey(selectedDate);

            setEvents({
              ...events,
              [key]: {
                title,
              },
            });

            setShowModal(false);

          }}

          remove={() => {

            const key = getDateKey(selectedDate);

            const updated = { ...events };

            delete updated[key];

            setEvents(updated);

            setShowModal(false);

          }}
        />
      )}

    </main>
  );
}

export default Calendar;
