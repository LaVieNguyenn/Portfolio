// src/sections/Projects.jsx
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
      className="snap-section relative min-h-[100svh] overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg,#5a3df0,#6a5cff 40%,#19c2ff)",
      }}
    >
      {/* Dải phân cách trên (nghiêng) — decor, không đẩy layout */}
      <div
        className="absolute -top-28 left-0 right-0 h-44 bg-white dark:bg-[#141821]"
        style={{ clipPath: "polygon(0 60%,100% 0,100% 100%,0 100%)" }}
        aria-hidden="true"
      />

      {/* Shapes nền toàn màn hình */}
      <div className="absolute inset-0 pointer-events-none">
        <DenseShapes seed={22} count={120} />
      </div>

      {/* Nội dung (căn giữa theo chiều dọc) */}
      <div className="min-h-[100svh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <Reveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
              Projects
            </h2>
          </Reveal>

          {source === "rest" && (
            <p className="text-white/90 mb-6 text-sm">
              Đang hiển thị repo nổi bật (REST). <b>Pinned</b>.
            </p>
          )}

          {/* Khối “panel” nền mờ để chữ dễ đọc nhưng vẫn thấy shapes */}
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl bg-white/12
                         dark:bg-black/25 ring-1 ring-white/20
                         backdrop-blur supports-[backdrop-filter]:backdrop-blur-md"
              aria-hidden="true"
            />
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Loading skeleton */}
              {loading &&
                Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`s-${i}`}
                    className="h-40 rounded-2xl border border-white/25
                               bg-white/20 dark:bg-white/5 animate-pulse"
                  />
                ))}

              {/* Error note (vẫn render fallback) */}
              {error && (
                <div className="md:col-span-2 lg:col-span-3 text-white/90">
                  Couldn’t load GitHub repos (using fallback).
                </div>
              )}

              {/* Cards */}
              {list.map((it, i) => (
                <motion.a
                  key={i}
                  href={it.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border p-6
                             bg-white/92 text-slate-900 border-white/40
                             dark:bg-slate-900/80 dark:text-gray-200 dark:border-white/10
                             shadow-lg hover:shadow-2xl hover:-translate-y-0.5
                             backdrop-blur supports-[backdrop-filter]:backdrop-blur-md
                             transition"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.25, once: true }}
                >
                  <div className="text-2xl font-semibold mb-2">{it.name}</div>
                  <p className="opacity-80 mb-4 line-clamp-2">{it.desc}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-2">
                      <LanguageIcon language={it.lang} />
                      {it.lang}
                    </span>
                    <span className="opacity-80">🍴 {it.forks}</span>
                    <span className="opacity-80">⭐ {it.stars}</span>
                    <span className="ml-auto opacity-80">{it.size}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dải phân cách dưới (nghiêng) — nền, không đẩy layout */}
      <div
        className="absolute -bottom-24 left-0 right-0 h-48
             bg-slate-200 dark:bg-[#1f2632]"
        style={{ clipPath: "polygon(0 0,100% 40%,100% 100%,0 100%)" }}
        aria-hidden="true"
      />

      {/* Shapes hiển thị TRÊN wedge và chỉ bên trong hình wedge */}
      <div
        className="absolute left-0 right-0 bottom-0 h-48 pointer-events-none"
        style={{ clipPath: "polygon(0 0,100% 40%,100% 100%,0 100%)" }}
        aria-hidden="true"
      >
        <DenseShapes seed={222} count={40} />
      </div>
    </section>
  );
}
