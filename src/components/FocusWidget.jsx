import "../styles/FocusWidget.css";

function FocusWidget() {

  const sessions =
    JSON.parse(localStorage.getItem("focusSessions")) || [];

  const totalMinutes =
    sessions.reduce((sum, s) => sum + (s.duration || 0), 0);

  return (
    <div className="focus-widget">

      <div className="card-header">

        <h2>🎯 Focus</h2>

      </div>

      <div className="focus-time">

        <h1>{totalMinutes} min</h1>

        <p>Total Focus Today</p>

      </div>

      <button className="focus-btn">

        Start Focus →

      </button>

    </div>
  );
}

export default FocusWidget;