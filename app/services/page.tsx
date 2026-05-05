"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";

export default function ServicesPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const sundayServices = [
    {
      label: "ADULT SUNDAY SCHOOL",
      time: "8:30 AM",
      description:
        "Begin your Sunday with an in-depth study of God's Word. Our Sunday School is designed for adults seeking to grow in biblical knowledge and apply scripture to everyday life.",
      icon: "📖",
    },
    {
      label: "SUNDAY DIVINE SERVICE",
      time: "9:30 AM",
      description:
        "Our main worship service filled with praise, worship, and a powerful message from God's Word. All are welcome — come as you are and encounter the presence of God.",
      icon: "🙏",
    },
    {
      label: "SUNDAY EVENING SERVICE",
      time: "6:30 PM",
      description:
        "Close your Sunday in worship and the Word. Our evening service is a time of deeper reflection, prayer, and fellowship with the body of Christ.",
      icon: "🌙",
    },
  ];

  const midweekServices = [
    {
      label: "WEDNESDAY MIDWEEK SERVICE",
      time: "6:30 PM",
      description:
        "Stay grounded mid-week with teaching, prayer, and community. This service is a vital time for spiritual growth and encouragement as we walk through the week together.",
      icon: "✝️",
    },
  ];

  const allServices = [...sundayServices, ...midweekServices];
  const activeService = allServices.find((s) => s.label === activeCard);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-serif">

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/services-hero.jpg"
            alt="Services Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
        <div className="relative z-10 pb-14 pl-[8%]">
          <p className="text-xs tracking-[6px] uppercase text-white/60 mb-3 mt-50">
            YOU ARE WELCOME ● COME AND EXPERIENCE THE LOVE OF GOD WITH US
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-[.3em] uppercase leading-none text-white">
            SERVICES
          </h1>
          <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />
        </div>
      </section>

      {/* ── SUNDAY SERVICES ── */}
      <section className="px-[8%] py-16 bg-white">
        <div className="max-w-4xl mx-auto">

          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="flex-1 h-[4px] bg-[#ED0106]" />
              <h2 className="text-xl md:text-2xl font-bold tracking-[.25em] uppercase text-gray-900 whitespace-nowrap">
                SUNDAY SERVICES
              </h2>
              <div className="flex-1 h-[4px] bg-[#ED0106]" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sundayServices.map((service, index) => (
              <FadeIn key={service.label} direction="up" delay={index * 100}>
                <button
                  onClick={() => setActiveCard(service.label)}
                  className="w-full flex flex-col items-center justify-center py-8 px-6 text-center bg-[#12191B]
                    shadow-[4px_4px_0px_#000000] transition-all duration-300
                    hover:-translate-y-2 hover:shadow-[4px_12px_0px_#ED0106] cursor-pointer"
                >
                  <span className="text-3xl mb-3">{service.icon}</span>
                  <p className="text-[11px] font-bold tracking-[3px] uppercase text-white mb-5 leading-tight">
                    {service.label}
                  </p>
                  <div className="border-2 border-white px-6 py-3 w-full max-w-[160px]">
                    <span className="text-2xl font-bold tracking-[2px] text-white">
                      {service.time}
                    </span>
                  </div>
                  <p className="text-white/40 text-[10px] tracking-[2px] uppercase mt-4">
                    TAP TO LEARN MORE
                  </p>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── MIDWEEK SERVICE ── */}
      <section className="px-[8%] pb-16 bg-white">
        <div className="max-w-4xl mx-auto">

          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="flex-1 h-[4px] bg-[#ED0106]" />
              <h2 className="text-xl md:text-2xl font-bold tracking-[.25em] uppercase text-gray-900 whitespace-nowrap">
                MIDWEEK SERVICE
              </h2>
              <div className="flex-1 h-[4px] bg-[#ED0106]" />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <div className="flex justify-center">
              <button
                onClick={() => setActiveCard(midweekServices[0].label)}
                className="bg-[#12191B] shadow-[8px_10px_0px_#000000] flex flex-col items-center justify-center
                  py-8 px-10 text-center w-full max-w-xs transition-all duration-300
                  hover:-translate-y-2 hover:shadow-[8px_18px_0px_#ED0106] cursor-pointer"
              >
                <span className="text-3xl mb-3">{midweekServices[0].icon}</span>
                <p className="text-[11px] font-bold tracking-[3px] uppercase text-white mb-5 leading-tight">
                  {midweekServices[0].label}
                </p>
                <div className="border-2 border-white px-6 py-3 w-full">
                  <span className="text-2xl font-bold tracking-[2px] text-white">
                    {midweekServices[0].time}
                  </span>
                </div>
                <p className="text-white/40 text-[10px] tracking-[2px] uppercase mt-4">
                  TAP TO LEARN MORE
                </p>
              </button>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── MODAL POPUP ── */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 modal-backdrop"
          onClick={() => setActiveCard(null)}
        >
          {/* Modal card */}
          <div
            className="relative z-10 bg-[#12191B] border border-white/10 max-w-md w-full p-8 shadow-[6px_6px_0px_#ED0106] modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition text-xl leading-none"
            >
              ✕
            </button>

            <span className="text-4xl mb-5 block">{activeService.icon}</span>

            <p className="text-[10px] tracking-[3px] uppercase text-[#ED0106] mb-2">
              Service Schedule
            </p>
            <h3 className="text-white font-bold tracking-[2px] uppercase text-lg mb-1">
              {activeService.label}
            </h3>

            {/* Time badge */}
            <div className="inline-block border-2 border-[#ED0106] px-5 py-2 mt-2 mb-6">
              <span className="text-2xl font-bold text-white tracking-widest">
                {activeService.time}
              </span>
            </div>

            <div className="w-12 h-[2px] bg-[#ED0106] mb-5" />

            <p className="text-white/75 text-[14px] leading-[1.85]">
              {activeService.description}
            </p>

            <button
              onClick={() => setActiveCard(null)}
              className="mt-8 w-full bg-[#ED0106] text-white font-bold tracking-[3px] uppercase text-[11px] py-3 hover:bg-[#c8000a] transition-colors duration-300"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
