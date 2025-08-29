// src/sections/Hero.jsx
import React from "react";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";
import TypewriterCycle from "../common/TypewriterCycle.jsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import avatarImg from "../../assets/avatar.png";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || "LaVieNguyenn";

export default function Hero() {
  return (
    <section
      id="home"
      className="snap-section relative min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-[#141821] dark:text-white"
    >
      {" "}
      <DenseShapes seed={7} count={160} bias="none" />
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start self-center md:pl-12">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-64 md:w-[520px] h-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,.45)] select-none pointer-events-none"
            />
          </div>

          {/* RIGHT — chữ lớn căn trái */}
          <div className="self-center text-center md:text-left">
            <Reveal>
              <h1 className="text-[40px] leading-[1.05] md:text-[72px] font-extrabold tracking-[-0.02em]">
                Nguyen Phi Hung
                <br className="hidden md:block" />
                {/* <span className="inline-block">LaVie</span> */}
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-xl text-lg opacity-90">
                Final‑year Software Engineering student mainly focusing
                on C#, .NET Core, ASP.NET MVC/Web API, Cross-platform, WPF, WindowForms{" "}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-5 text-2xl md:text-3xl font-semibold">
                <TypewriterCycle
                  phrases={[
                    ".NET Developer",
                    "Software Engineer",
                    "Full-Stack Developer",
                  ]}
                />
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 shadow"
                >
                  Book a Call
                </a>
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10"
                >
                  My Works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-7 flex items-center gap-3 text-sm opacity-85">
                <span>Follow me on:</span>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-100"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/lavienguyen0302"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-100"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
