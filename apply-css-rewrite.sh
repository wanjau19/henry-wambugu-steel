#!/bin/bash
cd ~/henry-steel

# ── Navbar.tsx ──────────────────────────────────────────────
cat > app/components/Navbar.tsx << 'EOF'
"use client";
import { useEffect, useState } from "react";

const links = ["home","products","services","customization","gallery","contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const pos = window.scrollY + 100;
      links.forEach(id => {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] h-[70px] flex items-center px-8"
        style={{ background: scrolled ? "rgba(13,13,26,0.98)" : "rgba(13,13,26,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)", animation: "navDrop 0.7s ease forwards" }}>
        <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 flex items-center justify-center bg-[#e8560a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,86,10,.7)]" style={{ clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>
              <span className="text-white text-sm">⚒</span>
            </div>
            <div>
              <div className="font-display text-lg tracking-widest text-white">Henry Wambugu</div>
              <div className="font-condensed text-[0.6rem] tracking-[4px] uppercase text-[#e8560a]">Steel and Metal Works</div>
            </div>
          </a>
          <ul className="hidden md:flex gap-8 list-none">
            {links.map(id => (
              <li key={id} className="relative">
                <a href={"#"+id} className={"font-condensed text-xs font-bold tracking-widest uppercase no-underline transition-colors duration-200 "+(active===id?"text-[#e8560a]":"text-[#c0c8d8] hover:text-white")}>{id}</a>
                {active===id && <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#e8560a] origin-left" style={{ animation: "lineGrow 0.3s ease forwards" }} />}
              </li>
            ))}
          </ul>
          <a href="tel:0722909059" className="hidden md:flex items-center gap-2 font-condensed text-xs font-bold tracking-widest uppercase text-white px-5 py-2 bg-[#e8560a] transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5">Call Now</a>
          <button className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer" onClick={() => setOpen(o => !o)}>
            <span className="block w-6 h-[2px] bg-white transition-all duration-300" style={{ transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span className="block w-6 h-[2px] bg-white transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-6 h-[2px] bg-white transition-all duration-300" style={{ transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </nav>
      <div className="fixed top-[70px] left-0 right-0 z-[999] flex flex-col gap-4 p-6"
        style={{ background: "rgba(13,13,26,0.98)", backdropFilter: "blur(16px)", opacity: open ? 1 : 0, pointerEvents: open ? "all" : "none", transform: open ? "translateY(0)" : "translateY(-10px)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
        {links.map(id => (
          <a key={id} href={"#"+id} onClick={() => setOpen(false)} className="font-condensed text-base font-bold tracking-widest uppercase no-underline text-[#c0c8d8] pb-3 border-b border-white/5 hover:text-white transition-colors duration-200">{id}</a>
        ))}
      </div>
    </>
  );
}
EOF
echo "✅ Navbar.tsx"

# ── Hero.tsx ─────────────────────────────────────────────────
cat > app/components/Hero.tsx << 'EOF'
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
EOF
echo "✅ Hero.tsx"

# ── ProjectGrid.tsx ──────────────────────────────────────────
cat > app/components/ProjectGrid.tsx << 'EOF'
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  { id:1, title:"Premium Steel Gates",      category:"Security",   badge:"Popular",  price:"From KES 15,000", img:"https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop", span:"col-span-2 row-span-2", textSize:"text-3xl" },
  { id:2, title:"Metallic Doors",           category:"Residential",badge:"Trending", price:"From KES 12,000", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", span:"", textSize:"text-xl" },
  { id:3, title:"Steel Furniture",          category:"Interior",   badge:"New",      price:"From KES 8,000",  img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop", span:"", textSize:"text-xl" },
  { id:4, title:"Window Grills & Railings", category:"Safety",     badge:"Custom",   price:"From KES 5,000",  img:"https://images.unsplash.com/photo-1565636192335-14c06c2fe626?w=600&h=400&fit=crop", span:"", textSize:"text-xl" },
  { id:5, title:"Steel Tool Stands",        category:"Industrial", badge:"Durable",  price:"From KES 3,500",  img:"https://images.unsplash.com/photo-1578926314433-8fe10c4c9c0a?w=600&h=400&fit=crop", span:"", textSize:"text-xl" },
];

export default function ProjectGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal,.reveal-scale");
    if (!els) return;
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="products" className="py-24 relative" style={{ background:"var(--steel)" }} ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(90deg,transparent,var(--orange),transparent)" }} />
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-12">
          <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3"><span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />Our Collection</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] mb-3 relative inline-block">Featured Projects<span className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)", animation:"lineGrow 0.8s ease 0.4s both" }} /></h2>
          <p className="text-[var(--text)] font-light max-w-lg mt-4">Premium quality metalwork crafted to your exact specifications.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-4">
          {projects.map((p, i) => (
            <div key={p.id} className={`reveal-scale delay-${i+1} relative overflow-hidden group cursor-pointer ${p.span}`}
              style={{ border:"1px solid rgba(255,255,255,.06)", transition:"transform 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform="translateY(-6px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform="translateY(0)"; }}>
              <Image src={p.img} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-all duration-700 group-hover:scale-110" style={{ filter:"saturate(.7)" }} loading={i===0?"eager":"lazy"} />
              <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(13,13,26,.95) 0%,rgba(13,13,26,.3) 50%,transparent 100%)" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow:"inset 0 0 0 1px var(--orange), inset 0 0 30px rgba(232,86,10,.1)" }} />
              <div className="absolute top-4 right-4 font-condensed text-[0.6rem] font-bold tracking-[2px] uppercase text-white z-10 px-2 py-1" style={{ background:"var(--orange)", clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>{p.badge}</div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <p className="font-condensed text-[0.65rem] tracking-[3px] uppercase mb-1" style={{ color:"var(--orange)" }}>{p.category}</p>
                <h3 className={`font-condensed ${p.textSize} font-bold tracking-[1px] uppercase text-[var(--white)] mb-2 leading-tight`}>{p.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-display text-[1.4rem] neon-text" style={{ color:"var(--orange)" }}>{p.price}</span>
                  <button className="font-condensed text-[0.7rem] font-bold tracking-[2px] uppercase px-3 py-2 transition-all duration-300 hover:bg-[var(--orange)] hover:text-white" style={{ background:"transparent", border:"1px solid rgba(232,86,10,.4)", color:"var(--orange)", cursor:"pointer" }}>Enquire →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF
echo "✅ ProjectGrid.tsx"

# ── Services.tsx ─────────────────────────────────────────────
cat > app/components/Services.tsx << 'EOF'
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
EOF
echo "✅ Services.tsx"

# ── Customization.tsx ────────────────────────────────────────
cat > app/components/Customization.tsx << 'EOF'
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const steps = [
  { num:"01", title:"Consultation",       desc:"Describe your needs — we listen, take measurements, and understand your vision." },
  { num:"02", title:"Design & Quote",     desc:"We produce a detailed design sketch and transparent pricing with no surprises." },
  { num:"03", title:"Fabrication",        desc:"Skilled craftsmen build your piece using premium steel and precision welding." },
  { num:"04", title:"Delivery & Install", desc:"We deliver, install, and ensure you are 100% happy before we leave." },
];

export default function Customization() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal,.reveal-left,.reveal-right");
    if (!els) return;
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="customization" className="py-24 relative" style={{ background:"var(--steel)" }} ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-left">
            <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3"><span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />The Process</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] mb-3 relative inline-block">How We Build Your Vision<span className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)", animation:"lineGrow 0.8s ease 0.4s both" }} /></h2>
            <p className="text-[var(--text)] font-light text-base leading-relaxed max-w-[480px] mt-5 mb-10">From idea to installation, we handle every step with care and precision.</p>
            <div className="flex flex-col gap-6">
              {steps.map((s, i) => (
                <div key={s.num} className={`reveal delay-${i+1} flex gap-5 items-start group cursor-default transition-transform duration-300 hover:translate-x-2`}>
                  <span className="font-display text-[3rem] leading-none flex-shrink-0 w-[52px] transition-all duration-300 group-hover:text-[var(--orange)] group-hover:[text-shadow:0_0_20px_rgba(232,86,10,.6)]" style={{ color:"rgba(232,86,10,.2)" }}>{s.num}</span>
                  <div>
                    <h4 className="font-condensed text-[1rem] font-bold tracking-[1px] uppercase text-[var(--white)] mb-1">{s.title}</h4>
                    <p className="text-[var(--text)] text-[0.85rem] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right relative hidden lg:block">
            <div className="relative overflow-hidden" style={{ height:"420px" }}>
              <Image src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&h=600&fit=crop" alt="Welding craftsman" fill sizes="50vw" className="object-cover" style={{ filter:"saturate(.7) contrast(1.1)" }} loading="lazy" />
              <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,rgba(232,86,10,.2) 0%,transparent 60%)" }} />
              <div className="float-card absolute -bottom-5 -left-5 p-4 z-10" style={{ background:"var(--dark)", border:"1px solid var(--border)" }}>
                <div className="font-display text-[2rem] neon-text leading-none" style={{ color:"var(--orange)" }}>500+</div>
                <div className="font-condensed text-[0.65rem] tracking-[2px] uppercase mt-1" style={{ color:"var(--text)" }}>Happy Clients</div>
              </div>
              <div className="float-card-2 absolute -top-5 -right-5 p-4 z-10" style={{ background:"var(--dark)", border:"1px solid var(--border)" }}>
                <div className="font-display text-[2rem] neon-text leading-none" style={{ color:"var(--orange)" }}>10yr</div>
                <div className="font-condensed text-[0.65rem] tracking-[2px] uppercase mt-1" style={{ color:"var(--text)" }}>Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF
echo "✅ Customization.tsx"

# ── Gallery.tsx ──────────────────────────────────────────────
cat > app/components/Gallery.tsx << 'EOF'
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const items = [
  { img:"https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=500&fit=crop", title:"Security Gates",      sub:"Modern Design",    span:"col-span-2 row-span-2" },
  { img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",   title:"Entrance Doors",     sub:"Custom Design",    span:"" },
  { img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",   title:"Steel Furniture",    sub:"Elegant Pieces",   span:"" },
  { img:"https://images.unsplash.com/photo-1565636192335-14c06c2fe626?w=400&h=300&fit=crop",title:"Decorative Railings", sub:"Safety & Style",   span:"" },
  { img:"https://images.unsplash.com/photo-1578926314433-8fe10c4c9c0a?w=400&h=300&fit=crop",title:"Tool Storage",        sub:"Industrial Grade", span:"" },
  { img:"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",title:"Custom Projects",     sub:"Your Vision",      span:"" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal,.reveal-scale");
    if (!els) return;
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24" style={{ background:"var(--dark)" }} ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-12">
          <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3"><span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />Portfolio</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] relative inline-block">Our Work<span className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)", animation:"lineGrow 0.8s ease 0.4s both" }} /></h2>
        </div>
        <div className="reveal-scale grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-3">
          {items.map((item, i) => (
            <div key={i} className={`relative overflow-hidden cursor-pointer group ${item.span}`}
              style={{ transition:"transform 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform="scale(1.02)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform="scale(1)"; }}>
              <Image src={item.img} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-all duration-700 group-hover:scale-[1.08] group-hover:saturate-100" style={{ filter:"saturate(.6)" }} loading="lazy" />
              <div className="absolute inset-0" style={{ background:"linear-gradient(transparent 40%,rgba(13,13,26,.88) 100%)" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow:"inset 0 0 0 2px var(--orange), inset 0 0 30px rgba(232,86,10,.12)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-condensed text-[1rem] font-bold tracking-[1px] uppercase text-[var(--white)]">{item.title}</h3>
                <p className="font-condensed text-[0.7rem] tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1" style={{ color:"var(--orange)" }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF
echo "✅ Gallery.tsx"

# ── Contact.tsx ──────────────────────────────────────────────
cat > app/components/Contact.tsx << 'EOF'
"use client";
import { useEffect, useRef, useState } from "react";

const cards = [
  { icon:"📞", title:"Phone",    value:"0722 909 059",         note:"Call anytime for quick consultations" },
  { icon:"📍", title:"Location", value:"Nairobi, Kenya",       note:"Available for home & on-site installations" },
  { icon:"🕐", title:"Hours",    value:"Mon - Sat: 8am - 6pm", note:"Sunday: By appointment only" },
  { icon:"💬", title:"WhatsApp", value:"0722 909 059",         note:"Chat us for fast responses" },
];

function Field({ label, type, placeholder }: { label:string; type:string; placeholder:string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-condensed text-[0.7rem] font-bold tracking-[2px] uppercase" style={{ color:"var(--text)" }}>{label}</label>
      <input type={type} placeholder={placeholder} required className="px-4 py-3 text-sm outline-none transition-all duration-300"
        style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)", color:"var(--white)", fontFamily:"inherit" }}
        onFocus={e => { e.currentTarget.style.borderColor="var(--orange)"; e.currentTarget.style.boxShadow="0 0 0 2px rgba(232,86,10,.15)"; }}
        onBlur={e => { e.currentTarget.style.borderColor="rgba(255,255,255,.1)"; e.currentTarget.style.boxShadow="none"; }} />
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal,.reveal-left,.reveal-right");
    if (!els) return;
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const honeypot = form.querySelector('input[name="website"]') as HTMLInputElement;
    if (honeypot && honeypot.value) return;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="py-24 relative" style={{ background:"var(--steel)" }} ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="reveal mb-12">
          <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3"><span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />Get In Touch</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] relative inline-block">Start Your Project<span className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)", animation:"lineGrow 0.8s ease 0.4s both" }} /></h2>
          <p className="text-[var(--text)] font-light mt-4 max-w-lg">Ready to transform your vision into reality? Reach out today.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          <div className="reveal-left flex flex-col gap-3">
            {cards.map((c, i) => (
              <div key={c.title} className={`delay-${i+1} flex gap-4 items-start p-5 transition-all duration-300 hover:translate-x-1`} style={{ background:"var(--card-bg)", border:"1px solid rgba(255,255,255,.05)" }}>
                <div className="w-11 h-11 flex items-center justify-center text-xl flex-shrink-0" style={{ background:"rgba(232,86,10,.1)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>{c.icon}</div>
                <div>
                  <h4 className="font-condensed text-[0.75rem] font-bold tracking-[2px] uppercase mb-1" style={{ color:"var(--text)" }}>{c.title}</h4>
                  <div className="text-[var(--white)] font-semibold text-[0.95rem]">{c.value}</div>
                  <p className="text-[0.75rem] mt-1" style={{ color:"var(--text)" }}>{c.note}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="reveal-right flex flex-col gap-4" onSubmit={handleSubmit}>
            <div style={{ display:"none" }}><input type="text" name="website" tabIndex={-1} autoComplete="off" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Your Name" type="text" placeholder="e.g. John Kamau" />
              <Field label="Phone Number" type="tel" placeholder="e.g. 0722 000 000" />
            </div>
            <Field label="Email Address" type="email" placeholder="your@email.com" />
            <div className="flex flex-col gap-2">
              <label className="font-condensed text-[0.7rem] font-bold tracking-[2px] uppercase" style={{ color:"var(--text)" }}>Product Interested In</label>
              <select className="px-4 py-3 text-sm outline-none transition-all duration-300" style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)", color:"var(--white)", fontFamily:"inherit" }} onFocus={e => { e.currentTarget.style.borderColor="var(--orange)"; }} onBlur={e => { e.currentTarget.style.borderColor="rgba(255,255,255,.1)"; }}>
                <option value="">Select a product</option>
                {["Steel Gates","Metallic Doors","Steel Furniture","Window Grills & Railings","Tool Stands","Custom / Other"].map(o => (<option key={o} style={{ background:"var(--steel)" }}>{o}</option>))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-condensed text-[0.7rem] font-bold tracking-[2px] uppercase" style={{ color:"var(--text)" }}>Project Details</label>
              <textarea rows={5} required placeholder="Tell us about your project, size, style preferences, timeline" className="px-4 py-3 text-sm outline-none resize-y transition-all duration-300"
                style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)", color:"var(--white)", fontFamily:"inherit" }}
                onFocus={e => { e.currentTarget.style.borderColor="var(--orange)"; e.currentTarget.style.boxShadow="0 0 0 2px rgba(232,86,10,.15)"; }}
                onBlur={e => { e.currentTarget.style.borderColor="rgba(255,255,255,.1)"; e.currentTarget.style.boxShadow="none"; }} />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-3 font-condensed text-[0.9rem] font-bold tracking-[2px] uppercase py-5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
              style={{ background: sent ? "#22c55e" : "var(--orange)", clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)", cursor:"pointer", border:"none" }}>
              {sent ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
EOF
echo "✅ Contact.tsx"

# ── Footer.tsx ───────────────────────────────────────────────
cat > app/components/Footer.tsx << 'EOF'
"use client";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8" style={{ background:"var(--dark)", borderTop:"1px solid rgba(232,86,10,.2)" }}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <a href="#home" className="flex items-center gap-3 no-underline mb-4 group">
              <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(232,86,10,.7)]" style={{ background:"var(--orange)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}><span className="text-white text-sm">⚒</span></div>
              <div>
                <div className="font-display text-[1.1rem] tracking-[2px] text-[var(--white)]">Henry Wambugu</div>
                <div className="font-condensed text-[0.55rem] tracking-[4px] uppercase text-[var(--orange)]">Steel & Metal Works</div>
              </div>
            </a>
            <p className="text-[var(--text)] text-[0.85rem] leading-relaxed mb-5">Premium welding and metalwork solutions for homes and businesses across Nairobi. Crafted with precision, built to last.</p>
            <div className="flex gap-3">
              {["f","W","ig","☎"].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 flex items-center justify-center text-[0.8rem] no-underline transition-all duration-300 hover:bg-[var(--orange)] hover:border-[var(--orange)] hover:text-white hover:-translate-y-0.5" style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", color:"var(--text)" }}>{icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-condensed text-[0.8rem] font-bold tracking-[3px] uppercase mb-4" style={{ color:"var(--orange)" }}>Quick Links</h4>
            <ul className="list-none flex flex-col gap-2">
              {["#products","#services","#customization","#gallery","#contact"].map(href => (
                <li key={href}><a href={href} className="text-[var(--text)] text-[0.85rem] no-underline hover:text-white hover:pl-2 transition-all duration-200" style={{ display:"inline-block" }}>{href.replace("#","").charAt(0).toUpperCase()+href.replace("#","").slice(1)}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-condensed text-[0.8rem] font-bold tracking-[3px] uppercase mb-4" style={{ color:"var(--orange)" }}>Services</h4>
            <ul className="list-none flex flex-col gap-2">
              {["Custom Welding","Installation","Repairs","Maintenance","Consultations"].map(s => (
                <li key={s}><a href="#contact" className="text-[var(--text)] text-[0.85rem] no-underline hover:text-white transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-condensed text-[0.8rem] font-bold tracking-[3px] uppercase mb-4" style={{ color:"var(--orange)" }}>Contact</h4>
            <div className="flex flex-col gap-3 text-[0.85rem]" style={{ color:"var(--text)" }}>
              {[{icon:"📞",text:"0722 909 059"},{icon:"💬",text:"0722 909 059 (WhatsApp)"},{icon:"📍",text:"Nairobi, Kenya"},{icon:"🕐",text:"Mon-Sat: 8am-6pm"}].map(c => (
                <div key={c.text} className="flex items-start gap-3"><span style={{ color:"var(--orange)", flexShrink:0 }}>{c.icon}</span>{c.text}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-2 text-[0.78rem]" style={{ borderTop:"1px solid rgba(255,255,255,.06)", color:"rgba(176,186,200,.5)" }}>
          <p>© 2025 Henry Wambugu Steel Works. All rights reserved.</p>
          <p>Made with <span style={{ color:"var(--orange)" }}>❤</span> by your son Peter</p>
        </div>
      </div>
    </footer>
  );
}
EOF
echo "✅ Footer.tsx"

# ── ScrollToTop.tsx ──────────────────────────────────────────
cat > app/components/ScrollToTop.tsx << 'EOF'
"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
      className="fixed bottom-8 right-8 w-11 h-11 flex items-center justify-center text-white z-[500] border-none cursor-pointer text-lg hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(232,86,10,.7)] active:scale-90"
      style={{ background:"var(--orange)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", pointerEvents: visible ? "all" : "none", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
      ↑
    </button>
  );
}
EOF
echo "✅ ScrollToTop.tsx"

echo ""
echo "✅✅✅ All files written! Now run: git add . && git commit -m 'perf: CSS animations' && git push"
