import { useState } from "react";

import FocusTimer from "../components/FocusTimer";
import GoalProgress from "../components/GoalProgress";
import FocusStats from "../components/FocusStats";
import AmbientSounds from "../components/AmbientSounds";
import FocusQuote from "../components/FocusQuote";
import SessionHistory from "../components/SessionHistory";

import { getFocusData } from "../utils/focusStorage";
import { getSettings } from "../utils/settingsStorage";

import "../styles/focus.css";

function Focus() {

  const [data, setData] = useState(getFocusData());

  const settings = getSettings();

  function refreshFocusData() {

    setData(getFocusData());

  }

  return (

    <main className="content focus-page">

      <h1 className="focus-heading">
        🎯 Focus Mode
      </h1>

      <div className="focus-layout">

        <div className="focus-main">

          <FocusTimer
            onSessionComplete={refreshFocusData}
          />

        </div>

        <div className="focus-side">

          <GoalProgress
            current={data.todayMinutes}
            goal={settings.dailyGoal}
          />

          <FocusStats
            today={data.todayMinutes}
            week={data.weekMinutes}
            streak={data.completedSessions}
          />

        </div>

      </div>

      <div className="focus-bottom">

        <AmbientSounds />

        <FocusQuote />

      </div>

      <SessionHistory
        history={data.history}
      />

    </main>

  );

}

export default Focus;