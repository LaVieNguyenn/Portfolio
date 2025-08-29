// src/components/common/LanguageIcon.jsx
import React from "react";
// KHÔNG destructure -> không lỗi compile khi icon thiếu
import * as SI from "react-icons/si";
import * as FA from "react-icons/fa6";
import * as TB from "react-icons/tb"; // dùng được nếu gói có, không có cũng không lỗi

const norm = (s) => (s || "").toString().toLowerCase().trim();

const NAME_MAP = {
  javascript: "SiJavascript",
  typescript: "SiTypescript",
  java: "SiJava",
  python: "SiPython",
  go: "SiGo",
  rust: "SiRust",
  html: "SiHtml5",
  html5: "SiHtml5",
  css: "SiCss3",
  css3: "SiCss3",
  sass: "SiSass",
  scss: "SiSass",
  swift: "SiSwift",
  kotlin: "SiKotlin",
  php: "SiPhp",
  ruby: "SiRuby",
  dart: "SiDart",
  shell: "SiGnubash",
  bash: "SiGnubash",
  powershell: "SiPowershell",
  mysql: "SiMysql",
  postgresql: "SiPostgresql",
  mongodb: "SiMongodb",

  // .NET / C#
  "c#": "SiDotnet",
  csharp: "SiDotnet",
  dotnet: "SiDotnet",
  ".net": "SiDotnet",

  // runtime / frameworks có thể được GitHub trả về
  node: "SiNodedotjs",
  "node.js": "SiNodedotjs",
  nodejs: "SiNodedotjs",
  react: "SiReact",
  angular: "SiAngular",
  "jupyter notebook": "SiJupyter",

  // DB & ngôn ngữ chung
  sql: "FaDatabase",
  sqlite: "FaDatabase",

  // C/C++ -> fallback
  c: "FaCode",
  "c++": "FaCode",
  cplusplus: "FaCode",
};

export default function LanguageIcon({ language, className = "text-xl" }) {
  const key = norm(language);
  const name = NAME_MAP[key];

  // Ưu tiên lấy từ Simple-Icons, sau đó Fa6, rồi Tabler; cuối cùng FaCode
  const Icon =
    (name && (SI[name] || FA[name] || TB[name])) ||
    FA.FaCode;

  return <Icon className={className} title={language || "Unknown"} />;
}
