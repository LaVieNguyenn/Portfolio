// src/sections/Achievements.jsx
import React from "react";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";

const CERTS = [
  {
    title: "Project Management Principles and Practices",
    org: "Coursera",
    desc: "Core PM concepts: scope, scheduling, risk & communication.",
    cta: "Certification",
    href: "#",
  },
  {
    title: "Software Development Lifecycle",
    org: "Coursera",
    desc: "SDLC frameworks, planning and delivery best practices.",
    cta: "Certification",
    href: "#",
  },
  {
    title: "User Experience Research & Design",
    org: "Coursera",
    desc: "UX research, prototyping and usability testing.",
    cta: "Certification",
    href: "#",
  },
  {
    title: "Computer Communications",
    org: "Coursera",
    desc: "Network fundamentals & protocols.",
    cta: "Certification",
    href: "#",
  },
  {
    title: "Java Enterprise Edition",
    org: "Coursera",
    desc: "JEE concepts for enterprise applications.",
    cta: "Certification",
    href: "#",
  },
  {
    title: "CEET — Certified Ethical Emerging Technologist",
    org: "CertNexus",
    desc: "Ethical, responsible AI & emerging tech practice.",
    cta: "Certification",
    href: "#",
  },
];

export default function Achievements() {
  return (
<section id="achievements" className="snap-section relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-[#0f1420] dark:text-white">
      {" "}
      <DenseShapes seed={11} count={110} bias="center" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Achievements & Certifications 🏆
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="rounded-3xl bg-white/5 backdrop-blur-[1px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,.35)] p-6">
                {/* media placeholder giống layout hình 2 */}
                <div className="rounded-2xl h-40 md:h-48 bg-white/5 border border-white/10 mb-5 relative overflow-hidden">
                  {/* bạn có thể đặt logo/ảnh ở đây nếu có */}
                </div>
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="text-sm opacity-80 mt-1">{c.org}</p>
                <p className="text-sm opacity-85 mt-3">{c.desc}</p>

                <div className="mt-5">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm"
                  >
                    {c.cta}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
