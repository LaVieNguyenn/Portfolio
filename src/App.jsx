import React from 'react';
import ThemeToggle from './components/chrome/ThemeToggle.jsx';
import useTheme from './hooks/useTheme.js';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import WhatIDo from './components/WhatIDo/WhatIDo.jsx';
import Education from './components/Education/Education.jsx';
import Experiences from './components/Experiences/Experiences.jsx';
import Achievements from './components/Achievements/Achievements.jsx';
import Contact from './components/Contact/Contact.jsx';


export default function App() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <main className="snap-container">
        <Hero />
        <Projects />
        <WhatIDo />
        <Education />
        <Experiences />
        <Achievements />
        <Contact theme={theme} />
      </main>
    </>
  );
}