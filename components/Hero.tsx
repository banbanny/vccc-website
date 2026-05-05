import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] md:h-[650px] flex items-end overflow-hidden">
      <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/home-hero.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#000000]/40 to-[#772400]/70" />

      {/* Content */}
      <div className="relative z-10 text-white px-6 md:px-0 md:left-[8%] md:absolute md:-translate-y-1/2 pb-16 md:pb-0 pt-32 md:pt-0 max-w-[92vw] md:max-w-3xl ">
        <p className="text-[10px] md:text-xs tracking-[3px] md:tracking-[6px] uppercase text-white/60 mb-3 font-serif">
          Where everybody is somebody and Jesus Christ is Lord
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[.1em] md:tracking-[.3em] uppercase leading-tight font-serif">
          EXPECT A<br className="sm:hidden" /> MIRACLE
        </h1>
        <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />
      </div>
    </section>
  );
}
