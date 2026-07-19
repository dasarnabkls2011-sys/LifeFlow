const quotes = [

    "Small progress is still progress.",
  
    "Stay focused. Great things take time.",
  
    "Discipline beats motivation.",
  
    "Deep work creates extraordinary results.",
  
    "One session at a time.",
  
  ];
  
  function FocusQuote() {
  
    const quote =
      quotes[new Date().getDate() % quotes.length];
  
    return (
  
      <div className="focus-quote">
  
        <h2>💬 Quote of the Day</h2>
  
        <p>"{quote}"</p>
  
      </div>
  
    );
  
  }
  
  export default FocusQuote;