import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/home-hero.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#000000]/40 to-[#772400]/70" />


      {/* Content */}
  <div className="relative z-10 text-white absolute top-20 left-[8%] -translate-y-10 max-w-3xl">
    
   <p className="text-xs tracking-[6px] uppercase text-white/60 mb-3  font-serif">
      Where everybody is somebody and Jesus Christ is Lord
    </p>

    <h1 className="text-5xl md:text-7xl font-bold tracking-[.3em] uppercase leading-none  font-serif">
      EXPECT A MIRACLE
    </h1>
     <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />


  </div>
      
    </section>
  );
}
