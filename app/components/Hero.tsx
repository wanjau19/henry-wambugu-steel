"use client";
import Image from "next/image";

const stats = [
  { num: "500+", label: "Projects Done" },
  { num: "10+",  label: "Years Experience" },
  { num: "100%", label: "Custom Made" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-[70px]" style={{ background: "var(--dark)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 70% 50%, rgba(232,86,10,0.13) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(232,86,10,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(232,86,10,0.06) 1px,transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 70% 70% at 70% 50%,black 20%,transparent 80%)" }} />
        <div className="absolute left-0 right-0 h-[2px] pointer-events-none z-10" style={{ background: "linear-gradient(90deg,transparent,rgba(232,86,10,.55),transparent)", animation: "scanline 7s linear infinite" }} />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        <div>
          <div style={{ animation: "fadeUp 0.7s ease 0.1s both" }}>
            <span className="inline-flex items-center gap-2 font-condensed text-[0.7rem] font-bold tracking-[3px] uppercase mb-6 px-4 py-2" style={{ background:"rgba(232,86,10,.15)", border:"1px solid var(--border)", color:"var(--orange)" }}>
              <span className="w-[6px] h-[6px] rounded-full bg-[var(--orange)]" style={{ animation:"pulse-dot 1.5s infinite" }} />
              Open for Orders
            </span>
          </div>
          <h1 className="font-display leading-none tracking-[2px] mb-6" style={{ fontSize:"clamp(3.5rem,7vw,5.5rem)", animation: "fadeUp 0.7s ease 0.2s both" }}>
            <span className="text-[var(--white)]">Premium</span><br />
            <span className="neon-text" style={{ color:"var(--orange)", display:"block" }}>Steel & Metal</span>
            <span className="text-[var(--white)]">Works</span>
          </h1>
          <p className="text-[var(--text)] text-base leading-relaxed mb-10 max-w-[420px] font-light" style={{ animation: "fadeUp 0.7s ease 0.35s both" }}>
            Custom-crafted gates, doors, furniture and welding solutions — built with precision and made to last a lifetime.
          </p>
          <div className="flex gap-4 flex-wrap mb-10" style={{ animation: "fadeUp 0.7s ease 0.45s both" }}>
            <a href="#products" className="inline-flex items-center gap-2 font-condensed text-sm font-bold tracking-[2px] uppercase px-7 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110" style={{ background:"var(--orange)", clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)" }}>👁 View Products</a>
            <a href="#contact" className="inline-flex items-center gap-2 font-condensed text-sm font-bold tracking-[2px] uppercase px-7 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10" style={{ border:"1px solid rgba(255,255,255,.2)" }}>📞 Order Now</a>
          </div>
          <div className="grid grid-cols-3 gap-[1px]" style={{ background:"var(--border)", animation: "fadeUp 0.7s ease 0.55s both" }}>
            {stats.map((s, i) => (
              <div key={s.label} className="text-center py-5 px-3" style={{ background:"var(--dark)", animation: `statPop 0.6s ease ${1.4 + i * 0.15}s both` }}>
                <div className="font-display text-[2rem] neon-text" style={{ color:"var(--orange)", lineHeight:1 }}>{s.num}</div>
                <div className="font-condensed text-[0.6rem] tracking-[2px] uppercase mt-1" style={{ color:"var(--text)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center" style={{ animation: "scaleIn 1.1s ease 0.5s both" }}>
          <div className="relative w-[380px] h-[380px]">
            <div className="absolute inset-0 rounded-full" style={{ border:"1px solid rgba(232,86,10,.3)", animation:"spin-slow 20s linear infinite" }}>
              <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ background:"var(--orange)" }} />
            </div>
            <div className="absolute inset-[30px] rounded-full" style={{ border:"1px dashed rgba(240,165,0,.2)", animation:"spin-slow 14s linear infinite reverse" }} />
            <div className="absolute inset-[60px] rounded-full overflow-hidden" style={{ border:"3px solid rgba(232,86,10,.5)" }}>
              <Image src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop" alt="Steel Gate" fill sizes="260px" className="object-cover" style={{ filter:"saturate(.7) contrast(1.1)" }} priority />
              <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(232,86,10,.3) 0%,transparent 60%)" }} />
            </div>
            <div className="float-card absolute bottom-10 -left-5 p-3 text-xs" style={{ background:"rgba(26,26,46,.9)", border:"1px solid var(--border)", backdropFilter:"blur(10px)" }}>
              <div className="text-[var(--orange)] mb-1">★</div>
              <div className="font-display text-[1.4rem] text-[var(--white)]">4.9★</div>
              <div className="font-condensed text-[0.6rem] tracking-[1px] text-[var(--text)]">Client Rating</div>
            </div>
            <div className="float-card-2 absolute top-14 -right-5 p-3 text-xs" style={{ background:"rgba(26,26,46,.9)", border:"1px solid var(--border)", backdropFilter:"blur(10px)" }}>
              <div className="text-[var(--orange)] mb-1">🛡</div>
              <div className="font-display text-[1.4rem] text-[var(--white)]">2yr</div>
              <div className="font-condensed text-[0.6rem] tracking-[1px] text-[var(--text)]">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
