import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-[#12191B] text-white pt-12 pb-16 px-6 overflow-hidden">

        {/* Faded JESUS Text (desktop only) */}
        <div className="absolute top-0 right-10 pointer-events-none hidden md:block">
          <h1 className="text-[200px] font-extrabold text-white/3 tracking-[30px] select-none leading-none">
            JESUS
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm relative z-10 items-start">

          {/* Church Info */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start md:ml-12">
            <div className="mb-4">
              <img src="/logo.png" alt="Victory Chapel Logo" className="h-32 md:h-48 w-auto" />
            </div>
            <h4 className="font-bold mb-2 text-base md:text-xl tracking-[2px] md:tracking-[4px] uppercase text-center md:text-left">
              Victory Chapel Christian Center
            </h4>
            <p className="text-white/80 tracking-[3px] md:tracking-[6px] uppercase text-xs md:text-sm text-center md:text-left">
              Panacan Davao City
            </p>
          </div>

          {/* Service Schedule */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-6 text-lg md:text-2xl tracking-[2px] md:tracking-[4px] uppercase">
              Service Schedule
            </h4>
            <div className="space-y-6 text-white/80">
              <div>
                <p className="tracking-[2px] md:tracking-[4px] uppercase font-medium text-xs md:text-sm">Sunday Divine Service</p>
                <p className="mt-1 tracking-[2px] md:tracking-[4px] uppercase text-white/60 text-xs">4:30 PM</p>
              </div>
              <div>
                <p className="tracking-[2px] md:tracking-[4px] uppercase font-medium text-xs md:text-sm">Sunday Evening Service</p>
                <p className="mt-1 tracking-[2px] md:tracking-[4px] uppercase text-white/60 text-xs">6:30 PM</p>
              </div>
              <div>
                <p className="tracking-[2px] md:tracking-[4px] uppercase font-medium text-xs md:text-sm">Midweek Service</p>
                <p className="mt-1 tracking-[2px] md:tracking-[4px] uppercase text-white/60 text-xs">6:30 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-6 text-lg md:text-2xl tracking-[2px] md:tracking-[4px] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/80">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/visit", label: "Visit Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    className="relative inline-block tracking-[2px] md:tracking-[4px] uppercase text-xs md:text-sm transition-colors duration-300 hover:text-white
                               after:content-[''] after:absolute after:left-0 after:-bottom-1
                               after:h-[2px] after:w-0 after:bg-[#ED0106]
                               after:transition-all after:duration-300 hover:after:w-full">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-[#D9D9D9] text-center py-4 text-[10px] md:text-xs text-black/60 tracking-[1px] md:tracking-[2px] uppercase px-4">
        © {new Date().getFullYear()} Victory Chapel Christian Center - PANACAN ● All Rights Reserved.
      </div>
    </>
  );
}
