"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center px-6 py-20 text-center overflow-hidden font-serif">

      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <Image src="/welcome.jpg" alt="Church Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-white/80" />
      </motion.div>

      <motion.div
        className="max-w-4xl w-full text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <h3 className="relative inline-block text-[#ED0106]/80 tracking-[0.3em] text-sm md:text-2xl mb-8 font-normal">
          WELCOME
          <span className="absolute left-0 -bottom-3 h-[2px] w-full bg-[#12191B]"></span>
        </h3>

        <h2 className="text-[#000000]/80 text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-8 mt-4">
          VICTORY CHAPEL CHRISTIAN CENTER
        </h2>

        <p className="text-black text-base md:text-lg leading-relaxed mb-10">
          We are a loving and Christ-centered community where everyone is welcome.
          Whether you are new to faith or have been walking with God for many
          years, our church is a place where you can belong, grow, and serve.
        </p>

        <div className="button-borders inline-block">
          <Link href="/about" className="primary-button">
            Learn More About Us →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
