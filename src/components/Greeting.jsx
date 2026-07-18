function Greeting() {

    const hour = new Date().getHours();
  
    let greeting = "Hello";
  
    if (hour < 12) greeting = "Good Morning ☀️";
    else if (hour < 18) greeting = "Good Afternoon 🌤️";
    else greeting = "Good Evening 🌙";
  
    return (
      <div className="greeting">
        <h1>{greeting}</h1>
  
        <p>
          Ready to make today productive?
        </p>
      </div>
    );
  }
  
  export default Greeting;