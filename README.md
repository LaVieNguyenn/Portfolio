# Portfolio (.NET / React) — React + Vite + Tailwind 

Một portfolio cá nhân dành cho DEV **IT** có thể làm **React/Angular**, tối ưu hiệu năng, giao diện hiện đại và hiệu ứng mượt.

## ⚡ Tính năng chính

* **Hero** chia 2 cột: bên trái là **avatar PNG trong suốt** (không che nền), bên phải là **tiêu đề lớn** + mô tả + **typewriter** (Developer → .NET Engineer → Full‑Stack Developer).
* **DenseShapes**: nền có nhiều hình *circle/square/hex/cross* chuyển động **liên tục, chậm**, không biến mất; có thể bias trái/phải/giữa; phủ full màn hình.
* **Scroll‑snap** toàn trang: mỗi section **full screen** và dừng đúng khung khi cuộn.
* **Dark/Light mode**: toggle áp dụng class `dark` lên `<html>`, màu nền/chữ đổi đồng bộ toàn trang.
* **Projects động**: tự lấy **6 repo đang Pinned** bằng **GitHub GraphQL**; nếu không có token → **fallback REST** lấy repo nổi bật (theo stars/forks/độ mới).
* **Icon ngôn ngữ** cho từng repo: hiển thị **biểu tượng** (JS/TS/C#/…); có cơ chế fallback an toàn nếu icon thiếu.
* Các section: **Hero**, **Projects**, **What I do**, **Education**, **Experiences**, **Achievements & Certifications**, **Contact**.
* **Hiệu ứng vào/ra** bằng Framer Motion/Reveal mượt, giữ FPS ổn định.

## 🧰 Tech stack

* **React 18 + Vite**
* **Tailwind CSS v4** (utility-first, dark mode class)
* **Framer Motion** (hiệu ứng xuất hiện)
* **react-icons** (Font Awesome / Simple Icons / Tabler)

## 🗂 Cấu trúc thư mục (rút gọn)

```
src/
  components/
    common/
      Reveal.jsx
      TypewriterCycle.jsx
      LanguageIcon.jsx
      ThemeToggle.jsx
    shapes/
      DenseShapes.jsx
  sections/
    Hero.jsx
    Projects.jsx
    WhatIDo.jsx
    Education.jsx
    Experiences.jsx
    Achievements.jsx   # Certificates
    Contact.jsx
  services/
    github.js          # REST + GraphQL helpers
    useGithubProjects.js
  hooks/
    useTheme.js        
```

## 🚀 Cài đặt & chạy

```bash
# 1) Cài deps
npm i

# 2) Tạo file cấu hình môi trường
cp .env.example .env.local

# 3) Chạy dev
npm run dev

# 4) Build
npm run build && npm run preview
```

## 📄 Giấy phép

MIT License — dùng tự do cho mục đích cá nhân & thương mại.

