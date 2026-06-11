import { motion } from "framer-motion";
import profilePhoto from "@assets/WhatsApp_Image_2025-03-09_at_18.52.41_cf10f3e6_1781072752881.jpg";

const SKILL_GROUPS = [
  { label: "Programming & DB", skills: ["Python", "SQL", "SQLite"] },
  { label: "Analysis & Viz", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Advanced Excel"] },
  { label: "Machine Learning", skills: ["Scikit-learn", "CatBoost", "SHAP", "Feature Engineering"] },
  { label: "Statistics", skills: ["Hypothesis Testing", "EDA", "Time Series", "Bootstrap CIs"] },
];

type V = { x: number; y: number; r: number; s?: number };

const CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const PIECE = {
  hidden: ({ x, y, r, s = 0.88 }: V) => ({ x, y, rotate: r, opacity: 0, scale: s }),
  visible: {
    x: 0, y: 0, rotate: 0, opacity: 1, scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 13 },
  },
};

const TAG_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const TAG_PIECE = {
  hidden: ({ x, y, r }: V) => ({ x, y, rotate: r, opacity: 0, scale: 0.55 }),
  visible: {
    x: 0, y: 0, rotate: 0, opacity: 1, scale: 1,
    transition: { type: "spring" as const, stiffness: 360, damping: 18 },
  },
};

const TAG_VECS: V[] = [
  { x: -18, y: -14, r: -9 }, { x: 14, y: -20, r: 7 }, { x: -22, y: 12, r: -5 },
  { x: 20, y: 16, r: 11 }, { x: -10, y: -18, r: -7 }, { x: 16, y: -10, r: 8 },
  { x: -24, y: 8, r: -12 }, { x: 18, y: 14, r: 6 },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-start"
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >

          {/* Photo — from top-left, rotating into place */}
          <motion.div variants={PIECE} custom={{ x: -90, y: -50, r: -10, s: 0.82 }}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
                <img
                  src={profilePhoto}
                  alt="Rohit Biswas portrait"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 z-0 scale-105" />
            </div>
          </motion.div>

          {/* Text column */}
          <div>
            {/* Heading — from upper right */}
            <motion.div variants={PIECE} custom={{ x: 70, y: -40, r: 6 }} className="overflow-hidden mb-6">
              <h2 className="text-3xl md:text-4xl font-serif font-medium">Behind the data</h2>
            </motion.div>

            {/* Paragraphs — each from a unique direction */}
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <motion.p variants={PIECE} custom={{ x: -60, y: 30, r: -4 }}>
                I'm a Data Science undergraduate at Techno India University with a strong interest in machine
                learning, statistical modelling, and analytics — focused on transforming complex datasets into
                actionable business insights.
              </motion.p>
              <motion.p variants={PIECE} custom={{ x: 80, y: 20, r: 5 }}>
                I've built end-to-end solutions spanning fraud detection with explainable AI, vendor profitability
                pipelines, and five-year market analytics studies. I care as much about the story the data tells
                as the model that reveals it.
              </motion.p>
              <motion.p variants={PIECE} custom={{ x: -50, y: -30, r: -3 }}>
                When I'm not training models or writing SQL, I'm exploring financial markets, reading about
                statistical theory, or figuring out why the last visualisation didn't quite land.
              </motion.p>
            </div>

            {/* Toolkit heading — from below */}
            <motion.h3
              variants={PIECE}
              custom={{ x: 0, y: 40, r: 3 }}
              className="text-sm font-medium uppercase tracking-wider text-foreground mb-5"
            >
              Core Toolkit
            </motion.h3>

            {/* Skill groups */}
            <div className="space-y-5">
              {SKILL_GROUPS.map((group, gi) => (
                <motion.div key={group.label} variants={PIECE} custom={{ x: (gi % 2 === 0 ? -1 : 1) * 50, y: 30, r: (gi % 2 === 0 ? -3 : 4) }}>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide mb-2 block">
                    {group.label}
                  </span>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={TAG_CONTAINER}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    {group.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        variants={TAG_PIECE}
                        custom={TAG_VECS[si % TAG_VECS.length]}
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
        </motion.div>
      </div>
    </section>
  );
}
