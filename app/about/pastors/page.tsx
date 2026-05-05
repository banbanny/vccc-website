import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";

export default function PastorsPage() {
  const daughterChurches = [
    { name: "PTR. RAFFY CALAGOS", church: "SASA CHURCH", image: "/ptr-raffy.jpg", side: "right" },
    { name: "PTR. OBET BASTE", church: "MALAGAMOT CHURCH", image: "/ptr-obet.jpg", side: "left" },
    { name: "PTR. JOSE RAMADA", church: "JEROME, AGDAO CHURCH", image: "/ptr-jose.jpg", side: "right" },
    { name: "PTR. JACOB GALLARD", church: "SAN ANTONIO, AGDAO CHURCH", image: "/ptr-jacob.jpg", side: "left" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#12191B] to-[#577881] text-white font-serif">

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[500px] md:h-[650px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pastors-hero.jpg"
            alt="Pastors Hero"
            fill
            priority
            className="object-cover object-[center_35%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#12191B]" />
      <div className="relative z-10 pb-10 md:pb-14 px-6 md:pl-[8%] pt-32 md:pt-0">
          <p className="text-[10px] md:text-xs tracking-[3px] md:tracking-[6px] uppercase text-white/60 mb-3 font-serif">
            MINISTERS OF GOD
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[.15em] md:tracking-[.3em] uppercase leading-tight font-serif">
            PASTORS
          </h1>
          <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />
        </div>
      </section>

      {/* ── HEAD PASTOR SECTION ── */}
      <section className="px-6 md:px-[8%] py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">

          <FadeIn direction="left">
            <div className="flex flex-col w-full max-w-[280px] mx-auto lg:mx-0">
              <div className="relative w-full aspect-[3/4]">
                <Image src="/ptr.romel.jpg" alt="Ptr. Romel Basnillo" fill className="object-cover object-top" />
              </div>
              <div className="bg-[#ED0106] px-4 py-3 flex items-center gap-3">
                <div className="w-[3px] h-10 bg-white/40 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold tracking-[2px] uppercase leading-tight text-white">PTR. ROMEL BASNILLO</p>
                  <p className="text-[9px] tracking-[1.5px] uppercase text-white/70 mt-1">HEAD PASTOR OF VCCC PANACAN</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <div className="space-y-5 text-[15px] leading-[1.9] text-white/80">
              <p>
                <span className="text-white font-bold">Pastor Romel Basnillo</span>,
                together with his family, was sent out to Panacan in August 2007 to
                pioneer the work in obedience to God's calling. What began as a pioneering
                church has, by God's grace, grown and prospered over the past 18 years.
              </p>
              <p>
                Under Pastor Romel's shepherding, the church has given birth to four
                daughter churches and continues to expand, remaining anchored in the
                mission of the fellowship — to make disciples, preach the gospel, and be
                a blessing to all who would be transformed by the power of Jesus Christ.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── DAUGHTER CHURCHES BANNER ── */}
      <FadeIn direction="none">
        <div className="bg-[#ED0106] py-5 px-6 md:px-[8%]">
          <p className="text-white font-bold tracking-[4px] md:tracking-[6px] uppercase text-center text-xs md:text-lg">
             DAUGHTER CHURCHES 
          </p>
        </div>
      </FadeIn>

      {/* ── DAUGHTER CHURCHES LIST ── */}
      <section className="bg-white px-4 md:px-[8%] py-6 md:py-16">
        <div className="max-w-6xl mx-auto">
          {daughterChurches.map((pastor, index) => (
            <FadeIn key={pastor.name} direction="up" delay={index * 100}>
              <div
                className={`
                  flex items-stretch border-b border-gray-200 last:border-0
                  min-h-[110px] md:min-h-[260px]
                  flex-row
                  ${pastor.side === "right" ? "md:flex-row-reverse" : "md:flex-row"}
                `}
              >
                {/* Photo with #12191B shadow behind it */}
                <div className="relative shrink-0 w-[100px] sm:w-[140px] md:w-[240px] py-4 md:py-6">
                  {/* Dark shadow block offset behind the image — same color as Services cards */}
                  <div
                    className={`absolute inset-y-4 md:inset-y-6 w-full bg-[#12191B]
                      ${pastor.side === "right"
                        ? "translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3"
                        : "-translate-x-2 translate-y-2 md:-translate-x-3 md:translate-y-3"
                      }`}
                  />
                  {/* Actual photo sitting on top of the shadow */}
                  <div className="relative w-full h-full">
                    <Image
                      src={pastor.image}
                      alt={pastor.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-5">

                  {/* MOBILE: always left border + left-aligned */}
                  <div className="border-l-4 border-[#ED0106] pl-3 md:hidden">
                    <p className="text-gray-900 font-bold tracking-[1px] text-[11px] sm:text-[13px] uppercase leading-snug">
                      {pastor.name}
                    </p>
                    <p className="text-[#ED0106] text-[9px] sm:text-[10px] tracking-[1px] uppercase mt-2">
                      {pastor.church}
                    </p>
                    <div className="w-8 h-[2px] bg-[#ED0106] mt-2" />
                  </div>

                  {/* DESKTOP: mirrors which side the image is on */}
                  <div
                    className={`hidden md:block ${
                      pastor.side === "left"
                        ? "border-l-4 border-[#ED0106] pl-5"
                        : "border-r-4 border-[#ED0106] pr-5 text-right"
                    }`}
                  >
                    <p className="text-gray-900 font-bold tracking-[2px] text-[13px] uppercase">
                      {pastor.name}
                    </p>
                    <p className="text-[#ED0106] text-[10px] tracking-[2px] uppercase mt-2">
                      {pastor.church}
                    </p>
                    <div className={`w-12 h-[2px] bg-[#ED0106] mt-3 ${pastor.side === "right" ? "ml-auto" : ""}`} />
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </main>
  );
}
