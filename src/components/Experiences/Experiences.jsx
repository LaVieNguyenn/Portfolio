import React from "react";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";
import FsoftLogo from "../../assets/logos/FSoft_logo.png";
import LUKGlobalLogo from "../../assets/logos/LUKGlobal_logo.png";

const EXP = [
  {
    title: ".NET Developer Intern",
    company: "FPT Software (On-site)",
    time: "Sep 2024 — Dec 2024",
    logo: FsoftLogo,
    bullets: [
      "Synthesized input/output requirements from SRS to keep scope & acceptance clear",
      "Contributed features & fixes using .NET tech to deliver efficient, reliable components",
      "Facilitated weekly Scrum meetings to set priorities & review progress",
    ],
  },
  {
    title: "Operations Team Member",
    company: "LUK Global Saigon Campus (HCMC)",
    time: "Oct 2022 — Jan 2024",
    logo: LUKGlobalLogo,
    bullets: [
      "Managed and operated English activities in a professional environment.",
      "Coordinated with 15+ international trainers.",
      "Organized debate/presentation activities to enhance public speaking & critical thinking.",
    ],
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="snap-section relative min-h-screen overflow-hidden
                 bg-white text-slate-900 dark:bg-[#0f1420] dark:text-gray-100"
    >
      {/* Shapes nền */}
      <div className="absolute inset-0 pointer-events-none">
        <DenseShapes seed={31} count={90} />
      </div>

      {/* Nội dung */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20">
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">Experiences</h2>
        </Reveal>

        <ol
          className="
            relative pl-8 space-y-8
            before:absolute before:left-3 before:top-0 before:bottom-0
            before:w-px before:bg-slate-300/60 dark:before:bg-slate-700/60
          "
          aria-label="Work experience timeline"
        >
          {EXP.map((x, i) => (
            <Reveal key={i}>
              <li className="relative">
                {/* Dot timeline */}
                <span
                  className="
                    absolute -left-0.5 top-2 w-4 h-4 rounded-full
                    bg-cyan-500 ring-4 ring-cyan-500/25
                  "
                  aria-hidden="true"
                />

                {/* Card */}
                <div
                  className="
                    rounded-2xl border border-slate-300/60 dark:border-slate-700/60
                    bg-white/75 dark:bg-white/10 backdrop-blur-md
                    shadow-lg p-6 flex gap-4
                  "
                >
                  {x.logo && (
                    <img
                      alt={`${x.company} logo`}
                      src={x.logo}
                      className="w-12 h-12 rounded-md object-contain shrink-0"
                    />
                  )}

                  <div>
                    <h3 className="text-lg font-semibold">
                      {x.title}{" "}
                      <span className="opacity-70">— {x.company}</span>
                    </h3>
                    <p className="text-sm opacity-70 mb-2">{x.time}</p>

                    <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
                      {x.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
