"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceSection() {
  return (
    <section className="bg-gradient-to-b from-[#ED0106] to-[#870103] text-white py-16 px-6 font-serif">
      <div className="max-w-4xl mx-auto text-center">

        <h3 className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-lg md:text-xl mb-10">
          Service Schedule
        </h3>

        <div className="space-y-5 text-sm md:text-base lg:text-lg mb-10">
          <div className="flex justify-between border-b border-white/30 pb-3 font-bold gap-4">
            <span className="text-left">Sunday Divine Service</span>
            <span className="shrink-0">9:30 AM</span>
          </div>
          <div className="flex justify-between border-b border-white/30 pb-3 font-bold gap-4">
            <span className="text-left">Sunday Evening Service</span>
            <span className="shrink-0">6:30 PM</span>
          </div>
          <div className="flex justify-between border-b border-white/30 pb-3 font-bold gap-4">
            <span className="text-left">Midweek Service</span>
            <span className="shrink-0">6:30 PM</span>
          </div>
          <div className="flex justify-between border-b border-white/30 pb-3 font-bold gap-4">
            <span className="text-left">Location</span>
            <span className="text-right shrink-0">
              2nd Floor Rose Bakeshop<br />
              Panacan Davao City
            </span>
          </div>
        </div>

        <motion.div
          className="button-borders inline-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <Link href="/services" className="primary-button">
            View Full Schedule →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
