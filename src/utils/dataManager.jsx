import { getFocusData } from "./focusStorage";
import { getSettings } from "./settingsStorage";

export function exportData() {

  const data = {

    version: "1.0",

    exportedAt: new Date().toISOString(),

    focus: getFocusData(),

    settings: getSettings(),

    planner: JSON.parse(localStorage.getItem("planner")) || [],

    calendar: JSON.parse(localStorage.getItem("calendarEvents")) || {},

    notebook: JSON.parse(localStorage.getItem("notebook")) || [],

    tasks: JSON.parse(localStorage.getItem("tasks")) || [],

    habits: JSON.parse(localStorage.getItem("habits")) || []

  };

  const blob = new Blob(

    [JSON.stringify(data, null, 2)],

    {

      type: "application/json"

    }

  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = `LifeFlow_Backup_${new Date().toISOString().slice(0,10)}.json`;

  a.click();

  URL.revokeObjectURL(url);

}

export function importData(file){

  const reader = new FileReader();

  reader.onload = (event)=>{

    try{

      const data = JSON.parse(event.target.result);

      if(data.focus){

        localStorage.setItem(

          "focusData",

          JSON.stringify(data.focus)

        );

      }

      if(data.settings){

        localStorage.setItem(

          "lifeflowSettings",

          JSON.stringify(data.settings)

        );

      }

      if(data.planner){

        localStorage.setItem(

          "planner",

          JSON.stringify(data.planner)

        );

      }

      if(data.calendar){

        localStorage.setItem(

          "calendarEvents",

          JSON.stringify(data.calendar)

        );

      }

      if(data.notebook){

        localStorage.setItem(

          "notebook",

          JSON.stringify(data.notebook)

        );

      }

      if(data.tasks){

        localStorage.setItem(

          "tasks",

          JSON.stringify(data.tasks)

        );

      }

      if(data.habits){

        localStorage.setItem(

          "habits",

          JSON.stringify(data.habits)

        );

      }

      alert("Backup restored successfully!");

      window.location.reload();

    }

    catch(error){

      console.error(error);

      alert("Invalid backup file.");

    }

  };

  reader.readAsText(file);

}

export function resetApp() {

  const confirmReset = window.confirm(

    "This will permanently delete all your LifeFlow data.\n\nDo you want to continue?"

  );

  if (!confirmReset) return;

  localStorage.removeItem("focusData");

  localStorage.removeItem("lifeflowSettings");

  localStorage.removeItem("planner");

  localStorage.removeItem("calendarEvents");

  localStorage.removeItem("notebook");

  localStorage.removeItem("tasks");

  localStorage.removeItem("habits");

  alert("LifeFlow has been reset successfully.");

  window.location.reload();

}