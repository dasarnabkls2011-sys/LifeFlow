import "../styles/settings.css";
import { useState } from "react";
import {
  getSettings,
  saveSettings,
} from "../utils/settingsStorage";
import {
  exportData,
  importData,
  resetApp,
} from "../utils/dataManager";
function Settings() {

  const [settings, setSettings] = useState(getSettings());

  return (

    <main className="content settings-page">

      <h1 className="settings-heading">
        ⚙️ Settings
      </h1>

      {/* Profile */}

      <section className="settings-card">

        <h2>👤 Profile</h2>

        <label>Name</label>

        <input
          type="text"
          value={settings.name}
          onChange={(e) => {

            const updated = {

              ...settings,
              name: e.target.value,

            };

            setSettings(updated);

            saveSettings(updated);

          }}
        />

        <label>Daily Focus Goal (minutes)</label>

        <input
          type="number"
          value={settings.dailyGoal}
          onChange={(e) => {

            const updated = {

              ...settings,
              dailyGoal: Number(e.target.value),

            };

            setSettings(updated);

            saveSettings(updated);

          }}
        />

      </section>

      {/* Appearance */}

      <section className="settings-card">

        <h2>🎨 Appearance</h2>

        <button>Light</button>
        <button>Dark</button>
        <button>Blue</button>

      </section>

      {/* Notifications */}

      <section className="settings-card">

        <h2>🔔 Notifications</h2>

        <label>

          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => {

              const updated = {

                ...settings,
                notifications: e.target.checked,

              };

              setSettings(updated);

              saveSettings(updated);

            }}
          />

          Enable Timer Notifications

        </label>

        <label>

          <input
            type="checkbox"
            checked={settings.reminders}
            onChange={(e) => {

              const updated = {

                ...settings,
                reminders: e.target.checked,

              };

              setSettings(updated);

              saveSettings(updated);

            }}
          />

          Daily Reminder

        </label>

      </section>

      {/* Data */}

      <section className="settings-card">

        <h2>💾 Data</h2>

        <button onClick={exportData}>

  Export Data

</button>
<>

<input

type="file"

id="import-file"

accept=".json"

style={{display:"none"}}

onChange={(e)=>{

if(e.target.files.length){

importData(e.target.files[0]);

}

}}

/>

<button

onClick={()=>{

document

.getElementById("import-file")

.click();

}}

>

Import Data

</button>

</>

<button

className="danger"

onClick={resetApp}

>

Reset App

</button>
      </section>

      {/* About */}

      <section className="settings-card">

        <h2>ℹ About</h2>

        <p><strong>LifeFlow v1.0</strong></p>

        <p>Built with React + Vite</p>

        <p>Created by Arnab Das</p>

      </section>

    </main>

  );

}

export default Settings;