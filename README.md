# LifeFlow

LifeFlow is a productivity application that I'm currently building with React.

The idea behind the project was simple: instead of switching between multiple apps for planning, calendars, focus sessions, and notes, why not bring everything together into one place?

The project is still under active development, but the core features are already functional and new updates are added regularly.

---

## Features

### Calendar
- Monthly calendar view
- Add, edit, and delete events
- Events saved automatically using Local Storage
- Full calendar layout with previous and next month's dates
- Responsive design

### Focus Mode
- Pomodoro timer
- Start, Pause, and Reset controls
- Multiple timer presets
- Session completion notifications
- Local storage-based focus tracking
- Developer mode for quick testing

### Dashboard
- Clean productivity overview
- Quick navigation between different sections
- Designed to integrate live statistics from the app

### Notebook *(Work in Progress)*
A digital notebook inspired by physical notebooks. This section is currently under development.

---

## Built With

- React
- Vite
- JavaScript
- CSS
- Local Storage API

---


## Getting Started

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/LifeFlow.git
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Create a production build

```bash
npm run build
```

---

## Project Structure

```
src
├── assets
├── components
├── pages
├── styles
├── utils
├── App.jsx
└── main.jsx
```

---

## Challenges

Building LifeFlow has been a great learning experience.

One of the biggest challenges was creating the calendar system. Initially, every event appeared in every month because of how the dates were stored. Fixing that required redesigning the event storage system so that each event was linked to its exact date.

Deployment also came with its own challenges. The application worked perfectly during local development, but deployment failed because Linux treats filenames as case-sensitive while Windows does not. Resolving these issues helped me better understand deployment environments and the importance of maintaining consistent file naming.

Throughout development, a lot of time was also spent improving the user interface, fixing layout issues, connecting different components together, and making the application feel more polished.

---

## Current Status

LifeFlow is still under active development.

The Calendar and Focus Mode are fully functional, while several other modules are currently being expanded and refined. The project is updated regularly as new features are added and existing ones are improved.

---

## Future Plans

Some features planned for future versions include:

- Task management
- Habit tracker
- Session history
- Dashboard analytics
- Ambient focus sounds
- AI-powered productivity features
- Cloud synchronization
- Theme customization
- Better animations and UI improvements

---

## Feedback

LifeFlow is a personal learning project, and I'm always open to feedback, suggestions, and ideas for improvement. Feel free to open an issue or submit a pull request if you'd like to contribute.

---

## About Me

I'm **Arnab Das**, a student developer with an interest in software development, science, and technology. LifeFlow is one of my biggest personal projects so far, and I plan to continue improving it over time.

---

If you found this project interesting, consider giving it a ⭐.

Student Developer • Research Enthusiast • UI/UX Explorer

Building projects that combine productivity, design, and technology.

---

⭐ If you like this project, consider giving it a star!
