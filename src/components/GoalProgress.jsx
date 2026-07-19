function GoalProgress({

    current = 0,
    goal = 180,
  
  }) {
  
    const percentage = Math.min(
      Math.round((current / goal) * 100),
      100
    );
  
    return (
  
      <div className="goal-progress">
  
        <h2>🎯 Daily Goal</h2>
  
        <div className="progress-bar">
  
          <div
            className="progress-fill"
            style={{
              width: `${percentage}%`,
            }}
          ></div>
  
        </div>
  
        <p>
  
          {current} / {goal} min ({percentage}%)
  
        </p>
  
      </div>
  
    );
  
  }
  
  export default GoalProgress;