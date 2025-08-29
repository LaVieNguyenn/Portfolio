import React from "react";
import DenseShapes from "../shapes/DenseShapes.jsx";

export default function Contact() {
  return (
    <section
      id="contact"
      // isolate: tạo stacking-context riêng, chặn phần tử tuyệt đối từ section trước tràn vào
      className="snap-section relative isolate min-h-screen overflow-hidden
                 bg-white text-slate-900 dark:bg-[#141821] dark:text-white
                 flex items-center"
    >
      {/* SHAPES nền phủ full, ở dưới cùng */}
      <DenseShapes seed={99} count={110} bias="none" />

      {/* NỘI DUNG */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Get in touch</h2>
        <p className="text-lg opacity-90">
          Visit{" "}
          <a
            className="underline"
            href="https://www.facebook.com/LaVieNguyen.Hung"
            target="_blank"
            rel="noreferrer"
          >
            my Facebook
          </a>{" "}
          or find me on{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/lavienguyen0302"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>

      {/* WAVE ở ĐÁY — dùng currentColor để tự đổi theo theme */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[28vh] text-slate-800/10 dark:text-white/10"
        viewBox="0 0 800 340"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          // cong nhẹ, nằm ở đáy, không che nội dung
          d="M0,260 C180,300 380,200 800,260 L800,340 L0,340 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
