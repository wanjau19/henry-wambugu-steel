"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.nav initial={{ y:-80, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.7 }} className="fixed top-0 left-0 right-0 z-[1000] h-[70px] flex items-center px-8" style={{ background: scrolled ? "rgba(13,13,26,0.98)" : "rgba(13,13,26,0.85)", backdropFilter:"blur(16px)", borderBottom:"1px solid var(--border)" }}>
        <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 flex items-center justify-center bg-[#e8560a]" style={{ clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}>
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
                <a href={"#"+id} className={"font-condensed text-xs font-bold tracking-widest uppercase no-underline "+(active===id?"text-[#e8560a]":"text-[#c0c8d8]")}>{id}</a>
                {active===id && <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#e8560a]" />}
              </li>
            ))}
          </ul>
          <a href="tel:0722909059" className="hidden md:flex items-center gap-2 font-condensed text-xs font-bold tracking-widest uppercase text-white px-5 py-2 bg-[#e8560a]">Call Now</a>
          <button className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer" onClick={() => setOpen(o => !o)}>
            {[0,1,2].map(i => (
              <motion.span key={i} animate={open?(i===1?{opacity:0}:i===0?{rotate:45,y:7}:{rotate:-45,y:-7}):{rotate:0,y:0,opacity:1}} className="block w-6 h-[2px] bg-white" />
            ))}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="fixed top-[70px] left-0 right-0 z-[999] flex flex-col gap-4 p-6" style={{background:"rgba(13,13,26,0.98)",backdropFilter:"blur(16px)"}}>
            {links.map(id => (
              <a key={id} href={"#"+id} onClick={() => setOpen(false)} className="font-condensed text-base font-bold tracking-widest uppercase no-underline text-[#c0c8d8] pb-3 border-b border-white/5">{id}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}