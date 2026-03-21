"use client";
import { useEffect, useRef } from "react";

const services = [
  { icon:"📐", title:"Custom Design",        desc:"Tailor-made designs exactly as you envision them — no templates, all custom." },
  { icon:"🛡",  title:"Quality Guarantee",   desc:"Premium-grade steel with a 2-year workmanship warranty on all products." },
  { icon:"🚚", title:"Delivery & Install",   desc:"We deliver and professionally install at your site anywhere in Nairobi." },
  { icon:"🏷",  title:"Competitive Pricing", desc:"Best value for premium quality. No hidden charges, transparent quotes." },
  { icon:"🔧", title:"Repairs & Maintenance",desc:"Fast and affordable repairs to keep your metalwork in perfect condition." },
  { icon:"⏱",  title:"Fast Turnaround",     desc:"Most standard orders completed within 5–10 working days." },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal,.reveal-scale");
    if (!els) return;
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="py-24" style={{ background:"var(--dark)" }} ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-12">
          <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3"><span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />Why Choose Us</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] relative inline-block">Our Strengths<span className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)", animation:"lineGrow 0.8s ease 0.4s both" }} /></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className={`reveal-scale delay-${i+1} p-8 relative overflow-hidden group cursor-default`}
              style={{ background:"var(--card-bg)", border:"1px solid rgba(255,255,255,.05)", transition:"transform 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform="translateY(-5px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform="translateY(0)"; }}>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ background:"var(--orange)" }} />
              <div className="w-14 h-14 flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(232,86,10,.4)]" style={{ background:"rgba(232,86,10,.1)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>{s.icon}</div>
              <h3 className="font-condensed text-[1.1rem] font-bold tracking-[1px] uppercase text-[var(--white)] mb-2">{s.title}</h3>
              <p className="text-[var(--text)] text-[0.85rem] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
