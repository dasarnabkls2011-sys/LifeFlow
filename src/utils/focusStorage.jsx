const DEFAULT_DATA = {

    todayMinutes: 0,
  
    weekMinutes: 0,
  
    completedSessions: 0,
  
    streak: 0,
  
    dailyGoal: 180,
  
    history: [],
  
  };
  
  export function getFocusData() {
  
    return (
      JSON.parse(localStorage.getItem("focusData")) ||
      DEFAULT_DATA
    );
  
  }
  
  export function saveFocusData(data) {
  
    localStorage.setItem(
      "focusData",
      JSON.stringify(data)
    );
  
  }