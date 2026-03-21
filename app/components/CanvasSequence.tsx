"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const TOTAL_FRAMES = 60;

function drawFrame(ctx: CanvasRenderingContext2D, frame: number, w: number, h: number) {
  const t = frame / (TOTAL_FRAMES - 1);
  ctx.clearRect(0, 0, w, h);
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, `hsl(230, 35%, ${4 + t * 6}%)`);
  bg.addColorStop(1, `hsl(220, 40%, ${8 + t * 8}%)`);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = `rgba(232,86,10,${0.04 + t * 0.08})`;
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  const cx = w / 2, cy = h / 2;
  const slabW = w * (0.3 + t * 0.35);
  const slabH = h * (0.12 + t * 0.1);
  const metalGrad = ctx.createLinearGradient(cx - slabW/2, cy - slabH/2, cx + slabW/2, cy + slabH/2);
  metalGrad.addColorStop(0,   `hsla(220,20%,${15 + t*25}%,0.9)`);
  metalGrad.addColorStop(0.4, `hsla(220,15%,${30 + t*30}%,0.95)`);
  metalGrad.addColorStop(0.6, `hsla(30,10%,${50 + t*20}%,0.85)`);
  metalGrad.addColorStop(1,   `hsla(220,20%,${15 + t*15}%,0.9)`);
  ctx.fillStyle = metalGrad;
  ctx.fillRect(cx - slabW/2, cy - slabH/2, slabW, slabH);
  if (t > 0.2 && t < 0.8) {
    const arcT = (t - 0.2) / 0.6;
    const arcX = cx - slabW/2 + arcT * slabW;
    const arcY = cy;
    const arcR = 8 + Math.sin(frame * 0.7) * 4;
    const outerGlow = ctx.createRadialGradient(arcX, arcY, 0, arcX, arcY, 80);
    outerGlow.addColorStop(0, `rgba(255,160,30,${0.35 + Math.sin(frame*0.5)*0.15})`);
    outerGlow.addColorStop(0.3, `rgba(232,86,10,${0.2 + Math.sin(frame*0.4)*0.1})`);
    outerGlow.addColorStop(1, "rgba(232,86,10,0)");
    ctx.fillStyle = outerGlow;
    ctx.beginPath(); ctx.arc(arcX, arcY, 80, 0, Math.PI*2); ctx.fill();
    const coreGlow = ctx.createRadialGradient(arcX, arcY, 0, arcX, arcY, arcR * 2);
    coreGlow.addColorStop(0, "rgba(255,240,200,1)");
    coreGlow.addColorStop(0.4, "rgba(255,160,30,0.8)");
    coreGlow.addColorStop(1, "rgba(232,86,10,0)");
    ctx.fillStyle = coreGlow;
    ctx.beginPath(); ctx.arc(arcX, arcY, arcR * 2, 0, Math.PI*2); ctx.fill();
    for (let i = 0; i < 6; i++) {
      const angle = (frame * 0.3 + i * 60) * (Math.PI / 180);
      const dist = 20 + Math.sin(frame * 0.8 + i) * 15;
      ctx.fillStyle = `rgba(255,200,50,${0.6 + Math.sin(frame * 1.2 + i) * 0.3})`;
      ctx.beginPath();
      ctx.arc(arcX + Math.cos(angle) * dist, arcY + Math.sin(angle) * dist, 2, 0, Math.PI*2);
      ctx.fill();
    }
  }
  if (t > 0.65) {
    const revT = (t - 0.65) / 0.35;
    const barCount = 9;
    const barH = h * 0.55 * revT;
    const startX = cx - slabW * 0.4;
    const barSpacing = (slabW * 0.8) / (barCount - 1);
    ctx.strokeStyle = `rgba(192,200,216,${0.5 * revT})`;
    ctx.lineWidth = 6;
    for (let b = 0; b < barCount; b++) {
      const bx = startX + b * barSpacing;
      ctx.shadowColor = "rgba(232,86,10,0.4)";
      ctx.shadowBlur = 12 * revT;
      ctx.beginPath(); ctx.moveTo(bx, cy - barH/2); ctx.lineTo(bx, cy + barH/2); ctx.stroke();
    }
    ctx.shadowBlur = 0;
    ctx.strokeStyle = `rgba(192,200,216,${0.7 * revT})`;
    ctx.lineWidth = 10;
    ctx.shadowColor = "rgba(232,86,10,0.5)";
    ctx.shadowBlur = 15 * revT;
    ctx.beginPath(); ctx.moveTo(cx - slabW*0.42, cy - barH/2); ctx.lineTo(cx + slabW*0.42, cy - barH/2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - slabW*0.42, cy + barH/2); ctx.lineTo(cx + slabW*0.42, cy + barH/2); ctx.stroke();
    ctx.shadowBlur = 0;
  }
  const vignette = ctx.createRadialGradient(cx, cy, h*0.3, cx, cy, h*0.85);
  vignette.addColorStop(0, "rgba(0,0,0,0)");
  vignette.addColorStop(1, "rgba(0,0,0,0.7)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, w, h);
}

