"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BelongSection() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden font-serif">

      <div className="absolute inset-0 -z-10">
        <Image src="/belong.jpg" alt="Belong Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="max-w-4xl mx-auto text-center text-white">
        <h3 className="text-white tracking-[.3em] md:tracking-[.5em] text-base md:text-2xl mb-8 font-normal">
          BELONG ● GOD&apos;S FAMILY
        </h3>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          A Place Where You Are <br className="hidden md:block" />
          Family
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-12 max-w-2xl mx-auto">
          At Victory Chapel Christian Center, we believe church is more than a building —
          it&apos;s a family. No matter your background or where you are in life,
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
