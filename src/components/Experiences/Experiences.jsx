import React from "react";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";
import FsoftLogo from "../../assets/logos/FSoft_logo.png";
import LUKGlobalLogo from "../../assets/logos/LUKGlobal_logo.png";

const Item = ({ title, company, time, bullets, logo }) => (
  <div className="rounded-xl border border-slate-300/60 dark:border-slate-700/60 bg-white/70 dark:bg-white/10 p-6 flex gap-4">
    {logo && (
      <img
        alt="logo"
        src={logo}
        className="w-12 h-12 rounded-md object-contain"
      />
    )}
    <div>
      <h3 className="text-lg font-semibold">
        {title} <span className="opacity-70">— {company}</span>
      </h3>
      <p className="text-sm opacity-70 mb-2">{time}</p>
      <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="snap-section relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-[#0f1420] dark:text-gray-100"
    >
      <DenseShapes seed={31} count={90} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-20 space-y-6">
        <Reveal>
          <h2 className="text-4xl font-bold mb-4">Experiences</h2>
        </Reveal>

        <Reveal>
          <Item
            title=".NET Developer Intern"
            company="FPT Software (On Site)"
            time="Sep 2024 — Dec 2024"
            logo={FsoftLogo}
            bullets={[
              "Synthesized input/output requirements from SRS to keep scope & acceptance clear",
              "Contributed features & fixes using .NET tech to deliver efficient, reliable components",
              "Facilitated weekly Scrum meetings to set priorities & review progress",
            ]}
          />
        </Reveal>

        <Reveal>
          <Item
            title="Operations Team Member"
            company="LUK Global Saigon Campus (HCMC)"
            time="Oct 2022 — Jan 2024"
            logo={LUKGlobalLogo}
            bullets={[
              "Operated & managed English activities in a professional environment",
              "Worked with 15+ international coaches",
              "Organized student debate/presentation events to build public‑speaking & critical‑thinking",
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
