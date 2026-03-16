"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          exit={{ opacity:0, y:20 }}
          whileHover={{ y:-4, boxShadow:"0 0 20px rgba(232,86,10,.7)" }}
          whileTap={{ scale:0.92 }}
          onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
          className="fixed bottom-8 right-8 w-11 h-11 flex items-center justify-center text-white z-[500] border-none cursor-pointer text-lg"
          style={{ background:"var(--orange)", clipPath:"polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
