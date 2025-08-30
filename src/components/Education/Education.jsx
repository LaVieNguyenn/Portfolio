import React from "react";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";

const EDU = [
  {
    school: "FPT University — Ho Chi Minh City",
    degree: "Bachelor of Technology • Software Engineering",
    gpa: "GPA 3.2 / 4.0",
    time: "Nov 2021 — Feb 2025",
    courses:
      "Operating Systems, Data Structures, Algorithms, AI, ML, Networking, Databases",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="snap-section relative min-h-screen overflow-hidden
                 bg-white text-slate-900 dark:bg-[#141821] dark:text-gray-100"
    >
      {/* Shapes nền: tuyệt đối để không đẩy layout */}
      <div className="absolute inset-0 pointer-events-none">
        <DenseShapes seed={21} count={80} />
      </div>

      {/* Nội dung */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20">
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Education</h2>
        </Reveal>

        <ol
          className="
            relative pl-8
            before:absolute before:left-3 before:top-0 before:bottom-0
            before:w-px before:bg-slate-300/60 dark:before:bg-slate-700/60
          "
          aria-label="Education timeline"
        >
          {EDU.map((e, i) => (
            <Reveal key={i}>
              <li className="relative mb-10 last:mb-0">
                {/* Dot timeline */}
                <span
                  className="
                    absolute -left-0.5 top-1 w-4 h-4 rounded-full
                    bg-violet-500 ring-4 ring-violet-500/25
                  "
                  aria-hidden="true"
                />

                {/* Card nội dung */}
                <div
                  className="
                    rounded-2xl border border-slate-300/60 dark:border-slate-700/60
                    bg-white/75 dark:bg-white/10 backdrop-blur-md
                    shadow-lg p-6
                  "
                >
                  <h3 className="text-xl font-semibold">{e.school}</h3>
                  <p className="mt-1 opacity-90">{e.degree}</p>

                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">
                      {e.gpa}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20">
                      {e.time}
                    </span>
                  </div>

                  <p className="mt-4 text-sm opacity-80 leading-relaxed">
                    <span className="font-medium">Courses: </span>
                    {e.courses}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
