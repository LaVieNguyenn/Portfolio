// src/sections/WhatIDo.jsx
import React from "react";
import { motion } from "framer-motion";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";
import IconByName from "../common/IconByName.jsx";
import useTypewriterCycle from "../common/useTypewriterCycle.jsx";

// Danh sách kỹ năng theo CV/GitHub của bạn
const STACK = [
  // .NET / C#
  "C#",
  ".NET",
  "ASP.NET Core",
  "EF Core",
  // Web languages
  "HTML5",
  "CSS3",
  "Sass",
  "JavaScript",
  "TypeScript",
  // Frontend frameworks/libs
  "React",
  "Angular",
  "RxJS",
  "NgRx",
  // Database / cache / queue
  "SQL Server",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "MongoDB",
  // Cloud / DevOps / CI
  "AWS",
  "Firebase",
  "Azure",
  "Azure DevOps",
  "GitHub Actions",
  "Docker",
  // UI / tooling
  "Tailwind",
  "Bootstrap",
  "npm",
];

const DISPLAY = STACK.map((label) => ({
  label,
  key: label.toLowerCase(), // IconByName chuẩn hoá key tương tự
}));

export default function WhatIDo() {
  const typed = useTypewriterCycle(["Now or never!", "Let's Go!!"], {
    typeMs: 55,
    eraseMs: 28,
    pauseMs: 1100,
  });

  return (
    <section
      id="what-i-do"
      className="snap-section relative min-h-[100svh] overflow-hidden
                 flex items-center transition-colors
                 bg-white dark:bg-[#141821]"
    >
      {/* Shapes nền tuyệt đối để không đẩy layout */}
      <div className="absolute inset-0 pointer-events-none">
        <DenseShapes seed={8} count={120} />
      </div>

      {/* Nội dung */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Terminal typing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[min(560px,90vw)] h-[360px] rounded-3xl overflow-hidden shadow-2xl
                       border border-slate-900/10 dark:border-white/10
                       bg-white/70 dark:bg-white/5 backdrop-blur-md relative"
          >
            {/* header của “cửa sổ” terminal */}
            <div
              className="h-10 flex items-center gap-2 px-4 border-b
                         border-slate-900/10 dark:border-white/10
                         bg-slate-900/5 dark:bg-black/20"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-red-400/90" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-400/90" />
              <span className="w-3.5 h-3.5 rounded-full bg-green-400/90" />
              <div className="ml-3 text-xs text-slate-700 dark:text-slate-300">
                terminal — bash
              </div>
            </div>

            {/* thân terminal */}
            <div className="pt-12 px-5">
              <pre
                className="font-mono text-[15px] leading-7
                           text-slate-800 dark:text-slate-100"
              >
                {`$ `}
                <span className="opacity-90">{typed}</span>
                <span className="animate-pulse">▌</span>
                {"\n"}$ echo "Build. Ship. Improve."
              </pre>
            </div>

            {/* ánh gradient nhẹ */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-cyan-400/10" />
          </motion.div>

          {/* RIGHT: Title + chips + bullets */}
          <div className="w-full flex flex-col items-start justify-center">
            <Reveal>
              <h2
                className="text-3xl md:text-4xl font-bold mb-2
                             text-slate-900 dark:text-white"
              >
                What I do
              </h2>
            </Reveal>

            <p className="mb-6 text-slate-600 dark:text-slate-300">
              CRAZY FULL-STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>

            {/* Chips kỹ năng */}
            <div className="flex flex-wrap gap-3 max-w-2xl">
              {DISPLAY.map(({ label, key }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl
                             border transition
                             bg-slate-900/5  border-slate-900/10  text-slate-800
                             dark:bg-white/5  dark:border-white/10 dark:text-slate-100"
                >
                  <IconByName name={key} />
                  {label}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
              <li>⚡ Build highly interactive UIs for web/mobile apps</li>
              <li>⚡ Progressive Web Apps (PWA) in SPA stacks</li>
              <li>
                ⚡ Integrate 3rd-party services (Firebase / AWS / Azure /
                DigitalOcean)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
