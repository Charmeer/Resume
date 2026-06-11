import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CERTIFICATES = [
  {
    title: "Mathematics: Basics to Advanced for Data Science and GenAI",
    issuer: "Udemy",
    instructor: "Krish Naik",
  },
  {
    title: "Complete 2026 Python Bootcamp: Learn Python from Scratch",
    issuer: "Udemy",
    instructor: "Haris Ali Khan",
  },
  {
    title: "Complete Data Science Course",
    issuer: "Code with Harry",
    instructor: "",
  },
];

const EDUCATION = [
  {
    degree: "B.Sc. in Data Science",
    school: "Techno India University",
    period: "2024 — Present",
    detail: "GPA: 8.6 / 10",
  },
  {
    degree: "Intermediate / Class XII (CBSE)",
    school: "Sudhir Memorial Institute",
    period: "",
    detail: "Score: 70%",
  },
  {
    degree: "Matriculation / Class X (CBSE)",
    school: "Sudhir Memorial Institute",
    period: "",
    detail: "Score: 91.2%",
  },
];

const SKILL_CATEGORIES = [
  { label: "Programming & DB", items: ["Python", "SQL", "SQLite"] },
  { label: "Analysis & Viz", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Advanced Excel"] },
  { label: "Machine Learning", items: ["Scikit-learn", "CatBoost", "SHAP", "Feature Engineering", "Model Evaluation"] },
  { label: "Statistics", items: ["Hypothesis Testing", "EDA", "Time Series Analysis", "Bootstrap CIs"] },
  { label: "Excel", items: ["Pivot Tables", "Power Query", "XLOOKUP", "VLOOKUP"] },
  { label: "Languages", items: ["Bengali (Native)", "Hindi (Fluent)", "English (Fluent)"] },
];

const SPRING = { type: "spring" as const, stiffness: 380, damping: 22 };
const EASE = [0.16, 1, 0.3, 1] as const;

const tagContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const tagItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: SPRING },
};

// Cert cards fly in from three different directions
const CERT_ORIGINS = [
  { x: -60, y: 0 },
  { x: 0, y: 40 },
  { x: 60, y: 0 },
];

function SectionRef({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function Resume() {
  const headerRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const headerIn = useInView(headerRef, { once: true, margin: "-80px 0px" });
  const certsIn = useInView(certsRef, { once: true, margin: "-60px 0px" });
  const eduIn = useInView(eduRef, { once: true, margin: "-60px 0px" });
  const skillsIn = useInView(skillsRef, { once: true, margin: "-60px 0px" });

  return (
    <section id="resume" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <div className="overflow-hidden mb-4">
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-medium"
              initial={{ y: "110%" }}
              animate={headerIn ? { y: "0%" } : { y: "110%" }}
              transition={{ duration: 0.75, ease: EASE }}
            >
              Education & Skills
            </motion.h2>
          </div>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={headerIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            Academic background and technical expertise.
          </motion.p>

          {/* Animated underline */}
          <motion.div
            className="w-12 h-[2px] bg-primary mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={headerIn ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          />
        </div>

        {/* Certificates — fly in from three directions */}
        <div ref={certsRef} className="mb-16">
          <motion.h3
            className="text-xl font-serif font-medium mb-6 text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={certsIn ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Certificates
          </motion.h3>

          <div className="grid sm:grid-cols-3 gap-4">
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: CERT_ORIGINS[i].x, y: CERT_ORIGINS[i].y }}
                animate={certsIn
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: CERT_ORIGINS[i].x, y: CERT_ORIGINS[i].y }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: EASE }}
                className="p-4 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <p className="text-sm font-medium text-foreground leading-snug mb-2">{cert.title}</p>
                <span className="text-xs text-primary/80 font-medium">{cert.issuer}</span>
                {cert.instructor && (
                  <span className="text-xs text-muted-foreground"> · {cert.instructor}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16">

          {/* Education Timeline */}
          <div ref={eduRef}>
            <motion.h3
              className="text-xl font-serif font-medium mb-8 text-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={eduIn ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Education
            </motion.h3>

            <div className="space-y-8 relative">
              {/* Timeline line — draws downward */}
              <motion.div
                className="absolute left-2 top-0 w-0.5 bg-gradient-to-b from-primary/40 via-border to-transparent"
                initial={{ scaleY: 0, originY: 0, height: "100%" }}
                animate={eduIn ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
              />

              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  className="relative pl-10 group"
                  initial={{ opacity: 0, x: -40 }}
                  animate={eduIn ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.65, delay: 0.3 + i * 0.15, ease: EASE }}
                >
                  {/* Dot — pops in with spring */}
                  <motion.div
                    className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors"
                    initial={{ scale: 0 }}
                    animate={eduIn ? { scale: 1 } : { scale: 0 }}
                    transition={{ ...SPRING, delay: 0.45 + i * 0.15 }}
                  />

                  <div className="p-5 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                    {edu.period && (
                      <span className="text-sm font-medium text-primary block mb-1">{edu.period}</span>
                    )}
                    <h4 className="text-base font-serif font-medium text-foreground mb-0.5">{edu.degree}</h4>
                    <span className="text-sm text-muted-foreground block">{edu.school}</span>
                    <span className="text-xs text-primary/70 font-medium mt-1 block">{edu.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills — slide from right, tags spring pop */}
          <div ref={skillsRef}>
            <motion.h3
              className="text-xl font-serif font-medium mb-8 text-foreground"
              initial={{ opacity: 0, x: 20 }}
              animate={skillsIn ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Skills
            </motion.h3>

            <div className="space-y-6">
              {SKILL_CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  className="pl-4 border-l-2 border-border/50 relative before:absolute before:left-[-5px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-primary/40"
                  initial={{ opacity: 0, x: 30 }}
                  animate={skillsIn ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease: EASE }}
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-primary/80 block mb-2">
                    {cat.label}
                  </span>
                  <motion.div
                    className="flex flex-wrap gap-1.5"
                    variants={tagContainer}
                    initial="hidden"
                    animate={skillsIn ? "visible" : "hidden"}
                    transition={{ delayChildren: 0.15 + i * 0.1 }}
                  >
                    {cat.items.map((item) => (
                      <motion.span
                        key={item}
                        variants={tagItem}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground hover:scale-105 transition-transform cursor-default"
                      >
                        {item}
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
