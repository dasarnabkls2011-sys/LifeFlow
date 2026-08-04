import "../styles/RecentNotes.css";

function RecentNotes() {

  const pages =
    JSON.parse(localStorage.getItem("notebook")) || [];

  const notes = pages
    .filter(page => page.content.trim() !== "")
    .slice(0, 5);

  return (

    <section className="recent-notes">

      <div className="card-header">

        <div>

          <h2>📖 Recent Notes</h2>

          <p className="card-subtitle">
            Your latest ideas and thoughts
          </p>

        </div>

        <span className="note-count">

          {notes.length} Notes

        </span>

      </div>

      {notes.length === 0 ? (

        <div className="empty">

          <div className="empty-icon">
            📘
          </div>

          <h3>No Notes Yet</h3>

          <p>
            Your recent notes will appear here.
          </p>

        </div>

      ) : (

        <div className="notes-list">

          {notes.map(page => (

            <div
              key={page.id}
              className="note-item"
            >

              <div className="note-top">

                <h4>

                  📄 Page {page.id + 1}

                </h4>

              </div>

              <p>

                {page.content.substring(0, 80)}

                {page.content.length > 80 && "..."}

              </p>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}

export default RecentNotes;