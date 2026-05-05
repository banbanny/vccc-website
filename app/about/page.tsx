import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  const pillars = [
    {
      label: "WORSHIP",
      text: 'Man chief end is to glorify God and to enjoy Him forever. Psalm 29:2 says, “Give unto the Lord the glory due unto His name; worship the Lord in the beauty of holiness.” Central to the life of the congregation is the vibrant, heartfelt, and exuberant worship of Jesus Christ as Lord.',
    },
      {
      label: "EVANGELISM",
      text: 'Mark 16:15 says, “And He said to them, ‘Go into all the world and preach the gospel to every creature…’” The great commission has never been rescinded. Keeping the Gospel “outside the four walls” is one of the defining ethics and emphasis of our ministry.',
    },
    {
      label: "DEVOTION",
      text: "Devotion refers to our commitment to God's call, God's heart, and God's Word. We believe in a serious commitment to communing with God. Finding the balance between legalism and license is the fruit of an intimate relationship with God.",
    },
    {
      label: "FELLOWSHIP",
      text: 'Acts 2:42 says, "They devoted themselves to the apostles\' teaching and to the fellowship." The life of the early church centered around the faithful ministry of teaching and preaching God\'s Word and the bond of committed relationships. Galatians 6:10 reminds us, "as we have opportunity, let us do good to all, especially to those who are of the household of faith." The church must be a fellowship of believers.',
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
      <section className="relative w-full h-[650px] flex items-center overflow-hidden">
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
        <div className="relative z-10 pb-14 pl-[8%]">
          <p className="text-xs tracking-[6px] uppercase text-white/60 mb-3 mt-50">
            ONE MISSION ● ONE VISION ● ONE GOAL
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-[.3em] uppercase leading-none">
            ABOUT US
          </h1>
          <div className="w-24 h-[3px] bg-[#ED0106] mt-5" />
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="relative w-full min-h-[700px] flex items-center justify-center px-[8%] py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/bglow.png" alt="Who We Are Background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-10 bg-white/80" />

        <FadeIn direction="up" className="relative z-20 max-w-4xl mx-auto text-center">
          <h2 className="relative inline-block text-[#ED0106]/80 tracking-[0.4em] text-base md:text-5xl mb-6 font-normal">
            WHO WE ARE?
          </h2>
          <div className="flex justify-center mb-10">
            <span className="text-black/80 text-2xl tracking-tight">❯❯</span>
          </div>
          <div className="space-y-6 text-black text-[16px] md:text-lg leading-relaxed">
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
      <section className="relative px-[8%] py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/about us.jpg" alt="Mission Background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#12191B]/90 to-[#577881]/70" />
        </div>
        <div className="absolute right-[-100px] top-[20%] opacity-[0.08] pointer-events-none select-none">
          <Image src="/logo.png" alt="Background Logo" width={600} height={600} className="object-contain" />
        </div>

        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[.2em] uppercase mb-14 text-center">
              MISSION OF OUR FELLOWSHIP
            </h2>
          </FadeIn>

          <div className="space-y-7">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.label} direction="up" delay={index * 80}>
                <div className="flex items-start gap-0">
                  <div className="bg-[#ED0106] px-4 py-3 flex items-center justify-between shrink-0 w-[160px]">
                    <span className="text-white font-bold tracking-[2px] text-[11px] uppercase">
                      {pillar.label}
                    </span>
                    <span className="text-white/80 text-base ml-2">❯</span>
                  </div>
                  <div className="w-[3px] bg-[#ED0106]/30 self-stretch shrink-0" />
                  <p className="text-[14px] leading-[1.85] text-white/80 pl-5 pt-2">
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
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#ED0106] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#ED0106] to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-16 px-10">
              {["EVANGELISM", "DISCIPLESHIP", "CHURCH PLANTING", "CITY-SUPPORTING"].map((item, i) => (
                <span key={i} className="flex items-center gap-6">
                  <span className="text-white font-bold tracking-[3px] text-[11px] uppercase">{item}</span>
                  <span className="text-white/50 text-xs">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── GO YE INTO ALL THE WORLD ── */}
      <section className="bg-white px-[8%] py-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[.2em] uppercase mb-10 text-gray-900 text-center">
              GO YE INTO ALL THE WORLD
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={150}>
            <div className="space-y-5 text-[15px] leading-[1.9] text-gray-700">
              <p>
                We take seriously Christ's commission to "go into all the world and preach
                the gospel to every creature." Our strategy is to fulfill this commission
                through Evangelism, Discipleship, and Church Planting — both domestically
                and internationally. Christ's command to "make disciples of all nations" is
                the passion and driving force of our church.
              </p>
              <p>
                With this focus, we continually seek to reach people with the gospel of Jesus
                Christ and share God's love and saving grace worldwide. Through various means —
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
