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
