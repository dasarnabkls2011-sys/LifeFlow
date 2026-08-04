const DEFAULT_SETTINGS = {

    name: "Arnab",
  
    dailyGoal: 180,
  
    notifications: true,
  
    reminders: true,
  
  };
  
  export function getSettings() {
  
    const saved = localStorage.getItem("lifeflowSettings");
  
    if (!saved) {
  
      return DEFAULT_SETTINGS;
  
    }
  
    return JSON.parse(saved);
  
  }
  
  export function saveSettings(settings) {
  
    localStorage.setItem(
  
      "lifeflowSettings",
  
      JSON.stringify(settings)
  
    );
  
  }