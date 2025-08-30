// src/sections/WhatIDo.jsx
import React from "react";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";
import IconByName from "../common/IconByName.jsx";
import useTypewriterCycle from "../common/useTypewriterCycle.jsx";

// Kỹ năng theo CV/GitHub
const STACK = [
  // .NET / C#
  "C#", ".NET", "ASP.NET Core", "EF Core",
  // Web languages
  "HTML5", "CSS3", "Sass", "JavaScript", "TypeScript",
  // FE frameworks/libs
  "React", "Angular", "RxJS", "NgRx",
  // DB / cache
  "SQL Server", "PostgreSQL", "MySQL", "SQLite", "MongoDB",
  // Cloud / DevOps
  "AWS", "Firebase", "Azure", "Azure DevOps", "GitHub Actions", "Docker",
  // UI / tooling
  "Tailwind", "Bootstrap", "npm",
];

const DISPLAY = STACK.map((label) => ({ label, key: label.toLowerCase() }));

export default function WhatIDo() {
  const typed = useTypewriterCycle(["Now or never!", "Let's Go!!"], {
    typeMs: 55,
    eraseMs: 28,
    pauseMs: 1100,
  });

  return (
    <section
      id="what-i-do"
      className="snap-section relative min-h-[100svh] overflow-hidden bg-white dark:bg-[#141821]"
    >
      {/* SHAPES — đặt trước để nội dung vẽ đè lên, không cần z-index âm */}
      <div className="absolute inset-0 pointer-events-none">
        <DenseShapes seed={8} count={120} />
      </div>

      {/* CONTENT (căn giữa) */}
      <div className="min-h-[100svh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-[minmax(320px,560px)_1fr] gap-10 items-center">
          
          {/* LEFT — Terminal typing */}
          <Reveal>
            <div
              className="rounded-3xl overflow-hidden border shadow-xl
                         border-slate-200/70 dark:border-white/10
                         bg-white/90 dark:bg-slate-900/85
                         backdrop-blur supports-[backdrop-filter]:backdrop-blur-md"
              aria-label="demo terminal"
            >
              <div
                className="h-10 flex items-center gap-2 px-4 border-b
                           border-slate-200/70 dark:border-white/10
                           bg-slate-50/80 dark:bg-white/5"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-red-400/90" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-400/90" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-400/90" />
                <div className="ml-3 text-xs text-slate-600 dark:text-slate-300">
                  terminal — bash
                </div>
              </div>
              <div className="p-5 md:p-7">
                <pre className="font-mono text-[15px] md:text-[16px] leading-7 text-slate-800 dark:text-slate-100">
                  {`$ `}<span className="opacity-90">{typed}</span><span className="animate-pulse">▌</span>
                  {"\n"}$ echo "Build. Ship. Improve."
                </pre>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Title + chips + bullets */}
          <div className="flex flex-col items-start justify-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white">
                What I do
              </h2>
            </Reveal>

            <p className="mb-6 text-slate-600 dark:text-slate-300">
              CRAZY FULL-STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>

            {/* Card nền mờ nhẹ để chip rõ nét nhưng vẫn thấy shapes */}
            <div className="relative mb-6">
              <div
                className="absolute -inset-3 rounded-2xl shadow-lg
                           bg-white/95 dark:bg-slate-900/90"
                aria-hidden="true"
              />
              <div className="relative flex flex-wrap gap-3 max-w-2xl">
                {DISPLAY.map(({ label, key }) => (
                  <span
                    key={key}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl
                               border shadow-sm
                               bg-white text-slate-800 border-slate-200
                               dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
                  >
                    <IconByName name={key} className="text-[18px]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>⚡ Build highly interactive UIs for web/mobile apps</li>
              <li>⚡ Progressive Web Apps (PWA) in SPA stacks</li>
              <li>⚡ Integrate 3rd-party services (Firebase / AWS / Azure / DigitalOcean)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
