// src/sections/Achievements.jsx
import React from "react";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";
import PML from "../../assets/logos/projectManamentLogo.png"
import CCM from "../../assets/logos/ComputerCom.png"
import SWD from "../../assets/logos/SoftwareDevLogo.png"
import CNX from "../../assets/logos/CNX.png"
import JEE from "../../assets/logos/JEE.png"
import WDFE from "../../assets/logos/WDFE.png"


const CERTS = [
  {
    title: "Project Management Principles and Practices — Specialization",
    org: "Coursera",
    desc: "Scope, scheduling, risk & communication trong quản lý dự án.",
    cta: "View certificate",
    href: "https://www.coursera.org/account/accomplishments/specialization/74WRXT3V5X5F",
    img: PML
  },
  {
    title: "Computer Communications — Specialization",
    org: "Coursera",
    desc: "Network fundamentals & Internet protocols.",
    cta: "View certificate",
    href: "https://www.coursera.org/account/accomplishments/specialization/GS7NKNUNLJ3U",
    img: CCM,
  },
  {
    title: "Software Development Lifecycle — Specialization",
    org: "Coursera",
    desc: "SDLC frameworks, planning, delivery best practices.",
    cta: "View certificate",
    href: "https://www.coursera.org/account/accomplishments/specialization/UMMEHPJGVYYB",
    img: SWD,
  },
  {
    title: "Web Design for Everybody — Specialization",
    org: "Coursera",
    desc: "HTML/CSS/JS nền tảng, responsive web.",
    cta: "View certificate",
    href: "https://www.coursera.org/account/accomplishments/specialization/PBQ7C63HQYYD",
    img: WDFE,
  },
  {
    title: "Java Enterprise Edition — Specialization",
    org: "Coursera",
    desc: "JEE concepts cho ứng dụng enterprise.",
    cta: "View certificate",
    href: "https://www.coursera.org/account/accomplishments/specialization/ZE3X5Y6Z3RUQ",
    img: JEE,
  },
  {
    title: "User Experience Research & Design",
    org: "Coursera",
    desc: "UX research, prototyping, usability testing.",
    cta: "View certificate",
    href: "https://coursera.org/share/ebb2c949310b362b34b3990c0ef71758",
    img: WDFE,
  },
  {
    title: "CEET — Certified Ethical Emerging Technologist",
    org: "CertNexus",
    desc: "Quy chuẩn đạo đức & thực hành an toàn với AI/tech mới nổi.",
    cta: "See details",
    href: "https://www.coursera.org/account/accomplishments/specialization/YT5JS5PMFV4J", 
    img: CNX,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="snap-section relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-[#0f1420] dark:text-white"
    >
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
              <article className="rounded-3xl bg-white/5 backdrop-blur-[1px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,.35)] p-6">
                {/* Media: ảnh chứng chỉ/logo nếu có, fallback khi chưa có ảnh */}
                <div className="rounded-2xl h-40 md:h-48 bg-white/5 border border-white/10 mb-5 relative overflow-hidden flex items-center justify-center">
                  {c.img ? (
                    <img
                      src={c.img}
                      alt={`${c.title} — ${c.org}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-xs opacity-60">Certificate / Logo</div>
                  )}
                </div>

                <h3 className="text-xl font-semibold leading-snug">{c.title}</h3>
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
