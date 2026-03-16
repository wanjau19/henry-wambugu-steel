"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  { icon:"📞", title:"Phone",    value:"0722 909 059",        note:"Call anytime for quick consultations" },
  { icon:"📍", title:"Location", value:"Nairobi, Kenya",      note:"Available for home & on-site installations" },
  { icon:"🕐", title:"Hours",    value:"Mon – Sat: 8am – 6pm",note:"Sunday: By appointment only" },
  { icon:"💬", title:"WhatsApp", value:"0722 909 059",        note:"Chat us for fast responses" },
];

function Field({ label, type, placeholder }: { label:string; type:string; placeholder:string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-condensed text-[0.7rem] font-bold tracking-[2px] uppercase" style={{ color:"var(--text)" }}>{label}</label>
      <input type={type} placeholder={placeholder} required
        className="px-4 py-3 text-sm outline-none transition-all duration-300"
        style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)", color:"var(--white)", fontFamily:"inherit" }}
        onFocus={e => { e.currentTarget.style.borderColor="var(--orange)"; e.currentTarget.style.boxShadow="0 0 0 2px rgba(232,86,10,.15)"; }}
        onBlur={e => { e.currentTarget.style.borderColor="rgba(255,255,255,.1)"; e.currentTarget.style.boxShadow="none"; }}
      />
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="py-24 relative" style={{ background:"var(--steel)" }}>
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }} transition={{ duration:.8 }} className="mb-12">
          <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-3 flex items-center gap-3">
            <span className="inline-block w-8 h-[2px]" style={{ background:"var(--orange)" }} />
            Get In Touch
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] leading-none text-[var(--white)] relative inline-block">
            Start Your Project
            <motion.span initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ delay:.4, duration:.8 }}
              className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left" style={{ background:"linear-gradient(90deg,var(--orange),transparent)" }} />
          </h2>
          <p className="text-[var(--text)] font-light mt-4 max-w-lg">Ready to transform your vision into reality? Reach out today.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          <motion.div initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:.9 }} className="flex flex-col gap-3">
            {cards.map((c, i) => (
              <motion.div key={c.title}
                initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                transition={{ delay:i*0.1, duration:.7 }}
                whileHover={{ x:4 }}
                className="flex gap-4 items-start p-5 transition-all duration-300"
                style={{ background:"var(--card-bg)", border:"1px solid rgba(255,255,255,.05)" }}>
                <div className="w-11 h-11 flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background:"rgba(232,86,10,.1)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>
                  {c.icon}
                </div>
                <div>
                  <h4 className="font-condensed text-[0.75rem] font-bold tracking-[2px] uppercase mb-1" style={{ color:"var(--text)" }}>{c.title}</h4>
                  <div className="text-[var(--white)] font-semibold text-[0.95rem]">{c.value}</div>
                  <p className="text-[0.75rem] mt-1" style={{ color:"var(--text)" }}>{c.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:.9 }}
            onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Your Name"    type="text"  placeholder="e.g. John Kamau" />
              <Field label="Phone Number" type="tel"   placeholder="e.g. 0722 000 000" />
            </div>
            <Field label="Email Address" type="email" placeholder="your@email.com" />
            <div className="flex flex-col gap-2">
              <label className="font-condensed text-[0.7rem] font-bold tracking-[2px] uppercase" style={{ color:"var(--text)" }}>Product Interested In</label>
              <select className="px-4 py-3 text-sm outline-none transition-all duration-300"
                style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)", color:"var(--white)", fontFamily:"inherit" }}
                onFocus={e => { e.currentTarget.style.borderColor="var(--orange)"; }}
                onBlur={e => { e.currentTarget.style.borderColor="rgba(255,255,255,.1)"; }}>
                <option value="">Select a product…</option>
                {["Steel Gates","Metallic Doors","Steel Furniture","Window Grills & Railings","Tool Stands","Custom / Other"].map(o => (
                  <option key={o} style={{ background:"var(--steel)" }}>{o}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-condensed text-[0.7rem] font-bold tracking-[2px] uppercase" style={{ color:"var(--text)" }}>Project Details</label>
              <textarea rows={5} required placeholder="Tell us about your project, size, style preferences, timeline…"
                className="px-4 py-3 text-sm outline-none resize-y transition-all duration-300"
                style={{ background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)", color:"var(--white)", fontFamily:"inherit" }}
                onFocus={e => { e.currentTarget.style.borderColor="var(--orange)"; e.currentTarget.style.boxShadow="0 0 0 2px rgba(232,86,10,.15)"; }}
                onBlur={e => { e.currentTarget.style.borderColor="rgba(255,255,255,.1)"; e.currentTarget.style.boxShadow="none"; }}
              />
            </div>
            <motion.button type="submit" whileHover={{ y:-2 }} whileTap={{ scale:.98 }}
              className="w-full flex items-center justify-center gap-3 font-condensed text-[0.9rem] font-bold tracking-[2px] uppercase py-5 text-white transition-all duration-300"
              style={{ background: sent ? "#22c55e" : "var(--orange)", clipPath:"polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)", cursor:"pointer", border:"none",
                boxShadow: sent ? "0 0 20px rgba(34,197,94,.4)" : undefined }}>
              {sent ? "✅ Message Sent!" : "✈ Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