const stages = [
  { frame: 0,  label: "01 — RAW STEEL",        sub: "Premium grade steel sourced and cut to specification" },
  { frame: 20, label: "02 — PRECISION WELDING", sub: "Skilled craftsmen apply precision arc welding techniques" },
  { frame: 40, label: "03 — SHAPING & FORMING", sub: "Each component shaped under controlled heat and pressure" },
  { frame: 58, label: "04 — FINISHED PRODUCT",  sub: "Polished, coated and ready for installation" },
];

function MobileFallback() {
  return (
    <section id="sequence" className="py-20" style={{ background: "var(--dark)" }}>
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="shimmer-text font-condensed text-[0.7rem] font-bold tracking-[4px] uppercase mb-6 flex items-center gap-3">
          <span className="inline-block w-8 h-[2px]" style={{ background: "var(--orange)" }} />
          The Craft
        </p>
        <div className="grid grid-cols-2 gap-4">
          {stages.map((s, i) => (
            <div key={i} className="p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}>
              <div className="font-display text-[2rem] leading-none mb-2" style={{ color: "rgba(232,86,10,.3)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-condensed text-[0.85rem] font-bold tracking-[1px] uppercase text-[var(--white)] mb-1">
                {s.label.split("— ")[1]}
              </div>
              <div className="font-condensed text-[0.7rem] tracking-[1px]" style={{ color: "var(--text)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollHint({ scrollYProgress }: { scrollYProgress: import("framer-motion").MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  return (
    <motion.div style={{ opacity } as object}
      className="absolute bottom-8 right-8 font-condensed text-[0.65rem] tracking-[3px] uppercase flex items-center gap-2 z-10">
      <span style={{ color: "var(--text)" }}>Scroll to fabricate ↓</span>
    </motion.div>
  );
}

export default function CanvasSequence() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => { setIsMobile(window.innerWidth < 768); }, []);
  if (isMobile) return <MobileFallback />;
  return <DesktopCanvas />;
}

function DesktopCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const unsub = smoothProgress.on("change", v => {
      const frame = Math.min(Math.floor(v * TOTAL_FRAMES), TOTAL_FRAMES - 1);
      setCurrentFrame(frame);
      for (let i = stages.length - 1; i >= 0; i--) {
        if (frame >= stages[i].frame) { setStageIndex(i); break; }
      }
    });
    return unsub;
  }, [smoothProgress]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawFrame(ctx, currentFrame, canvas.offsetWidth, canvas.offsetHeight);
  }, [currentFrame]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      const ctx = canvas.getContext("2d");
      if (ctx) { ctx.scale(window.devicePixelRatio, window.devicePixelRatio); drawFrame(ctx, currentFrame, w, h); }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);
  const textOp = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  return (
    <section id="sequence" ref={containerRef} className="relative" style={{ height: `${TOTAL_FRAMES * 30}px` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: "block" }} />
        <motion.div style={{ y: textY, opacity: textOp } as object}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10">
          <motion.p key={stages[stageIndex].label}
            initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5 }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-[4px] text-center mb-3"
            style={{ color:"var(--orange)", textShadow:"0 0 30px rgba(232,86,10,.5)" }}>
            {stages[stageIndex].label}
          </motion.p>
          <motion.p key={stages[stageIndex].sub}
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5, delay:.1 }}
            className="font-condensed text-[clamp(.8rem,2vw,1rem)] tracking-[3px] uppercase text-center max-w-md"
            style={{ color:"var(--silver)" }}>
            {stages[stageIndex].sub}
          </motion.p>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {stages.map((_, i) => (
            <motion.div key={i} animate={{ scale: i === stageIndex ? 1.4 : 1, opacity: i === stageIndex ? 1 : 0.35 }}
              className="w-2 h-2 rounded-full" style={{ background: "var(--orange)" }} />
          ))}
        </div>
        <ScrollHint scrollYProgress={scrollYProgress} />
        <div className="absolute top-8 right-8 font-condensed text-[0.65rem] tracking-[3px] uppercase z-10" style={{ color:"rgba(232,86,10,.5)" }}>
          {String(currentFrame).padStart(2,"0")} / {String(TOTAL_FRAMES - 1).padStart(2,"0")}
        </div>
      </div>
    </section>
  );
}
