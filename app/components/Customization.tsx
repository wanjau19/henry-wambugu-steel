"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num:"01", title:"Consultation",       desc:"Describe your needs — we listen, take measurements, and understand your vision." },
  { num:"02", title:"Design & Quote",     desc:"We produce a detailed design sketch and transparent pricing with no surprises." },
  { num:"03", title:"Fabrication",        desc:"Skilled craftsmen build your piece using premium steel and precision welding." },
  { num:"04", title:"Delivery & Install", desc:"We deliver, install, and ensure you're 100% happy before we leave." },
];

export default function Customization() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="customization" className="py-24 relative" style={{ background:"var(--steel)" }} ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.9 }}>
            <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />
              The Process
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] mb-3 relative inline-block">
              How We Build Your Vision
              <motion.span initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ delay:.4, duration:.8 }}
                className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)" }} />
            </h2>
            <p className="text-[var(--text)] font-light text-base leading-relaxed max-w-[480px] mt-5 mb-10">
              From idea to installation, we handle every step with care and precision.
            </p>
            <div className="flex flex-col gap-6">
              {steps.map((s, i) => (
                <motion.div key={s.num}
                  initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                  transition={{ delay: i*0.12, duration:0.7 }}
                  whileHover={{ x:8 }} className="flex gap-5 items-start group cursor-default">
                  <span className="font-display text-[3rem] leading-none flex-shrink-0 w-[52px] transition-all duration-300 group-hover:text-[var(--orange)] group-hover:[text-shadow:0_0_20px_rgba(232,86,10,.6)]"
                    style={{ color:"rgba(232,86,10,.2)" }}>
                    {s.num}
                  </span>
                  <div>
                    <h4 className="font-condensed text-[1rem] font-bold tracking-[1px] uppercase text-[var(--white)] mb-1">{s.title}</h4>
                    <p className="text-[var(--text)] text-[0.85rem] leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:0.9 }}
            className="relative hidden lg:block">
            <div className="relative overflow-hidden" style={{ height:"420px" }}>
              <motion.div style={{ y: imgY, position:"absolute", top:"-10%", bottom:"-10%", left:0, right:0 }}>
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&h=600&fit=crop"
                  alt="Welding craftsman"
                  fill
                  sizes="50vw"
                  className="object-cover"
                  style={{ filter:"saturate(.7) contrast(1.1)" }}
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(232,86,10,.2) 0%,transparent 60%)" }} />
              </motion.div>
              <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity }}
                className="absolute -bottom-5 -left-5 p-4 z-10" style={{ background:"var(--dark)", border:"1px solid var(--border)" }}>
                <div className="font-display text-[2rem] neon-text leading-none" style={{ color:"var(--orange)" }}>500+</div>
                <div className="font-condensed text-[0.65rem] tracking-[2px] uppercase mt-1" style={{ color:"var(--text)" }}>Happy Clients</div>
              </motion.div>
              <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity, delay:1.5 }}
                className="absolute -top-5 -right-5 p-4 z-10" style={{ background:"var(--dark)", border:"1px solid var(--border)" }}>
                <div className="font-display text-[2rem] neon-text leading-none" style={{ color:"var(--orange)" }}>10yr</div>
                <div className="font-condensed text-[0.65rem] tracking-[2px] uppercase mt-1" style={{ color:"var(--text)" }}>Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
