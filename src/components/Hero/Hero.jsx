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
      className="snap-section relative min-h-[100svh] overflow-hidden
                 bg-white text-slate-900 dark:bg-[#141821] dark:text-white"
    >
            {" "}
      <DenseShapes seed={7} count={160} bias="none" />
      {/* Shapes nền: giảm mật độ trên mobile */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="md:hidden opacity-25">
          <DenseShapes seed={7} count={70} bias="none" />
        </div>
        <div className="hidden md:block opacity-40">
          <DenseShapes seed={7} count={160} bias="none" />
        </div>
      </div>

      {/* Overlay tăng tương phản chữ ở mobile */}
      <div className="absolute inset-x-0 top-0 h-1/2 md:hidden -z-10 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center py-12 md:py-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT (desktop): Avatar | Mobile: lên trên, căn giữa */}
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-48 sm:w-64 lg:w-[520px] h-auto object-contain
                         drop-shadow-[0_24px_48px_rgba(0,0,0,.45)]
                         select-none pointer-events-none"
            />
          </div>

          {/* RIGHT: Text + CTA */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <Reveal>
              <h1 className="font-extrabold tracking-[-0.02em] leading-tight
                             text-[clamp(2rem,7vw,3.8rem)]">
                Nguyen Phi Hung
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-3 max-w-[70ch] mx-auto lg:mx-0
                             text-[clamp(0.95rem,2.7vw,1.125rem)] opacity-90">
                Final-year Software Engineering student mainly focusing on C#, .NET Core,
                ASP.NET MVC/Web API, Cross-platform, WPF, WindowsForms
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-5 text-2xl md:text-3xl font-semibold">
                <TypewriterCycle
                  phrases={[".NET Developer", "Software Engineer", "Full-Stack Developer"]}
                />
              </div>
            </Reveal>

            {/* CTA: full width trên mobile, nằm ngang từ sm */}
            <Reveal delay={0.24}>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto
                             px-5 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500
                             text-white font-semibold shadow focus:outline-none
                             focus:ring-2 focus:ring-violet-400 focus:ring-offset-2
                             focus:ring-offset-transparent"
                >
                  Book a Call
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center w-full sm:w-auto
                             px-5 py-3 rounded-2xl border border-white/25
                             bg-white/10 hover:bg-white/20 text-white font-semibold
                             focus:outline-none focus:ring-2 focus:ring-white/30
                             focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  My Works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm opacity-85">
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
