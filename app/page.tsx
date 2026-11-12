"use client";

import { useState } from "react";

const hobbies = [
  { label: "唱", color: "bg-[#fff3a3]", rotate: "-rotate-6", lift: "-translate-y-1" },
  { label: "跳", color: "bg-[#ffd6e0]", rotate: "rotate-3", lift: "translate-y-2" },
  { label: "篮球", color: "bg-[#cdeaff]", rotate: "-rotate-2", lift: "-translate-y-2" },
];

const contacts = [
  { label: "微信", value: "XXX" },
  { label: "邮箱", value: "XXX@XX.com" },
];

export default function Home() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3ead8] px-4 py-16">
      {/* 名片卡片：微倾斜 + 硬边投影 */}
      <div className="relative w-[min(92vw,380px)] -rotate-2 rounded-xl border-2 border-[#2b2b2b] bg-[#fffdf6] px-8 pb-10 pt-16 shadow-[10px_10px_0_#2b2b2b] sm:px-10">
        {/* 爱好便签：贴在卡片上沿，部分超出边界 */}
        <div className="absolute -top-7 left-0 right-0 flex items-start justify-center gap-4">
          {hobbies.map((hobby) => (
            <div
              key={hobby.label}
              className={`relative ${hobby.color} ${hobby.rotate} ${hobby.lift} border-2 border-[#2b2b2b] px-4 py-2 shadow-[3px_3px_0_#2b2b2b]`}
            >
              {/* 便签顶部的小胶带 */}
              <span className="absolute -top-2.5 left-1/2 h-4 w-9 -translate-x-1/2 rotate-2 border border-[#2b2b2b]/20 bg-white/60" />
              <span className="text-lg font-semibold text-[#2b2b2b]">{hobby.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center">
          {/* 头像：public/avatar.jpg 存在时显示照片，否则显示纸色墨线占位 */}
          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-[#2b2b2b] bg-[#f6f0e2] shadow-[4px_4px_0_#2b2b2b]">
            {avatarError ? (
              <svg
                viewBox="0 0 64 64"
                className="h-16 w-16"
                fill="none"
                stroke="#2b2b2b"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-label="头像占位"
              >
                <circle cx="32" cy="24" r="10" />
                <path d="M14 54c2-12 9-18 18-18s16 6 18 18" />
              </svg>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/avatar.jpg"
                alt="kunkun 的头像"
                className="h-full w-full object-cover"
                onError={() => setAvatarError(true)}
              />
            )}
          </div>

          {/* 名字：手写风格 */}
          <h1
            className="mt-5 text-5xl text-[#2b2b2b]"
            style={{ fontFamily: "'Segoe Print', 'Bradley Hand', 'Comic Sans MS', cursive" }}
          >
            kunkun
          </h1>

          {/* 手绘感波浪下划线 */}
          <svg
            viewBox="0 0 160 12"
            className="mt-1 h-3 w-40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7 Q 14 1, 24 6 T 44 6 T 64 6 T 84 6 T 104 6 T 124 6 T 144 6 Q 152 5, 156 7"
              stroke="#f08a24"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* 一句自我介绍 */}
          <p className="mt-2 text-sm tracking-[0.3em] text-zinc-500">kairos</p>

          {/* 联系方式 */}
          <div className="mt-8 w-full border-t-2 border-dashed border-[#2b2b2b]/30 pt-6">
            <ul className="flex flex-col gap-3 text-left">
              {contacts.map((contact) => (
                <li key={contact.label} className="flex items-center justify-between gap-4">
                  <span className="shrink-0 border border-[#2b2b2b] bg-[#f6f0e2] px-2 py-0.5 text-xs font-medium text-[#2b2b2b]">
                    {contact.label}
                  </span>
                  <span className="break-all font-mono text-sm text-zinc-700">{contact.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
