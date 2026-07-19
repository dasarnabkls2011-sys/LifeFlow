function FocusStats({

    today = 0,
    week = 0,
    streak = 0,
  
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
            <h3>Streak</h3>
            <p>{streak} days</p>
          </div>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default FocusStats;