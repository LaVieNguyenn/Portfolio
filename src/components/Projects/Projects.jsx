import React from "react";
import { motion } from "framer-motion";
import DenseShapes from "../shapes/DenseShapes.jsx";
import Reveal from "../common/Reveal.jsx";
import useGithubProjects from "../../services/useGithubProjects.js";
import LanguageIcon from "../common/LanguageIcon.jsx";

export default function Projects() {
  const USER = import.meta.env.VITE_GITHUB_USERNAME || "LaVieNguyenn";
const { items, loading, error, source } = useGithubProjects(USER);

  const fallback = [
    {
      name: "Sample Project",
      url: `https://github.com/${USER}`,
      desc: "—",
      lang: "C#",
      forks: 0,
      stars: 0,
      size: "—",
    },
  ];

  const list = items?.length ? items : fallback;

  return (
    <section
      id="projects"
      className="snap-section relative min-h-screen overflow-hidden flex items-center"
      style={{
        backgroundImage: "linear-gradient(135deg,#5a3df0,#6a5cff 40%,#19c2ff)",
      }}
    >
      <div
        className="absolute -top-28 left-0 right-0 h-44 bg-white dark:bg-[#141821]"
        style={{ clipPath: "polygon(0 60%,100% 0,100% 100%,0 100%)" }}
      />
      <DenseShapes seed={22} count={120} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <Reveal>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
            Projects
          </h2>
        </Reveal>
        {source === 'rest' && (
          <p className="text-white/90 mb-4 text-sm">
            Đang hiển thị repo nổi bật (REST). <b>Pinned</b>.
          </p>
        )}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/30 bg-white/25 dark:bg-white/5 h-40 animate-pulse"
              />
            ))}
          </div>
        )}

        {error && (
          <p className="text-white/90 mb-4">
            Couldn’t load GitHub repos (using fallback).
          </p>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((it, i) => (
            <motion.a
              key={i}
              href={it.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/30 bg-white/85 text-slate-900 dark:text-gray-200 dark:bg-white/5 dark:border-slate-700 p-6 shadow-xl hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
            >
              <div className="text-2xl font-semibold mb-2">{it.name}</div>
              <p className="opacity-80 mb-4">{it.desc}</p>
              <div className="flex items-center gap-4 text-sm opacity-80">
                <span className="inline-flex items-center gap-2">
                  <LanguageIcon language={it.lang} />
                  {it.lang}
                </span>
                <span>🍴 {it.forks}</span>
                <span>⭐ {it.stars}</span>
                <span className="ml-auto">{it.size}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <div
        className="absolute -bottom-24 left-0 right-0 h-48 bg-slate-200 dark:bg-[#1f2632]"
        style={{ clipPath: "polygon(0 0,100% 40%,100% 100%,0 100%)" }}
      />
    </section>
  );
}
