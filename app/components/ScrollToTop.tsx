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
