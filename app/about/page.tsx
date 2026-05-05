import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  const pillars = [
    {
      label: "WORSHIP",
      text: 'Man chief end is to glorify God and to enjoy Him forever. Psalm 29:2 says, "Give unto the Lord the glory due unto His name; worship the Lord in the beauty of holiness." Central to the life of the congregation is the vibrant, heartfelt, and exuberant worship of Jesus Christ as Lord.',
    },
    {
      label: "EVANGELISM",
      text: "Mark 16:15 says, \"And He said to them, 'Go into all the world and preach the gospel to every creature…'\" The great commission has never been rescinded. Keeping the Gospel \"outside the four walls\" is one of the defining ethics and emphasis of our ministry.",
    },
    {
      label: "DEVOTION",
      text: "Devotion refers to our commitment to God's call, God's heart, and God's Word. We believe in a serious commitment to communing with God. Finding the balance between legalism and license is the fruit of an intimate relationship with God.",
    },
    {
      label: "FELLOWSHIP",
      text: "Acts 2:42 says, \"They devoted themselves to the apostles' teaching and to the fellowship.\" The life of the early church centered around the faithful ministry of teaching and preaching God's Word and the bond of committed relationships. Galatians 6:10 reminds us, \"as we have opportunity, let us do good to all, especially to those who are of the household of faith.\" The church must be a fellowship of believers.",
    },
    {
      label: "DISCIPLESHIP",
      text: 'Matthew 28:19-20, "Go therefore and make disciples of all nations... teaching them to observe all things I have commanded you." Discipleship is a responsibility we take seriously. It is the process where we challenge believers to mature and grow as followers of Christ seeking to do His will.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#12191B] to-[#577881] text-white font-serif">

      <Navbar />

      {/* ── HERO ── */}
      {/* min-h for mobile, fixed h-[650px] on desktop — matches deployed */}
      <section className="relative w-full min-h-[500px] md:h-[650px] flex items-end md:items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-about.png"
            alt="About Us Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#12191B]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#12191B]" />
      <div className="relative z-10 pb-10 md:pb-14 px-6 md:pl-[8%] pt-32 md:pt-0">
          <p className="text-[10px] md:text-xs tracking-[3px] md:tracking-[6px] uppercase text-white/60 mb-3 font-serif">
              ONE MISSION ● ONE VISION ● ONE GOAL
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[.15em] md:tracking-[.3em] uppercase leading-tight font-serif">
            ABOUT US
          </h1>
          <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      {/* min-h-[700px] preserved from deployed version */}
      <section className="relative w-full min-h-[800px] flex items-center justify-center px-6 md:px-[8%] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/bglow.png" alt="Who We Are Background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-white/80" />

        <FadeIn direction="up" className="relative z-20 max-w-4xl mx-auto text-center">
          <h2 className="relative inline-block text-[#ED0106]/80 tracking-[0.2em] md:tracking-[0.4em] text-base md:text-3xl lg:text-5xl mb-6 font-normal">
            WHO WE ARE?
          </h2>
          <div className="flex justify-center mb-8 md:mb-10">
            <span className="text-black/80 text-xl md:text-2xl tracking-tight">❯❯</span>
          </div>
          <div className="space-y-5 md:space-y-6 text-black text-[15px] md:text-lg leading-relaxed text-left md:text-center">
            <p>
              Our church is a Christ-centered community devoted to loving God and
              loving people. We exist to be a place where individuals and families can
              encounter Jesus Christ and experience the transforming power of the Gospel.
              The Gospel remains the truth of life, and we desire to live in a way that
              honors God and reflects His grace in our daily lives.
            </p>
            <p>
              We believe the church is more than a building — it is a family of believers
              walking together in faith. Through worship, sound Biblical teaching, and prayer,
              we seek to create an atmosphere where spiritual growth is nurtured and faith is
              strengthened. Meaningful relationships and genuine fellowship are central to
              who we are as a church.
            </p>
            <p>
              No matter where you are in your spiritual journey, you are welcome here.
              Our heart is to provide a place where people can belong, be encouraged, and
              grow in their relationship with God, while finding opportunities to serve and
              follow Christ together.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── MISSION OF OUR FELLOWSHIP ── */}
      <section className="relative px-6 md:px-[8%] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/about us.jpg" alt="Mission Background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#12191B]/90 to-[#577881]/70" />
        </div>
        <div className="absolute right-[-100px] top-[20%] opacity-[0.08] pointer-events-none select-none">
          <Image src="/logo.png" alt="Background Logo" width={600} height={600} className="object-contain" />
        </div>

        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            {/* mb-14 from deployed, with mobile fallback */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[.15em] md:tracking-[.2em] uppercase mb-10 md:mb-14 text-center">
              MISSION OF OUR FELLOWSHIP
            </h2>
          </FadeIn>

          {/* space-y-7 from deployed */}
          <div className="space-y-5 md:space-y-7">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.label} direction="up" delay={index * 80}>
                <div className="flex flex-col sm:flex-row items-start gap-0">
                  <div className="bg-[#ED0106] px-4 py-3 flex items-center justify-between shrink-0 w-full sm:w-[160px]">
                    <span className="text-white font-bold tracking-[2px] text-[11px] uppercase">{pillar.label}</span>
                    <span className="text-white/80 text-base ml-2">❯</span>
                  </div>
                  <div className="w-full sm:w-[3px] h-[3px] sm:h-auto bg-[#ED0106]/30 shrink-0 sm:self-stretch" />
                  <p className="text-[14px] leading-[1.85] text-white/80 sm:pl-5 pt-3 sm:pt-2 pb-2">
                    {pillar.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEYWORDS MARQUEE BANNER ── */}
      <div className="bg-[#ED0106] py-5 overflow-hidden relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-20 bg-gradient-to-r from-[#ED0106] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-20 bg-gradient-to-l from-[#ED0106] to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-12 md:gap-16 px-8 md:px-10">
              {["EVANGELISM", "DISCIPLESHIP", "CHURCH PLANTING", "CITY-SUPPORTING"].map((item, i) => (
                <span key={i} className="flex items-center gap-5 md:gap-6">
                  <span className="text-white font-bold tracking-[3px] text-[11px] uppercase whitespace-nowrap">{item}</span>
                  <span className="text-white/50 text-xs">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── GO YE INTO ALL THE WORLD ── */}
      {/* px-[8%] and py-20 from deployed, with mobile fallback px-6 */}
      <section className="bg-white px-6 md:px-[8%] py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[.15em] md:tracking-[.2em] uppercase mb-8 md:mb-10 text-gray-900 text-center">
              GO YE INTO ALL THE WORLD
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={150}>
            <div className="space-y-5 text-[15px] leading-[1.9] text-gray-700">
              <p>
                We take seriously Christ&apos;s commission to &quot;go into all the world and preach
                the gospel to every creature.&quot; Our strategy is to fulfill this commission
                through Evangelism, Discipleship, and Church Planting — both domestically and
                internationally. Christ&apos;s command to &quot;make disciples of all nations&quot; is
                the passion and driving force of our church.
              </p>
              <p>
                With this focus, we continually seek to reach people with the gospel of Jesus
                Christ and share God&apos;s love and saving grace worldwide. Through various means —
                such as Christian music, films, dramas, door-to-door witnessing, and community
                outreach — our mission is to lead people into a personal and saving relationship
                with Jesus Christ.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
