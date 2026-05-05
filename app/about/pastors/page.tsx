import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";

export default function PastorsPage() {
  const daughterChurches = [
    {
      name: "PTR. RAFFY CALAGOS",
      church: "SASA CHURCH",
      image: "/ptr-raffy.jpg",
      side: "right",
    },
    {
      name: "PTR. OBET BASTE",
      church: "MALAGAMOT CHURCH",
      image: "/ptr-obet.jpg",
      side: "left",
    },
    {
      name: "PTR. ANATALIO TALABOC",
      church: "JEROME, AGDAO CHURCH",
      image: "/ptr-tata.jpg",
      side: "right",
    },
    {
      name: "PTR. JACOB GALLARDO",
      church: "SAN ANTONIO, AGDAO CHURCH",
      image: "/ptr-jacob.jpg",
      side: "left",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#12191B] to-[#577881] text-white font-serif">

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full h-[650px] flex items-center overflow-hidden">
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
        <div className="relative z-10 pb-14 pl-[8%]">
          <p className="text-xs tracking-[6px] uppercase text-white/60 mb-3 mt-50">
            MINISTERS OF GOD
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-[.3em] uppercase leading-none">
            PASTORS
          </h1>
          <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />
        </div>
      </section>

      {/* ── HEAD PASTOR SECTION ── */}
      <section className="px-[8%] py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

          <FadeIn direction="left">
            <div className="flex flex-col w-full">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/ptr.romel.jpg"
                  alt="Ptr. Romel Basnillo"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="bg-[#ED0106] px-5 py-4 flex items-center gap-3">
                <div className="w-[3px] h-10 bg-white/40 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold tracking-[2.5px] uppercase leading-tight text-white">
                    PTR. ROMEL BASNILLO
                  </p>
                  <p className="text-[9px] tracking-[1.5px] uppercase text-white/70 mt-[5px]">
                    HEAD PASTOR OF VCCC PANACAN
                  </p>
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
                Today, the church continues to move forward in its mission, faithfully
                sending out couples to reach more souls and expand the work of the ministry.
              </p>
              <p>
                Under Pastor Romel's shepherding, the church has given birth to four
                daughter churches and continues to expand, remaining anchored in the
                mission of the fellowship. VCCC Panacan follows the Lord's commission —
                to make disciples, preach the gospel, and be a blessing to all who would
                be transformed by the power of Jesus Christ.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── DAUGHTER CHURCHES BANNER ── */}
      <FadeIn direction="none">
        <div className="bg-[#ED0106] py-6 px-[8%]">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-5">
            <span className="text-white/60 text-base select-none">✝</span>
            <p className="text-white font-bold tracking-[6px] uppercase text-center text-sm md:text-lg leading-none">
              DAUGHTER CHURCHES
            </p>
            <span className="text-white/60 text-base select-none">✝</span>
          </div>
        </div>
      </FadeIn>

      {/* ── DAUGHTER CHURCHES LIST ── */}
      <section className="bg-white px-[8%] py-16">
        <div className="max-w-6xl mx-auto space-y-0">
          {daughterChurches.map((pastor, index) => (
            <FadeIn key={pastor.name} direction="up" delay={index * 100}>
              <div
                className={`flex flex-col md:flex-row items-stretch border-b border-gray-200 last:border-0 ${
                  pastor.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Photo */}
                <div className="relative w-full md:w-[240px] shrink-0 aspect-[3/4] md:aspect-auto md:min-h-[300px]">
                  <Image
                    src={pastor.image}
                    alt={pastor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Label */}
                <div className="flex-1 flex flex-col justify-center px-8 py-10">
                  <div
                    className={`${
                      pastor.side === "left"
                        ? "border-l-4 pl-5"
                        : "border-r-4 pr-5 text-right"
                    } border-[#ED0106]`}
                  >
                    <p className="text-gray-900 font-bold tracking-[2px] text-[13px] uppercase">
                      {pastor.name}
                    </p>
                    <p className="text-[#ED0106] text-[10px] tracking-[2px] uppercase mt-2">
                      {pastor.church}
                    </p>
                    <div
                      className={`w-12 h-[2px] bg-[#ED0106] mt-3 ${
                        pastor.side === "right" ? "ml-auto" : ""
                      }`}
                    />
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
