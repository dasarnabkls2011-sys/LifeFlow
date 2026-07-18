function FlipPage({
    side,
    page,
    pageNumber,
    flipping
  }) {
    return (
      <div
        className={`flip-page ${side} ${
          flipping ? "active" : ""
        }`}
      >
        <div className="page-number">
          {pageNumber}
        </div>
  
        <div className="paper">
          {page?.content || ""}
        </div>
      </div>
    );
  }
  
  export default FlipPage;