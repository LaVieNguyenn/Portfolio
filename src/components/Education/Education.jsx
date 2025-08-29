import React from "react";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";

export default function Education() {
  return (
    <section
      id="education"
      className="snap-section relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-[#141821] dark:text-gray-100"
    >
      <DenseShapes seed={21} count={80} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-20">
        <Reveal>
          <h2 className="text-4xl font-bold mb-8">Education</h2>
        </Reveal>
        <div className="rounded-xl border border-slate-300/60 dark:border-slate-700/60 bg-white/70 dark:bg-white/10 p-6">
          <h3 className="text-xl font-semibold">
            FPT University Ho Chi Minh City
          </h3>
          <p className="opacity-80">
            Bachelor of Technology — Software Engineering; GPA 3.2/4
          </p>
          <p className="text-sm opacity-70 mt-1">Nov 2021 — Feb 2025</p>
          <p className="text-sm mt-3 opacity-80">
            Courses: Operating Systems, Data Structures, Algorithms, AI, ML,
            Networking, Databases
          </p>
        </div>
      </div>
    </section>
  );
}
