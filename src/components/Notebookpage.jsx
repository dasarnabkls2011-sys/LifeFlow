import React from "react";

function NotebookPage({ side, page, pageNumber, updatePage }) {
  return (
    <div className={`notebook-page ${side}`}>
      <div className="page-number">
        {pageNumber}
      </div>

      <textarea
        className="paper"
        placeholder="Start writing..."
        value={page?.content || ""}
        onChange={(e) => updatePage(e.target.value)}
      />
    </div>
  );
}

export default NotebookPage;