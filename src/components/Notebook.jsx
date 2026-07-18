import { useState, useEffect } from "react";
import NotebookPage from "./NotebookPage";
import FlipPage from "./FlipPage";
import Spine from "./Spine";
import "../styles/notebook.css";

const TOTAL_PAGES = 100;

function Notebook() {
  const [title, setTitle] = useState(
    localStorage.getItem("notebookTitle") || "Physics Notebook"
  );

  const [pages, setPages] = useState(() => {
    const saved = localStorage.getItem("notebook");

    if (saved) return JSON.parse(saved);

    return Array.from({ length: TOTAL_PAGES }, (_, i) => ({
      id: i,
      content: "",
    }));
  });

  const [spread, setSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);

  useEffect(() => {
    localStorage.setItem("notebook", JSON.stringify(pages));
  }, [pages]);

  useEffect(() => {
    localStorage.setItem("notebookTitle", title);
  }, [title]);

  function updatePage(index, value) {
    const updated = [...pages];
    updated[index].content = value;
    setPages(updated);
  }

  const left = spread * 2;
  const right = left + 1;

  return (
    <div className="notebook">

      <div className="notebook-header">
        <input
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="book">

        <NotebookPage
          side="left"
          page={pages[left]}
          pageNumber={left + 1}
          updatePage={(v) => updatePage(left, v)}
        />

        <Spine />

        <NotebookPage
          side="right"
          page={pages[right]}
          pageNumber={right + 1}
          updatePage={(v) => updatePage(right, v)}
        />

        {isFlipping && (
          <FlipPage
            side={flipDirection === "next" ? "right" : "left"}
            page={
              flipDirection === "next"
                ? pages[right]
                : pages[left]
            }
            pageNumber={
              flipDirection === "next"
                ? right + 1
                : left + 1
            }
            flipping={true}
          />
        )}

      </div>

      <div className="page-controls">

        <button
          disabled={spread === 0 || isFlipping}
          onClick={() => {
            setFlipDirection("previous");
            setIsFlipping(true);

            setTimeout(() => {
              setSpread((s) => s - 1);
              setIsFlipping(false);
              setFlipDirection(null);
            }, 600);
          }}
        >
          ◀ Previous
        </button>

        <span>
          {left + 1} - {right + 1}
        </span>

        <button
          disabled={right >= TOTAL_PAGES - 2 || isFlipping}
          onClick={() => {
            setFlipDirection("next");
            setIsFlipping(true);

            setTimeout(() => {
              setSpread((s) => s + 1);
              setIsFlipping(false);
              setFlipDirection(null);
            }, 600);
          }}
        >
          Next ▶
        </button>

      </div>

    </div>
  );
}

export default Notebook;