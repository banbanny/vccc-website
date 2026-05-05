"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function ServiceSection() {
  return (
    <section className="bg-gradient-to-b from-[#ED0106] to-[#870103] text-white py-20 px-6 font-serif">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h3 className="uppercase tracking-[0.3em] text-xl mb-12">
          Service Schedule
        </h3>

        {/* Schedule List */}
        <div className="space-y-6 text-base md:text-lg mb-12">
          <div className="flex justify-between border-b border-white/30 pb-3 font-bold ">
            <span>Sunday Divine Service</span>
            <span>9:30 PM</span>
          </div>

          <div className="flex justify-between border-b border-white/30 pb-3 font-bold ">
            <span>Sunday Evening Service</span>
            <span>6:30 PM</span>
          </div>

          <div className="flex justify-between border-b border-white/30 pb-3 font-bold ">
            <span>Midweek Service</span>
            <span>6:30 PM</span>
          </div>

          <div className="flex justify-between border-b border-white/30 pb-3 font-bold ">
            <span>Location</span>
            <span className="text-right">
              2nf Floor Rose Bakeshop<br />
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
