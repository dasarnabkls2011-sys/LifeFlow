import { useState } from "react";

function EventModal({
  date,
  event,
  close,
  save,
  remove,
}) {

  const [title, setTitle] = useState(
    event?.title || ""
  );

  return (

    <div className="modal-overlay">

      <div className="event-modal">

        <h2>
          {event ? "Edit Event" : "Add Event"}
        </h2>

        <p>Date: {date}</p>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
        />

        <div className="modal-buttons">

          <button
            onClick={() => {
              if (!title.trim()) return;
              save(title);
            }}
          >
            💾 Save
          </button>

          {event && (
            <button
              className="delete-btn"
              onClick={remove}
            >
              🗑 Delete
            </button>
          )}

          <button onClick={close}>
            Cancel
          </button>

        </div>

      </div>

    </div>

  );

}

export default EventModal;