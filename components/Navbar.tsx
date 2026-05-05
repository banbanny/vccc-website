"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 md:px-6">
      <nav
        className={`w-full max-w-7xl transition-all duration-300 rounded-2xl
        ${scrolled
          ? "bg-white shadow-lg border border-gray-200"
          : "bg-white/5 backdrop-blur-lg border border-white/20"
        }`}
      >
        <div className="px-5 md:px-8 py-3 md:py-4 flex justify-between items-center">

          {/* LEFT: Logo + Name */}
          <Link href="/" onClick={closeAll} className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Victory Chapel Logo" width={38} height={38} />
            <div className="leading-tight font-serif">
              <h1 className={`font-bold text-sm md:text-lg tracking-wide ${scrolled ? "text-gray-900" : "text-white"}`}>
                VICTORY CHAPEL
              </h1>
              <p className={`text-[10px] md:text-xs tracking-wider ${scrolled ? "text-gray-600" : "text-white/80"}`}>
                CHRISTIAN CENTER - Panacan
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className={`hidden md:flex space-x-10 items-center font-medium font-serif ${scrolled ? "text-gray-800" : "text-white"}`}>
            <Link href="/" className="relative group transition font-serif">
              <span className="group-hover:text-gray-300 transition">Home</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ED0106] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="relative group">
              <button className="relative transition group-hover:text-gray-300 font-serif">
                About
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ED0106] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div className={`absolute left-0 top-full mt-3 w-52 rounded-xl shadow-xl transition-all duration-300
                ${scrolled ? "bg-white text-gray-800" : "bg-white text-white backdrop-blur-md"}
                opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}>
                <Link href="/about" className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition font-serif">About Us</Link>
                <Link href="/about/history" className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition font-serif">History</Link>
                <Link href="/about/pastors" className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition font-serif">Our Pastors</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="relative transition group-hover:text-gray-300 font-serif">
                Services
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ED0106] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div className={`absolute left-0 top-full mt-3 w-52 rounded-xl shadow-xl transition-all duration-300
                ${scrolled ? "bg-white text-gray-800" : "bg-white text-white backdrop-blur-md"}
                opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}>
                <Link href="/services" className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition font-serif">Service Schedule</Link>
              </div>
            </div>

            <Link href="/visit" className="relative group transition font-serif">
              <span className="group-hover:text-gray-300 transition">Visit Us</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ED0106] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-6 transition-all duration-300 ${scrolled ? "bg-gray-900" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-6 transition-all duration-300 ${scrolled ? "bg-gray-900" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 transition-all duration-300 ${scrolled ? "bg-gray-900" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <div className={`md:hidden border-t ${scrolled ? "border-gray-200 bg-white" : "border-white/20 bg-black/80 backdrop-blur-lg"} rounded-b-2xl overflow-hidden`}>
            <Link href="/" onClick={closeAll}
              className={`block px-6 py-4 font-serif font-medium tracking-wide ${scrolled ? "text-gray-800 hover:bg-gray-50" : "text-white hover:bg-white/10"}`}>
              Home
            </Link>

            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`w-full text-left px-6 py-4 font-serif font-medium tracking-wide flex justify-between items-center ${scrolled ? "text-gray-800 hover:bg-gray-50" : "text-white hover:bg-white/10"}`}>
                About
                <span className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              {aboutOpen && (
                <div className={`${scrolled ? "bg-gray-50" : "bg-white/5"}`}>
                  <Link href="/about" onClick={closeAll} className={`block px-10 py-3 font-serif text-sm ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/80 hover:bg-white/10"}`}>About Us</Link>
                  <Link href="/about/history" onClick={closeAll} className={`block px-10 py-3 font-serif text-sm ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/80 hover:bg-white/10"}`}>History</Link>
                  <Link href="/about/pastors" onClick={closeAll} className={`block px-10 py-3 font-serif text-sm ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/80 hover:bg-white/10"}`}>Our Pastors</Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`w-full text-left px-6 py-4 font-serif font-medium tracking-wide flex justify-between items-center ${scrolled ? "text-gray-800 hover:bg-gray-50" : "text-white hover:bg-white/10"}`}>
                Services
                <span className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              {servicesOpen && (
                <div className={`${scrolled ? "bg-gray-50" : "bg-white/5"}`}>
                  <Link href="/services" onClick={closeAll} className={`block px-10 py-3 font-serif text-sm ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/80 hover:bg-white/10"}`}>Service Schedule</Link>
                </div>
              )}
            </div>

            <Link href="/visit" onClick={closeAll}
              className={`block px-6 py-4 font-serif font-medium tracking-wide ${scrolled ? "text-gray-800 hover:bg-gray-50" : "text-white hover:bg-white/10"}`}>
              Visit Us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
