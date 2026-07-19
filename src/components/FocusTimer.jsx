import { useState, useEffect } from "react";
import { getFocusData, saveFocusData } from "../utils/focusStorage";
import FocusToast from "./FocusToast";

// =======================
// Developer Mode
// =======================
const DEV_MODE = true; // Change to false before release

function FocusTimer() {

  const DEFAULT_SESSION = 25;

  const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION);

  const [timeLeft, setTimeLeft] = useState(
    DEV_MODE ? 5 : DEFAULT_SESSION * 60
  );

  const [running, setRunning] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function completeSession() {

    const data = getFocusData();

    data.todayMinutes += sessionLength;
    data.weekMinutes += sessionLength;
    data.completedSessions++;

    data.history.unshift({
      date: new Date().toLocaleDateString(),
      duration: sessionLength,
    });

    saveFocusData(data);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  }

  useEffect(() => {

    if (!running) return;

    if (timeLeft <= 0) {

      setRunning(false);

      completeSession();

      return;

    }

    const timer = setTimeout(() => {

      setTimeLeft((prev) => prev - 1);

    }, 1000);

    return () => clearTimeout(timer);

  }, [running, timeLeft]);

  function startTimer() {

    setRunning(true);

  }

  function pauseTimer() {

    setRunning(false);

  }

  function resetTimer() {

    setRunning(false);

    setTimeLeft(
      DEV_MODE ? 5 : sessionLength * 60
    );

  }

  function setPreset(min) {

    setRunning(false);

    setSessionLength(min);

    setTimeLeft(
      DEV_MODE ? 5 : min * 60
    );

  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (

    <div className="focus-timer">

      <h2>Focus Timer</h2>

      <div className="timer-display">

        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}

      </div>

      <div className="timer-controls">

        <button onClick={startTimer}>
          ▶ Start
        </button>

        <button onClick={pauseTimer}>
          ⏸ Pause
        </button>

        <button onClick={resetTimer}>
          ↺ Reset
        </button>

      </div>

      <div className="preset-buttons">

        <button onClick={() => setPreset(25)}>
          25 min
        </button>

        <button onClick={() => setPreset(45)}>
          45 min
        </button>

        <button onClick={() => setPreset(60)}>
          60 min
        </button>

        <button onClick={() => setPreset(90)}>
          90 min
        </button>

      </div>

      <FocusToast
  show={showToast}
  minutes={DEV_MODE ? "5 seconds" : `${sessionLength} minutes`}
/>
    </div>

  );

}

export default FocusTimer;