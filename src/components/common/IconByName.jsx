import React from "react";
import * as SI from "react-icons/si";
import * as FA from "react-icons/fa6";
import * as TB from "react-icons/tb";

/** Chuẩn hoá */
const k = (s) => (s || "").toString().toLowerCase().trim();

/** Map tên “dễ nhớ” -> tên icon trong react-icons (an toàn kiểu tra cứu động) */
const NAME_MAP = {
  // ngôn ngữ
  javascript: "SiJavascript",
  typescript: "SiTypescript",
  "c#": "SiDotnet",
  csharp: "SiDotnet",
  dotnet: "SiDotnet",
  ".net": "SiDotnet",
  html5: "SiHtml5",
  css3: "SiCss3",
  sass: "SiSass",
  java: "SiJava",
  python: "SiPython",
  // web
  react: "SiReact",
  nextjs: "SiNextdotjs",
  angular: "SiAngular",
  rxjs: "SiReactiveX",
  ngrx: "SiNgrx",
  redux: "SiRedux",
  node: "SiNodedotjs",
  express: "SiExpress",
  nestjs: "SiNestjs",
  // .NET eco
  "asp.net": "SiDotnet",
  "asp.net core": "SiDotnet",
  "ef core": "SiDotnet",
  // db / cache / queue
  sql: "FaDatabase",
  mssql: "SiMicrosoftsqlserver",
  "sql server": "SiMicrosoftsqlserver",
  postgresql: "SiPostgresql",
  mysql: "SiMysql",
  sqlite: "FaDatabase",
  mongodb: "SiMongodb",
  redis: "SiRedis",
  rabbitmq: "SiRabbitmq",
  graphql: "SiGraphql",
  // cloud / devops / test
  aws: "SiAmazonaws",
  firebase: "SiFirebase",
  azure: "SiMicrosoftazure",
  "azure devops": "SiAzuredevops",
  "github actions": "SiGithubactions",
  docker: "SiDocker",
  kubernetes: "SiKubernetes",
  jest: "SiJest",
  cypress: "SiCypress",
  playwright: "SiPlaywright",
  // ui
  tailwind: "SiTailwindcss",
  bootstrap: "SiBootstrap",
  npm: "SiNpm",
  pnpm: "SiPnpm",
  yarn: "SiYarn",
};

export default function IconByName({ name, className = "text-lg" }) {
  const id = NAME_MAP[k(name)];
  const Icon = (id && (SI[id] || FA[id] || TB[id])) || FA.FaCode;
  return <Icon className={className} title={name} />;
}
