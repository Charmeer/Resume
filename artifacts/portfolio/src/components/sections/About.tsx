import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profilePhoto from "@assets/WhatsApp_Image_2025-03-09_at_18.52.41_cf10f3e6_1781072752881.jpg";

const SKILL_GROUPS = [
  { label: "Programming & DB", skills: ["Python", "SQL", "SQLite"] },
  { label: "Analysis & Viz", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Advanced Excel"] },
  { label: "Machine Learning", skills: ["Scikit-learn", "CatBoost", "SHAP", "Feature Engineering"] },
  { label: "Statistics", skills: ["Hypothesis Testing", "EDA", "Time Series", "Bootstrap CIs"] },
];

const SPRING = { type: "spring" as const, stiffness: 380, damping: 22 };
const EASE = [0.16, 1, 0.3, 1] as const;

const tagContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};
const tagItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: SPRING },
};

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  const from = (x = 0, y = 0, delay = 0) => ({
    initial: { opacity: 0, x, y },
    animate: inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y },
    transition: { duration: 0.75, delay, ease: EASE },
  });

  return (
    <section id="about" className="py-24 bg-card/30">
      <div ref={ref} className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start">

          {/* Photo — wipe in from left */}
          <div className="relative">
            <motion.div
              className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={inView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.05 }}
            >
              <motion.img
                src={profilePhoto}
                alt="Rohit Biswas portrait"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                initial={{ scale: 1.1 }}
                animate={inView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.05 }}
              />
            </motion.div>

            {/* Tilted card — rotates into place */}
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-2xl z-0 scale-105"
              initial={{ rotate: -12, opacity: 0 }}
              animate={inView ? { rotate: -3, opacity: 1 } : { rotate: -12, opacity: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            />
          </div>

          {/* Text content */}
          <div>
            {/* Heading — clip from bottom */}
            <div className="overflow-hidden mb-6">
              <motion.h2
                className="text-3xl md:text-4xl font-serif font-medium"
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : { y: "110%" }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
              >
                Behind the data
              </motion.h2>
            </div>

            {/* Paragraphs — each slides in from right, staggered */}
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              {[
                "I'm a Data Science undergraduate at Techno India University with a strong interest in machine learning, statistical modelling, and analytics — focused on transforming complex datasets into actionable business insights.",
                "I've built end-to-end solutions spanning fraud detection with explainable AI, vendor profitability pipelines, and five-year market analytics studies. I care as much about the story the data tells as the model that reveals it.",
                "When I'm not training models or writing SQL, I'm exploring financial markets, reading about statistical theory, or figuring out why the last visualisation didn't quite land.",
              ].map((text, i) => (
                <motion.p key={i} {...from(30, 0, 0.2 + i * 0.1)}>
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Core Toolkit heading — from left */}
            <motion.h3
              className="text-sm font-medium uppercase tracking-wider text-foreground mb-5"
              {...from(-20, 0, 0.5)}
            >
              Core Toolkit
            </motion.h3>

            {/* Skill groups with staggered tag pop-ins */}
            <div className="space-y-5">
              {SKILL_GROUPS.map((group, gi) => (
                <motion.div key={group.label} {...from(-20, 0, 0.55 + gi * 0.08)}>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide mb-2 block">
                    {group.label}
                  </span>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={tagContainer}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delayChildren: 0.6 + gi * 0.1 }}
                  >
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={tagItem}
                        className="px-3 py-1.5 bg-background border border-border/50 rounded-md text-sm text-foreground/80 hover:border-primary/30 hover:scale-105 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
