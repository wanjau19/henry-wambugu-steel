"use client";
import { useEffect, useRef } from "react";

const stages = [
  {
    num: "01",
    label: "Raw Steel",
    sub: "Premium grade steel sourced and cut to specification",
    icon: "⬛",
    color: "rgba(192,200,216,0.15)",
  },
  {
    num: "02",
    label: "Precision Welding",
    sub: "Skilled craftsmen apply precision arc welding techniques",
    icon: "🔥",
    color: "rgba(232,86,10,0.2)",
  },
  {
    num: "03",
    label: "Shaping & Forming",
    sub: "Each component shaped under controlled heat and pressure",
    icon: "⚙️",
    color: "rgba(232,86,10,0.12)",
  },
  {
    num: "04",
    label: "Finished Product",
    sub: "Polished, coated and ready for installation",
    icon: "✅",
    color: "rgba(34,197,94,0.15)",
  },
];

export default function CanvasSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-scale, .reveal-left");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="sequence"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--dark)" }}
      ref={sectionRef}
    >
      {/* background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,86,10,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(232,86,10,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        {/* heading */}
        <div className="reveal mb-16 text-center">
          <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-[2px]" style={{ background: "var(--orange)" }} />
            The Craft
            <span className="inline-block w-8 h-[2px]" style={{ background: "var(--orange)" }} />
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] relative inline-block">
            How Steel Becomes Art
            <span
              className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left"
              style={{
                background: "linear-gradient(90deg,transparent,var(--orange),transparent)",
                animation: "lineGrow 0.8s ease 0.4s both",
              }}
            />
          </h2>
        </div>

        {/* stages — horizontal timeline on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
          {/* connector line — desktop only */}
          <div
            className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg,transparent,var(--orange),var(--orange),var(--orange),transparent)",
              opacity: 0.3,
            }}
          />

          {stages.map((s, i) => (
            <div
              key={s.num}
              className={`reveal delay-${i + 1} flex flex-col items-center text-center relative`}
            >
              {/* circle icon */}
              <div
                className="relative w-[104px] h-[104px] flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-105"
                style={{
                  background: s.color,
                  border: "1px solid var(--border)",
                  clipPath:
                    "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
                }}
              >
                <span className="font-display text-[2.2rem] leading-none neon-text" style={{ color: "var(--orange)" }}>
                  {s.num}
                </span>
                {/* pulse ring */}
                <span
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
                    border: "2px solid rgba(232,86,10,0.4)",
                    animation: `pulse-dot ${2 + i * 0.4}s ease-in-out infinite`,
                  }}
                />
              </div>

              <h3 className="font-condensed text-[1.05rem] font-bold tracking-[2px] uppercase text-[var(--white)] mb-2">
                {s.label}
              </h3>
              <p
                className="font-condensed text-[0.78rem] tracking-[1px] leading-relaxed max-w-[180px]"
                style={{ color: "var(--text)" }}
              >
                {s.sub}
              </p>

              {/* mobile arrow */}
              {i < stages.length - 1 && (
                <div
                  className="md:hidden mt-6 font-display text-[1.5rem]"
                  style={{ color: "rgba(232,86,10,0.4)" }}
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* bottom CTA bar */}
        <div
          className="reveal mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6"
          style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}
        >
          <div>
            <p
              className="font-condensed text-[0.7rem] tracking-[3px] uppercase mb-1"
              style={{ color: "var(--orange)" }}
            >
              Ready to start?
            </p>
            <p className="font-display text-[1.6rem] tracking-[2px] text-[var(--white)]">
              Your Project Begins Here
            </p>
          </div>
          <a
            href="#contact"
            className="font-condensed text-sm font-bold tracking-[2px] uppercase px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110 whitespace-nowrap"
            style={{
              background: "var(--orange)",
              clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            }}
          >
            Get a Free Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
