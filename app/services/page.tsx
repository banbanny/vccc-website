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
      description: "Begin your Sunday with an in-depth study of God's Word. Our Sunday School is designed for adults seeking to grow in biblical knowledge and apply scripture to everyday life.",
      
    },
    {
      label: "SUNDAY DIVINE SERVICE",
      time: "9:30 AM",
      description: "Our main worship service filled with praise, worship, and a powerful message from God's Word. All are welcome — come as you are and encounter the presence of God.",
      
    },
    {
      label: "SUNDAY EVENING SERVICE",
      time: "6:30 PM",
      description: "Close your Sunday in worship and the Word. Our evening service is a time of deeper reflection, prayer, and fellowship with the body of Christ.",
   
    },
  ];

  const midweekServices = [
    {
      label: "WEDNESDAY MIDWEEK SERVICE",
      time: "6:30 PM",
      description: "Stay grounded mid-week with teaching, prayer, and community. This service is a vital time for spiritual growth and encouragement as we walk through the week together.",
    
    },
  ];

  const allServices = [...sundayServices, ...midweekServices];
  const activeService = allServices.find((s) => s.label === activeCard);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-serif">

      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-[500px] md:h-[650px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/services-hero.jpg" alt="Services Hero" fill priority className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
        <div className="relative z-10 text-white px-6 md:px-0 md:left-[8%] md:absolute md:-translate-y-1/2 pb-16 md:pb-0 pt-32 md:pt-0 max-w-[92vw] md:max-w-3xl ">
          <p className="text-[10px] md:text-xs tracking-[3px] md:tracking-[6px] uppercase text-white/60 mb-3">
            YOU ARE WELCOME ● COME AND EXPERIENCE THE LOVE OF GOD
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[.15em] md:tracking-[.3em] uppercase leading-tight text-white">
            SERVICES
          </h1>
          <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />
        </div>
      </section>

      {/* SUNDAY SERVICES */}
      <section className="px-6 md:px-[8%] py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
              <div className="flex-1 h-[3px] md:h-[4px] bg-[#ED0106]" />
              <h2 className="text-base md:text-xl lg:text-2xl font-bold tracking-[.15em] md:tracking-[.25em] uppercase text-gray-900 whitespace-nowrap px-2">
                SUNDAY SERVICES
              </h2>
              <div className="flex-1 h-[3px] md:h-[4px] bg-[#ED0106]" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sundayServices.map((service, index) => (
              <FadeIn key={service.label} direction="up" delay={index * 100}>
                <button
                  onClick={() => setActiveCard(service.label)}
                  className="w-full flex flex-col items-center justify-center py-8 px-4 text-center bg-[#12191B]
                    shadow-[4px_4px_0px_#000000] transition-all duration-300
                    hover:-translate-y-2 hover:shadow-[4px_12px_0px_#ED0106] cursor-pointer"
                >
                  
                  <p className="text-[11px] font-bold tracking-[2px] uppercase text-white mb-4 leading-tight">{service.label}</p>
                  <div className="border-2 border-white px-4 py-2 w-full max-w-[140px]">
                    <span className="text-xl md:text-2xl font-bold tracking-[2px] text-white">{service.time}</span>
                  </div>
                  <p className="text-white/40 text-[10px] tracking-[2px] uppercase mt-3">TAP TO LEARN MORE</p>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MIDWEEK */}
      <section className="px-6 md:px-[8%] pb-12 md:pb-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
              <div className="flex-1 h-[3px] md:h-[4px] bg-[#ED0106]" />
              <h2 className="text-base md:text-xl lg:text-2xl font-bold tracking-[.15em] md:tracking-[.25em] uppercase text-gray-900 whitespace-nowrap px-2">
                MIDWEEK SERVICE
              </h2>
              <div className="flex-1 h-[3px] md:h-[4px] bg-[#ED0106]" />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <div className="flex justify-center">
              <button
                onClick={() => setActiveCard(midweekServices[0].label)}
                className="bg-[#12191B] shadow-[8px_10px_0px_#000000] flex flex-col items-center justify-center
                  py-8 px-8 text-center w-full max-w-xs transition-all duration-300
                  hover:-translate-y-2 hover:shadow-[8px_18px_0px_#ED0106] cursor-pointer"
              >
                
                <p className="text-[11px] font-bold tracking-[2px] uppercase text-white mb-4 leading-tight">{midweekServices[0].label}</p>
                <div className="border-2 border-white px-4 py-2 w-full">
                  <span className="text-xl md:text-2xl font-bold tracking-[2px] text-white">{midweekServices[0].time}</span>
                </div>
                <p className="text-white/40 text-[10px] tracking-[2px] uppercase mt-3">TAP TO LEARN MORE</p>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MODAL */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-5 modal-backdrop"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="relative z-10 bg-[#12191B] border border-white/10 max-w-md w-full p-6 md:p-8 shadow-[6px_6px_0px_#ED0106] modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setActiveCard(null)} className="absolute top-4 right-4 text-white/40 hover:text-white transition text-xl leading-none">✕</button>
            
            <p className="text-[10px] tracking-[3px] uppercase text-[#ED0106] mb-2">Service Schedule</p>
            <h3 className="text-white font-bold tracking-[2px] uppercase text-base md:text-lg mb-1">{activeService.label}</h3>
            <div className="inline-block border-2 border-[#ED0106] px-4 py-2 mt-2 mb-5">
              <span className="text-xl md:text-2xl font-bold text-white tracking-widest">{activeService.time}</span>
            </div>
            <div className="w-12 h-[2px] bg-[#ED0106] mb-4" />
            <p className="text-white/75 text-[14px] leading-[1.85]">{activeService.description}</p>
            <button onClick={() => setActiveCard(null)}
              className="mt-6 w-full bg-[#ED0106] text-white font-bold tracking-[3px] uppercase text-[11px] py-3 hover:bg-[#c8000a] transition-colors duration-300">
              CLOSE
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
