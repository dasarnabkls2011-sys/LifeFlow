import "../styles/greeting.css";

function Greeting() {

  const hour = new Date().getHours();

  let greeting = "Hello";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 18) greeting = "Good Afternoon 🌤️";
  else greeting = "Good Evening 🌙";

  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (

    <div className="greeting-card">

      <div>

        <h1>{greeting}</h1>

        <p className="greeting-text">
          Ready to make today productive?
        </p>

        <span className="greeting-date">
          {today}
        </span>

      </div>

    </div>

  );

}

export default Greeting;