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
