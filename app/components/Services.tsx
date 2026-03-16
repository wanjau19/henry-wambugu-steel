"use client";
import { motion } from "framer-motion";

const services = [
  { icon: "📐", title: "Custom Design",        desc: "Tailor-made designs exactly as you envision them — no templates, all custom." },
  { icon: "🛡",  title: "Quality Guarantee",   desc: "Premium-grade steel with a 2-year workmanship warranty on all products." },
  { icon: "🚚", title: "Delivery & Install",   desc: "We deliver and professionally install at your site anywhere in Nairobi." },
  { icon: "🏷",  title: "Competitive Pricing", desc: "Best value for premium quality. No hidden charges, transparent quotes." },
  { icon: "🔧", title: "Repairs & Maintenance",desc: "Fast and affordable repairs to keep your metalwork in perfect condition." },
  { icon: "⏱",  title: "Fast Turnaround",     desc: "Most standard orders completed within 5–10 working days." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const card = { hidden: { opacity:0, y:40 }, show: { opacity:1, y:0, transition:{ duration:.7 } } };

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background:"var(--dark)" }}>
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:.8 }} className="mb-12">
          <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3">
            <span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />
            Why Choose Us
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] relative inline-block">
            Our Strengths
            <motion.span initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ delay:.4, duration:.8 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)" }} />
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-80px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(s => (
            <motion.div key={s.title} variants={card} whileHover={{ y:-5 }} className="p-8 relative overflow-hidden group"
              style={{ background:"var(--card-bg)", border:"1px solid rgba(255,255,255,.05)" }}>
              <motion.div initial={{ scaleX:0 }} whileHover={{ scaleX:1 }} className="absolute bottom-0 left-0 right-0 h-[3px] origin-left" style={{ background:"var(--orange)" }} />
              <div className="w-14 h-14 flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(232,86,10,.4)]"
                style={{ background:"rgba(232,86,10,.1)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>
                {s.icon}
              </div>
              <h3 className="font-condensed text-[1.1rem] font-bold tracking-[1px] uppercase text-[var(--white)] mb-2">{s.title}</h3>
              <p className="text-[var(--text)] text-[0.85rem] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
