function SessionHistory({ history = [] }) {

  return (

    <div className="session-history">

      <h2>🕒 Recent Sessions</h2>

      {history.length === 0 ? (

        <p>No sessions completed yet.</p>

      ) : (

        <div className="history-list">

          {history.slice(0, 5).map((session, index) => (

            <div
              key={index}
              className="history-item"
            >

              <strong>{session.duration} min</strong>

              <span>{session.date}</span>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default SessionHistory;