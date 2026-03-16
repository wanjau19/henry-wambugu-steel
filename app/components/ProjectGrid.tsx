"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  { id:1, title:"Premium Steel Gates",      category:"Security",   badge:"Popular",  price:"From KES 15,000", desc:"Custom-designed security gates with modern patterns and durable anti-rust finishes.", img:"https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop", span:"col-span-2 row-span-2", textSize:"text-3xl" },
  { id:2, title:"Metallic Doors",           category:"Residential",badge:"Trending", price:"From KES 12,000", desc:"Stylish and durable metal doors for homes and businesses.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", span:"", textSize:"text-xl" },
  { id:3, title:"Steel Furniture",          category:"Interior",   badge:"New",      price:"From KES 8,000",  desc:"Modern and elegant steel tables, beds, and cabinets.", img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop", span:"", textSize:"text-xl" },
  { id:4, title:"Window Grills & Railings", category:"Safety",     badge:"Custom",   price:"From KES 5,000",  desc:"Decorative and protective window grills and stair railings.", img:"https://images.unsplash.com/photo-1565636192335-14c06c2fe626?w=600&h=400&fit=crop", span:"", textSize:"text-xl" },
  { id:5, title:"Steel Tool Stands",        category:"Industrial", badge:"Durable",  price:"From KES 3,500",  desc:"Heavy-duty tool storage and display stands for any workshop.", img:"https://images.unsplash.com/photo-1578926314433-8fe10c4c9c0a?w=600&h=400&fit=crop", span:"", textSize:"text-xl" },
];

const cardVariants = {
  hidden: { opacity:0, y:50, scale:0.93 },
  show: { opacity:1, y:0, scale:1, transition:{ duration:0.7 } },
};

export default function ProjectGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-100px" });

  return (
    <section id="products" className="py-24 relative" style={{ background:"var(--steel)" }}>
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(90deg,transparent,var(--orange),transparent)" }} />
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:.8 }} className="mb-12">
          <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3">
            <span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />
            Our Collection
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] mb-3 relative inline-block">
            Featured Projects
            <motion.span initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ delay:.4, duration:.8 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)" }} />
          </h2>
          <p className="text-[var(--text)] font-light max-w-lg mt-4">Premium quality metalwork crafted to your exact specifications.</p>
        </motion.div>

        <motion.div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-4">
          {projects.map((p, i) => (
            <motion.div key={p.id} variants={cardVariants} initial="hidden" animate={inView ? "show" : "hidden"}
              whileHover={{ y:-6 }} className={`relative overflow-hidden group cursor-pointer ${p.span}`}
              style={{ border:"1px solid rgba(255,255,255,.06)" }}>
              <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" style={{ filter:"saturate(.7)" }} />
              <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(13,13,26,.95) 0%,rgba(13,13,26,.3) 50%,transparent 100%)" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow:"inset 0 0 0 1px var(--orange), inset 0 0 30px rgba(232,86,10,.1)" }} />
              <div className="absolute top-4 right-4 font-condensed text-[0.6rem] font-bold tracking-[2px] uppercase text-white z-10 px-2 py-1"
                style={{ background:"var(--orange)", clipPath:"polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)" }}>
                {p.badge}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <p className="font-condensed text-[0.65rem] tracking-[3px] uppercase mb-1" style={{ color:"var(--orange)" }}>{p.category}</p>
                <h3 className={`font-condensed ${p.textSize} font-bold tracking-[1px] uppercase text-[var(--white)] mb-2 leading-tight`}>{p.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-display text-[1.4rem] neon-text" style={{ color:"var(--orange)" }}>{p.price}</span>
                  <button className="font-condensed text-[0.7rem] font-bold tracking-[2px] uppercase px-3 py-2 transition-all duration-300 hover:bg-[var(--orange)] hover:text-white"
                    style={{ background:"transparent", border:"1px solid rgba(232,86,10,.4)", color:"var(--orange)", cursor:"pointer" }}>
                    Enquire →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
