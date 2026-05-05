"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";

const carouselImages = [
  { src: "/act1.jpg", alt: "Church gathering 1" },
  { src: "/act2.jpg", alt: "Church gathering 2" },
  { src: "/act3.jpg", alt: "Church gathering 3" },
  { src: "/act4.jpg", alt: "Church gathering 4" },
  { src: "/act5.jpg", alt: "Church gathering 5" },
  { src: "/act6.jpg", alt: "Church gathering 6" },
  { src: "/act7.jpg", alt: "Church gathering 7" },
  { src: "/act8.jpg", alt: "Church gathering 8" },
  { src: "/act9.jpg", alt: "Church gathering 9" },
  { src: "/act10.jpg", alt: "Church gathering 10" },
  { src: "/act11.jpg", alt: "Church gathering 11" },
  { src: "/act12.jpg", alt: "Church gathering 12" },
  { src: "/act13.jpg", alt: "Church gathering 13" },
];

const loopedImages = [...carouselImages, ...carouselImages, ...carouselImages];

export default function VisitUsPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 280 + 12;
    const totalWidth = cardWidth * carouselImages.length;
    const step = () => {
      if (!isPausedRef.current) {
        offsetRef.current += 0.6;
        if (offsetRef.current >= totalWidth) offsetRef.current = 0;
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-serif">

      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-[500px] md:h-[650px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/location-hero.jpg" alt="Visit Us Hero" fill priority className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
        <div className="relative z-10 pb-10 md:pb-14 px-6 md:pl-[8%] pt-32 md:pt-0">
          <p className="text-[10px] md:text-xs tracking-[3px] md:tracking-[6px] uppercase text-white/60 mb-3">
            YOU ARE WELCOME ● COME AND EXPERIENCE THE LOVE OF GOD
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[.15em] md:tracking-[.3em] uppercase leading-tight text-white">
            LOCATION
          </h1>
          <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />
        </div>
      </section>

      {/* YOU ARE INVITED */}
      <section className="bg-white px-6 md:px-[8%] py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up">
            <p className="text-xs tracking-[4px] uppercase text-gray-500 mb-2">YOU ARE INVITED</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-[.1em] md:tracking-[.15em] uppercase text-gray-900 mb-10">
              WE WOULD LOVE TO MEET YOU
            </h2>
          </FadeIn>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 sm:gap-16 md:gap-24">
            <FadeIn direction="left" delay={100}>
              <div className="flex flex-col items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ED0106" className="w-9 h-9">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.083 3.712-5.13 3.712-8.816a6.5 6.5 0 10-13 0c0 3.686 1.768 6.733 3.712 8.816a19.58 19.58 0 002.569 2.233c.331.237.67.455.979.632l.08.014zm.46-9.851a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
                </svg>
                <p className="text-[10px] font-bold tracking-[3px] uppercase text-gray-900">LOCATION</p>
                <p className="text-[13px] text-gray-600 text-center leading-relaxed">
                  VICTORY CHAPEL<br />CHRISTIAN CENTER - PANACAN
                </p>
              </div>
            </FadeIn>

            <div className="hidden sm:block w-[1px] self-stretch bg-gray-300" />

            <FadeIn direction="right" delay={200}>
              <div className="flex flex-col items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ED0106" className="w-9 h-9">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <p className="text-[10px] font-bold tracking-[3px] uppercase text-gray-900">ADDRESS</p>
                <p className="text-[13px] text-gray-600 text-center leading-relaxed">
                  KM. 14 2ND FLOOR ROSE BAKESHOP<br />PANACAN DAVAO CITY
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-[#12191B] px-6 md:px-[8%] py-12 md:py-14">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h3 className="text-white text-center font-bold text-base md:text-lg lg:text-xl tracking-[.1em] mb-6 md:mb-8">
              We are located 2nd Floor Rose BakeShop Building
            </h3>
          </FadeIn>
          <FadeIn direction="up" delay={150}>
            <div className="w-full h-[260px] md:h-[320px] lg:h-[400px] rounded overflow-hidden shadow-[4px_4px_0px_#ED0106]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d125.6312!3d7.0731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDQnMjMuMiJOIDEyNcKwMzcnNTIuMyJF!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Victory Chapel Christian Center Map"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PHOTO CAROUSEL */}
      <section className="bg-[#12191B] py-10 overflow-hidden">
        <FadeIn direction="up">
          <p className="text-center text-white/40 text-[10px] tracking-[4px] uppercase mb-6">Church Activities</p>
        </FadeIn>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10"
            style={{ background: "linear-gradient(to right, #12191B, transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10"
            style={{ background: "linear-gradient(to left, #12191B, transparent)" }} />
          <div onMouseEnter={() => { isPausedRef.current = true; }} onMouseLeave={() => { isPausedRef.current = false; }}>
            <div ref={trackRef} style={{ display: "flex", gap: "12px", width: "max-content", willChange: "transform" }}>
              {loopedImages.map((img, i) => (
                <div key={`${img.src}-${i}`} className="relative shrink-0 overflow-hidden rounded"
                  style={{ width: "280px", height: "190px" }}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
