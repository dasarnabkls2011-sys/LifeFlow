function BookCover({ title, subtitle, author }) {
    return (
      <div className="book-cover">
  
        <div className="gold-frame">
  
          <div className="corner tl"></div>
          <div className="corner tr"></div>
          <div className="corner bl"></div>
          <div className="corner br"></div>
  
          <h1>
            {title}
          </h1>
  
          <h2>
            {subtitle}
          </h2>
  
          <div className="cover-line"></div>
  
          <p>
            {author}
          </p>
  
        </div>
  
      </div>
    );
  }
  
  export default BookCover;