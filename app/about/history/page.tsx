import Navbar from "@/components/Navbar";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#12191B] to-[#577881] text-white font-serif">

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="History Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#12191B]" />
        <div className="relative z-10 pb-14 pl-[8%] mt-50">
          <p className="text-xs tracking-[6px] uppercase text-white/60 mb-3 font-serif">
            OUR HISTORY ● OUR STORY ● OUR PURPOSE
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-[.3em] uppercase leading-none font-serif">
            HISTORY
          </h1>
          <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />
        </div>
      </section>

      {/* ── RED BANNER ── */}
      <FadeIn direction="none">
        <div className="bg-[#ED0106] py-6 px-[8%]">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-5">
            <span className="text-white/60 text-base select-none"> ● </span>
            <p className="text-white font-bold tracking-[6px] uppercase text-center text-sm md:text-lg leading-none">
              The History
            </p>
            <span className="text-white/60 text-base select-none"> ● </span>
          </div>
        </div>
      </FadeIn>

      {/* ── FOUNDER SECTION ── */}
      <section className="px-[8%] py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">

          <FadeIn direction="left">
            <div className="space-y-5 text-[15px] leading-[1.9] text-white/80">
              <p>
                In 1970,{" "}
                <span className="text-white font-bold">Wayman Mitchell</span> went
                to the small town of Prescott, Arizona. From here, a spiritual fire
                was launched that is spanning the globe.
              </p>
              <p>
               In a few short years, hundreds of churches have been planted:
                and crusades and conference; are touching tens of thousands every year. 
                This church is a product of that vision and is working to see it expanded
                 in the short time that remains before Jesus’ return.
              </p>
              <p>
                God has given us a vision for the day we live in. Our message is
                simple, yet it is the cornerstone of all truth.
              </p>
              <p>
                Jesus Christ is the only hope for man’s salvation.
                 In a world full of empty dreams and false promises is a truth that grows 
                 stronger every year, and that is Jesus Christ and Him crucified! 
                 The fellowship now includes more than 2,500 congregations worldwide.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <div className="flex flex-col w-full">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/ptr.wayman.avif"
                  alt="Ptr. Wayman Mitchell"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-[#ED0106] px-5 py-4 flex items-center gap-3">
                <div className="w-[3px] h-10 bg-white/40 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold tracking-[2.5px] uppercase leading-tight text-white">
                    PTR. WAYMAN MITCHELL
                  </p>
                  <p className="text-[9px] tracking-[1.5px] uppercase text-white/70 mt-[5px]">
                    FOUNDER OF THE WORLD CONVENTION
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── RED BANNER ── */}
      <FadeIn direction="none">
        <div className="bg-[#ED0106] py-6 px-[8%]">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-5">
            <span className="text-white/60 text-base select-none">●</span>
            <p className="text-white font-bold tracking-[6px] uppercase text-center text-sm md:text-lg leading-none">
              MISSIONARY PASTOR IN THE PHILIPPINES
            </p>
            <span className="text-white/60 text-base select-none">●</span>
          </div>
        </div>
      </FadeIn>

      {/* ── MISSIONARY SECTION ── */}
      <section className="bg-white px-[8%] py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-start">

          <FadeIn direction="left">
            <div className="flex flex-col w-full">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/ptr.aulson.png"
                  alt="Ptr. Mark and Michelle Aulson"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-[#ED0106] px-5 py-4 flex items-center gap-3">
                <div className="w-[3px] h-10 bg-white/40 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold tracking-[2.5px] uppercase leading-tight text-white">
                    PTR. MARK AND MICHELLE AULSON
                  </p>
                  <p className="text-[9px] tracking-[1.5px] uppercase text-white/70 mt-[5px]">
                    MISSIONARY IN THE PHILIPPINES
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <div className="space-y-5 text-[15px] leading-[1.9] text-gray-700">
              <p>
                <span className="text-gray-900 font-bold">
                  Pastor Mark &amp; Michele Aulson
                </span>{" "}
                came to Christ in the Jesus People movement of the 1970s and have
                given their lives to ministry for over 45 years. The Aulsons have a
                rich history of ministry in the US and as missionaries in the
                Philippines, specifically in Mindanao Davao City where they built a
                church that has now grown to plant over 300 churches in the
                Philippines and Southeast Asia.
              </p>
              <p>
                Pastor Aulson took the pastorate of The Door Temple in 1999 and has
                nurtured a focus on evangelism, discipleship, and church planting.
                Under his ministry, the church has planted dozens of churches both
                locally and internationally, as well as helping other churches to
                grow their own capacity to disciple and send forth workers.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── RED BANNER ── */}
      <FadeIn direction="none">
        <div className="bg-[#ED0106] py-6 px-[8%]">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-5">
            <span className="text-white/60 text-base select-none">●</span>
            <p className="text-white font-bold tracking-[6px] uppercase text-center text-sm md:text-lg leading-none">
              Head Pastor of Mindanao
            </p>
            <span className="text-white/60 text-base select-none">●</span>
          </div>
        </div>
      </FadeIn>

      {/* ── HEAD PASTOR OF MINDANAO ── */}
      <section className="relative px-[8%] py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/choir.jpg"
            alt="Background"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#12191B]/80 to-[#577881]/60" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start">

          <FadeIn direction="left">
            <div className="space-y-5 text-[15px] leading-[1.9] text-white/80">
              <p>
                For more than three decades,{" "}
                <span className="text-white font-bold">Pastor Frank Buenaventura</span>{" "}
                has faithfully served in Mindanao, carrying the vision of evangelism,
                discipleship, and church planting. God has used his life and ministry
                to raise a growing network of churches that continues to bear fruit
                across the region.
              </p>
              <p>
                After Pastor Mark Aulson returned to the United States, Pastor Frank
                assumed leadership of the Mindanao work. Under his guidance, the
                ministry has continued to breathe and expand, providing oversight to
                more than 300 churches, including work in military bases throughout
                Southeast Asia.
              </p>
              <p>
                The vision of the fellowship remains unchanged — to preach the gospel,
                make disciples, and plant churches. The work continues to cross
                cultural lines and agency, reaching cities, provinces, and nations for
                the glory of God.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <div className="flex flex-col w-full">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/ptr.frank.jpg"
                  alt="Ptr. Frank and Vida Buenaventura"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-[#ED0106] px-5 py-4 flex items-center gap-3">
                <div className="w-[3px] h-10 bg-white/40 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold tracking-[2.5px] uppercase leading-tight text-white">
                    PTR. FRANK AND VIDA BUENAVENTURA
                  </p>
                  <p className="text-[9px] tracking-[1.5px] uppercase text-white/70 mt-[5px]">
                    HEAD PASTOR OF MINDANAO
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── RED BANNER ── */}
      <FadeIn direction="none">
        <div className="bg-[#ED0106] py-6 px-[8%]">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-5">
            <span className="text-white/60 text-base select-none">●</span>
            <p className="text-white font-bold tracking-[6px] uppercase text-center text-sm md:text-lg leading-none">
              VICTORY CHAPEL CHRISTIAN CENTER — PANACAN
            </p>
            <span className="text-white/60 text-base select-none">●</span>
          </div>
        </div>
      </FadeIn>

      {/* ── VCCC PANACAN ── */}
      <section className="bg-white px-[8%] py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start">

          <FadeIn direction="left">
            <div className="space-y-5 text-[15px] leading-[1.9] text-gray-700">
              <p>
                <span className="text-gray-900 font-bold">Pastor Romel Basnillo</span>{" "}
                is one of the fruits of the church-planting work sent out from the
                Door Temple Church to pioneer VCCC Panacan, Davao City. In obedience
                to God's calling. With a heart for souls and a deep commitment to the
                vision, he stepped forward in faith to labor in the harvest field the
                Lord had prepared.
              </p>
              <p>
                For more than 15 years, God has faithfully blessed the work. Under
                Pastor Romel's shepherding, the church has grown and multiplied, giving
                birth to four daughter churches and continuing to expand, remaining
                anchored in the mission of the fellowship. VCCC Panacan continues to
                follow the Lord's commission — to make disciples of all the world,
                preach the gospel, reach the lost, and be a blessing to all who would
                be transformed by the power of Jesus Christ.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <div className="flex flex-col w-full">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/ptr.romel.jpg"
                  alt="Ptr. Romel Basnillo"
                  fill
                  className="object-cover object-center"
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

        </div>
      </section>

    </main>
  );
}
