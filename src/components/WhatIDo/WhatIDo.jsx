// src/sections/WhatIDo.jsx
import React from 'react';
import DenseShapes from '../shapes/DenseShapes.jsx';

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaDatabase,
  FaAws,
  FaFire,
  FaMicrosoft,
} from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

export default function WhatIDo() {
  const techs = [
    { key: 'HTML5',    Icon: FaHtml5,      color: 'text-[#E34F26]' },
    { key: 'CSS3',     Icon: FaCss3Alt,    color: 'text-[#1572B6]' },
    { key: 'Sass',     Icon: FaSass,       color: 'text-[#CC6699]' },
    { key: 'JS',       Icon: FaJs,         color: 'text-[#F7DF1E]' },
    { key: 'React',    Icon: FaReact,      color: 'text-[#61DAFB]' },
    { key: 'Node',     Icon: FaNodeJs,     color: 'text-[#339933]' },
    { key: 'npm',      Icon: FaNpm,        color: 'text-[#CB3837]' },
    { key: 'SQL',      Icon: FaDatabase,   color: 'text-[#4479A1]' }, // generic DB icon
    { key: 'AWS',      Icon: FaAws,        color: 'text-[#FF9900]' },
    { key: 'Firebase', Icon: FaFire,       color: 'text-[#FF8F00]' },  // thay thế brand Firebase
    { key: 'C#',       Icon: TbBrandCSharp, color: 'text-[#239120]' },
    { key: '.NET',     Icon: FaMicrosoft,  color: 'text-[#512BD4]' },
  ];

  return (
    <section className="snap-section relative min-h-screen bg-white text-slate-800 dark:bg-[#141821] dark:text-gray-200 overflow-hidden">
      <DenseShapes seed={55} count={90} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Illustration placeholder */}
        <div className="order-2 md:order-1 grid place-items-center">
          <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 border border-purple-400/30" />
        </div>

        {/* Text & tech icons */}
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-3">What I do</h2>
          <p className="uppercase tracking-wide text-sm text-slate-500 dark:text-slate-300 mb-6">
            Crazy full-stack developer who wants to explore every tech stack
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-8">
            {techs.map(({ key, Icon, color }) => (
              <div
                key={key}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-white/10"
              >
                <Icon className={`text-2xl ${color}`} aria-hidden />
                <span className="text-sm">{key}</span>
              </div>
            ))}
          </div>

          <ul className="space-y-4 text-slate-600 dark:text-slate-300">
            <li>⚡ Build highly interactive UIs for web/mobile apps</li>
            <li>⚡ Progressive Web Apps (PWA) in SPA stacks</li>
            <li>⚡ Integrate 3rd-party services (Firebase / AWS / DigitalOcean)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
