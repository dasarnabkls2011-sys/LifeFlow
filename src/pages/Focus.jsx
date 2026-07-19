import FocusTimer from "../components/FocusTimer";
import GoalProgress from "../components/GoalProgress";
import FocusStats from "../components/FocusStats";
import AmbientSounds from "../components/AmbientSounds";
import FocusQuote from "../components/FocusQuote";
import SessionHistory from "../components/SessionHistory";

import "../styles/focus.css";

function Focus() {

  return (

    <main className="content focus-page">

      <h1 className="focus-heading">
        🎯 Focus Mode
      </h1>

      <div className="focus-layout">

        <div className="focus-main">
          <FocusTimer />
        </div>

        <div className="focus-side">

          <GoalProgress
            current={0}
            goal={180}
          />

          <FocusStats
            today={0}
            week={0}
            streak={0}
          />

        </div>

      </div>

      <div className="focus-bottom">

        <AmbientSounds />

        <FocusQuote />

      </div>

      <SessionHistory />

    </main>

  );

}

export default Focus;