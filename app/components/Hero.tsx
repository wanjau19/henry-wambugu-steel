"use client";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

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
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(232,86,10,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(232,86,10,0.06) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 70% 50%,black 20%,transparent 80%)",
        }} />
        <div className="absolute left-0 right-0 h-[2px] pointer-events-none z-10" style={{
          background: "linear-gradient(90deg,transparent,rgba(232,86,10,.55),transparent)",
          animation: "scanline 7s linear infinite",
        }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 font-condensed text-[0.7rem] font-bold tracking-[3px] uppercase mb-6 px-4 py-2"
              style={{ background:"rgba(232,86,10,.15)", border:"1px solid var(--border)", color:"var(--orange)" }}>
              <span className="w-[6px] h-[6px] rounded-full bg-[var(--orange)]" style={{ animation:"pulse-dot 1.5s infinite" }} />
              Open for Orders
            </span>
          </motion.div>

          <motion.h1 variants={item} className="font-display leading-none tracking-[2px] mb-6" style={{ fontSize:"clamp(3.5rem,7vw,5.5rem)" }}>
            <span className="text-[var(--white)]">Premium</span><br />
            <span className="neon-text" style={{ color:"var(--orange)", display:"block" }}>Steel & Metal</span>
            <span className="text-[var(--white)]">Works</span>
          </motion.h1>

          <motion.p variants={item} className="text-[var(--text)] text-base leading-relaxed mb-10 max-w-[420px] font-light">
            Custom-crafted gates, doors, furniture and welding solutions — built with precision and made to last a lifetime.
          </motion.p>

          <motion.div variants={item} className="flex gap-4 flex-wrap mb-10">
            <a href="#products" className="inline-flex items-center gap-2 font-condensed text-sm font-bold tracking-[2px] uppercase px-7 py-4 text-white transition-all duration-300 hover:-translate-y-1"
              style={{ background:"var(--orange)", clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)" }}>
              👁 View Products
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 font-condensed text-sm font-bold tracking-[2px] uppercase px-7 py-4 text-white transition-all duration-300 hover:-translate-y-1"
              style={{ border:"1px solid rgba(255,255,255,.2)" }}>
              📞 Order Now
            </a>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-3 gap-[1px]" style={{ background:"var(--border)" }}>
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity:0, y:20, scale:.85 }}
                animate={{ opacity:1, y:0, scale:1 }}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.6 }}
                className="text-center py-5 px-3" style={{ background:"var(--dark)" }}>
                <div className="font-display text-[2rem] neon-text" style={{ color:"var(--orange)", lineHeight:1 }}>{s.num}</div>
                <div className="font-condensed text-[0.6rem] tracking-[2px] uppercase mt-1" style={{ color:"var(--text)" }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity:0, scale:.7, rotate:-8 }}
          animate={{ opacity:1, scale:1, rotate:0 }}
          transition={{ duration:1.1, delay:.5 }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative w-[380px] h-[380px]">
            <div className="absolute inset-0 rounded-full" style={{ border:"1px solid rgba(232,86,10,.3)", animation:"spin-slow 20s linear infinite" }}>
              <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ background:"var(--orange)" }} />
            </div>
            <div className="absolute inset-[30px] rounded-full" style={{ border:"1px dashed rgba(240,165,0,.2)", animation:"spin-slow 14s linear infinite reverse" }} />
            <div className="absolute inset-[60px] rounded-full overflow-hidden" style={{ border:"3px solid rgba(232,86,10,.5)" }}>
              <img src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop" alt="Steel Gate" className="w-full h-full object-cover" style={{ filter:"saturate(.7) contrast(1.1)" }} />
              <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(232,86,10,.3) 0%,transparent 60%)" }} />
            </div>
            <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity }}
              className="absolute bottom-10 -left-5 p-3 text-xs" style={{ background:"rgba(26,26,46,.9)", border:"1px solid var(--border)", backdropFilter:"blur(10px)" }}>
              <div className="text-[var(--orange)] mb-1">★</div>
              <div className="font-display text-[1.4rem] text-[var(--white)]">4.9★</div>
              <div className="font-condensed text-[0.6rem] tracking-[1px] text-[var(--text)]">Client Rating</div>
            </motion.div>
            <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity, delay:1.5 }}
              className="absolute top-14 -right-5 p-3 text-xs" style={{ background:"rgba(26,26,46,.9)", border:"1px solid var(--border)", backdropFilter:"blur(10px)" }}>
              <div className="text-[var(--orange)] mb-1">🛡</div>
              <div className="font-display text-[1.4rem] text-[var(--white)]">2yr</div>
              <div className="font-condensed text-[0.6rem] tracking-[1px] text-[var(--text)]">Warranty</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
