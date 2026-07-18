import "../styles/dashboard.css";
import Greeting from "../components/Greeting";
import QuickActions from "../components/QuickActions";
import StatCard from "../components/StatCard";
import TodayTasks from "../components/TodayTasks";
import RecentNotes from "../components/RecentNotes";
import HabitProgress from "../components/HabitProgress";
import CalendarPreview from "../components/CalendarPreview";
import FocusWidget from "../components/FocusWidget";

function Dashboard() {
  const tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  const habits =
    JSON.parse(localStorage.getItem("habits")) || [];

  const totalTasks = tasks.length;

  const completedTasks =
    tasks.filter(task => task.completed).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const bestStreak =
    habits.length === 0
      ? 0
      : Math.max(...habits.map(habit => habit.streak));

  return (
    <main className="content">

      <Greeting />

      <QuickActions />

      <div className="cards">

        <StatCard
          title="Today's Tasks"
          value={totalTasks}
          icon="📋"
        />

        <StatCard
          title="Habit Streak"
          value={`${bestStreak} Days`}
          icon="🔥"
        />

        <StatCard
          title="Focus Time"
          value="0 min"
          icon="⏱️"
        />

        <StatCard
          title="Completed"
          value={`${completionRate}%`}
          icon="✅"
        />

      </div>

      <div className="dashboard-grid">

    <TodayTasks />

    <RecentNotes />

    <HabitProgress />

    <CalendarPreview />

    <FocusWidget />

</div>

    </main>
  );
}

export default Dashboard;