function FocusStats({

  today,
  week,
  streak,

}) {

  return (

    <div className="focus-stats">

      <h2>📊 Statistics</h2>

      <div className="stats-grid">

        <div className="stat-box">
          <h3>Today</h3>
          <p>{today} min</p>
        </div>

        <div className="stat-box">
          <h3>This Week</h3>
          <p>{week} min</p>
        </div>

        <div className="stat-box">
          <h3>Sessions</h3>
          <p>{streak}</p>
        </div>

      </div>

    </div>

  );

}

export default FocusStats;