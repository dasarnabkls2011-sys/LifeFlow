import "../styles/RecentNotes.css";

function RecentNotes() {
  const pages =
    JSON.parse(localStorage.getItem("notebook")) || [];

  const notes = pages
    .filter(page => page.content.trim() !== "")
    .slice(0, 5);

  return (
    <div className="recent-notes">

      <div className="card-header">
        <h2>📖 Recent Notes</h2>

        <span>{notes.length} Notes</span>
      </div>

      {notes.length === 0 ? (

        <p className="empty">
          No notes yet.
        </p>

      ) : (

        <div className="notes-list">

          {notes.map(page => (

            <div
              key={page.id}
              className="note-item"
            >

              <h4>Page {page.id + 1}</h4>

              <p>
                {page.content.substring(0, 80)}
                {page.content.length > 80 ? "..." : ""}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default RecentNotes;