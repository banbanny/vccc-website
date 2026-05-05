"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-6">
      <nav
        className={`w-full max-w-7xl transition-all duration-300 rounded-2xl
        ${
          scrolled
            ? "bg-white shadow-lg border border-gray-200"
            : "bg-white/5 backdrop-blur-lg border border-white/20 "
        }`}
      ><div className="px-8 py-4 flex justify-between items-center">

          {/* LEFT SIDE */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Victory Chapel Logo"
              width={45}
              height={45}
            />

            <div className="leading-tight  font-serif">
              <h1 className={`font-bold text-lg tracking-wide ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                VICTORY CHAPEL
              </h1>
              <p className={`text-xs tracking-wider ${
                  scrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                CHRISTIAN CENTER - Panacan
              </p>
            </div>
          </div>

          {/* RIGHT SIDE MENU */}
          <div  className={`hidden md:flex space-x-10 items-center font-medium font-serif ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >

            {/* HOME */}
            <Link href="/" className="relative group transition font-serif">
              <span className="group-hover:text-gray-300  transition">
                Home
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ED0106] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* ABOUT DROPDOWN */}
            <div className="relative group">
              <button className="relative transition group-hover:text-gray-300  font-serif">
                About
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ED0106] transition-all duration-300 group-hover:w-full"></span>
              </button>

            <div
                className={`absolute left-0 top-full mt-3 w-52 rounded-xl shadow-xl
                transition-all duration-300
                ${
                  scrolled
                    ? "bg-white text-gray-800"
                    : "bg-white text-white backdrop-blur-md"
                }
                opacity-0 invisible translate-y-3
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
              >
                
                <Link href="/about" className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition  font-serif">
                  About Us
                </Link>
                <Link href="/about/history" className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition  font-serif">
                  History
                </Link>
                <Link href="/about/pastors" className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition  font-serif" >
                  Our Pastors
                </Link>
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="relative transition group-hover:text-gray-300  font-serif">
                Services
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ED0106]  transition-all duration-300 group-hover:w-full"></span>
              </button>
<div
                className={`absolute left-0 top-full mt-3 w-52 rounded-xl shadow-xl
                transition-all duration-300
                ${
                  scrolled
                    ? "bg-white text-gray-800"
                    : "bg-white text-white backdrop-blur-md"
                }
                opacity-0 invisible translate-y-3
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
              >
                <Link href="/services" className="block px-5 py-3 text-gray-800 hover:bg-gray-100 transition  font-serif">
                  Service Schedule
                </Link>
              
              
              </div>
            </div>

            {/* VISIT */}
            <Link href="/visit" className="relative group transition  font-serif">
              <span className="group-hover:text-gray-300 transition">
                Visit Us
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ED0106]  transition-all duration-300 group-hover:w-full"></span>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  );
}
