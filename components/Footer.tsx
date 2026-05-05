import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-[#12191B] text-white pt-12 pb-24 px-6 overflow-hidden">
        
        {/* Faded JESUS Text (Upper Right) */}
        <div className="absolute top-0 right-10 pointer-events-none hidden md:block">
          <h1 className="text-[200px] font-extrabold text-white/3 tracking-[30px] select-none leading-none">
            JESUS
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-sm relative z-10 items-start">
          
          {/* Church Info - Left Side */}
          <div className="md:col-span-2 md:ml-12">
            
            {/* Big Logo */}
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Victory Chapel Logo"
                className="h-56 md:h-64 w-auto"
              />
            </div>

            <h4 className="font-bold mb-4 text-xl tracking-[4px] uppercase">
              Victory Chapel Christian Center
            </h4>

            <p className="text-white/80 tracking-[6px] uppercase">
              Panacan Davao City
            </p>

          </div>

          {/* Service Schedule */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-8 text-2xl tracking-[4px] uppercase">
              Service Schedule
            </h4>

            <div className="space-y-8 text-white/80">

              <div>
                <p className="tracking-[4px] uppercase font-medium">
                  Sunday Divine Service
                </p>
                <p className="mt-2 tracking-[4px] uppercase text-white/60">
                  4:30 PM
                </p>
              </div>

              <div>
                <p className="tracking-[4px] uppercase font-medium">
                  Sunday Evening Service
                </p>
                <p className="mt-2 tracking-[4px] uppercase text-white/60">
                  6:30 PM
                </p>
              </div>

              <div>
                <p className="tracking-[4px] uppercase font-medium">
                  Midweek Service
                </p>
                <p className="mt-2 tracking-[4px] uppercase text-white/60">
                  6:30 PM
                </p>
              </div>

            </div>
          </div>

          {/* Quick Links */}
<div className="md:col-span-1">
  <h4 className="font-bold mb-8 text-2xl tracking-[4px] uppercase">
    Quick Links
  </h4>

  <ul className="space-y-6 text-white/80">
    <li>
      <Link
        href="/about"
        className="relative inline-block tracking-[4px] uppercase transition-colors duration-300 hover:text-[white]
                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                   after:h-[2px] after:w-0 after:bg-[#ED0106]
                   after:transition-all after:duration-300
                   hover:after:w-full"
      >
        About
      </Link>
    </li>

    <li>
      <Link
        href="/services"
        className="relative inline-block tracking-[4px] uppercase transition-colors duration-300 hover:text-[white]
                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                   after:h-[2px] after:w-0 after:bg-[#ED0106]
                   after:transition-all after:duration-300
                   hover:after:w-full"
      >
        Services
      </Link>
    </li>

    <li>
      <Link
        href="/visit"
        className="relative inline-block tracking-[4px] uppercase transition-colors duration-300 hover:text-[white]
                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                   after:h-[2px] after:w-0 after:bg-[#ED0106]
                   after:transition-all after:duration-300
                   hover:after:w-full"
      >
        Visit Us
      </Link>
    </li>
  </ul>
</div>


        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-[#D9D9D9] text-center py-5 text-xs text-black/60 tracking-[2px] uppercase">
        © {new Date().getFullYear()} Victory Chapel Christian Center - PANACAN ● 
        All Rights Reserved.
      </div>
    </>
  );
}
