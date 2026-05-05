"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BelongSection() {
  return (
    <section className="relative w-full py-28 px-6 overflow-hidden  font-serif">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/belong.jpg" // Make sure this is inside /public
          alt="Belong Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center text-white">
        
        <h3 className="text-white tracking-[.5em] text-lg md:text-3xl mb-15 font-[var(--font-inter)] font-regular">
          BELONG ● GOD'S FAMILY
        </h3>

        <h2 className="text-3xl md:text-5xl font-[var(--font-montserrat)] font-bold mb-6 leading-tight">
          A Place Where You Are <br className="hidden md:block" />
          Family
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-20 max-w-2xl mx-auto font-[var(--font-inconsolata)]">
          At Victory Chapel Christian Center, we believe church is more than a building —
          it’s a family. No matter your background or where you are in life,
          there is a place for you here. Come grow with us, serve with us,
          and experience genuine fellowship.
        </p>

        <motion.div
          className="button-borders inline-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <Link href="/visit" className="primary-button white-corner">
            Visit Us
          </Link>
        </motion.div>


      </div>
    </section>
  );
}
