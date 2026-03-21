"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { img:"https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=500&fit=crop", title:"Security Gates",      sub:"Modern Design",    span:"col-span-2 row-span-2" },
  { img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",   title:"Entrance Doors",     sub:"Custom Design",    span:"" },
  { img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",   title:"Steel Furniture",    sub:"Elegant Pieces",   span:"" },
  { img:"https://images.unsplash.com/photo-1565636192335-14c06c2fe626?w=400&h=300&fit=crop",title:"Decorative Railings", sub:"Safety & Style",   span:"" },
  { img:"https://images.unsplash.com/photo-1578926314433-8fe10c4c9c0a?w=400&h=300&fit=crop",title:"Tool Storage",        sub:"Industrial Grade", span:"" },
  { img:"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",title:"Custom Projects",     sub:"Your Vision",      span:"" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24" style={{ background:"var(--dark)" }}>
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:.8 }} className="mb-12">
          <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3">
            <span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />
            Portfolio
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] relative inline-block">
            Our Work
            <motion.span initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ delay:.4, duration:.8 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)" }} />
          </h2>
        </motion.div>

        <motion.div initial={{ opacity:0, scale:0.96 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-3">
          {items.map((item, i) => (
            <motion.div key={i} whileHover={{ scale:1.02 }} transition={{ duration:.3 }} className={`relative overflow-hidden cursor-pointer group ${item.span}`}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-[1.08] group-hover:saturate-100"
                style={{ filter:"saturate(.6)" }}
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background:"linear-gradient(transparent 40%,rgba(13,13,26,.88) 100%)" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow:"inset 0 0 0 2px var(--orange), inset 0 0 30px rgba(232,86,10,.12)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-condensed text-[1rem] font-bold tracking-[1px] uppercase text-[var(--white)]">{item.title}</h3>
                <p className="font-condensed text-[0.7rem] tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                  style={{ color:"var(--orange)" }}>{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
