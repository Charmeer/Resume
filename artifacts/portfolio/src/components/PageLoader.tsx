import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => String(Math.round(v)).padStart(3, "0"));
  const barScale = useTransform(count, [0, 100], [0, 1]);

  useEffect(() => {
    let controls: { stop: () => void } | null = null;
    const startTimer = setTimeout(() => {
      controls = animate(count, 100, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        onComplete: () => {
          setTimeout(() => {
            setExiting(true);
            setTimeout(onComplete, 900);
          }, 700);
        },
      });
    }, 600);
    return () => {
      clearTimeout(startTimer);
      controls?.stop();
    };
  }, []);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
          exit={{ y: "-100%", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-serif text-6xl font-medium text-foreground tracking-tight mb-10"
          >
            RB.
          </motion.p>

          <div className="w-40 h-[1px] bg-border/40 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary rounded-full"
              style={{ scaleX: barScale, originX: 0 }}
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-xs text-muted-foreground font-mono tabular-nums tracking-widest"
          >
            <motion.span>{rounded}</motion.span>
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
