import { motion } from "framer-motion";

const CERTIFICATES = [
  { title: "Mathematics: Basics to Advanced for Data Science and GenAI", issuer: "Udemy", instructor: "Krish Naik" },
  { title: "Complete 2026 Python Bootcamp: Learn Python from Scratch", issuer: "Udemy", instructor: "Haris Ali Khan" },
  { title: "Complete Data Science Course", issuer: "Code with Harry", instructor: "" },
];

const EDUCATION = [
  { degree: "B.Sc. in Data Science", school: "Techno India University", period: "2024 — Present", detail: "GPA: 8.6 / 10" },
  { degree: "Intermediate / Class XII (CBSE)", school: "Sudhir Memorial Institute", period: "", detail: "Score: 70%" },
  { degree: "Matriculation / Class X (CBSE)", school: "Sudhir Memorial Institute", period: "", detail: "Score: 91.2%" },
];

const SKILL_CATEGORIES = [
  { label: "Programming & DB", items: ["Python", "SQL", "SQLite"] },
  { label: "Analysis & Viz", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Advanced Excel"] },
  { label: "Machine Learning", items: ["Scikit-learn", "CatBoost", "SHAP", "Feature Engineering", "Model Evaluation"] },
  { label: "Statistics", items: ["Hypothesis Testing", "EDA", "Time Series Analysis", "Bootstrap CIs"] },
  { label: "Excel", items: ["Pivot Tables", "Power Query", "XLOOKUP", "VLOOKUP"] },
  { label: "Languages", items: ["Bengali (Native)", "Hindi (Fluent)", "English (Fluent)"] },
];

type V = { x: number; y: number; r: number; s?: number };

const CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const PIECE = {
  hidden: ({ x, y, r, s = 0.88 }: V) => ({ x, y, rotate: r, opacity: 0, scale: s }),
  visible: {
    x: 0, y: 0, rotate: 0, opacity: 1, scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 13 },
  },
};

const TAG_PIECE = {
  hidden: ({ x, y, r }: V) => ({ x, y, rotate: r, opacity: 0, scale: 0.55 }),
  visible: {
    x: 0, y: 0, rotate: 0, opacity: 1, scale: 1,
    transition: { type: "spring" as const, stiffness: 360, damping: 18 },
  },
};

const TAG_VECS: V[] = [
  { x: -16, y: -14, r: -8 }, { x: 13, y: -17, r: 7 }, { x: -20, y: 11, r: -6 },
  { x: 17, y: 15, r: 10 }, { x: -11, y: -13, r: -5 }, { x: 19, y: -9, r: 8 },
];

const CERT_VECS: V[] = [
  { x: -80, y: -40, r: -10, s: 0.82 },
  { x: 0, y: -80, r: 6, s: 0.82 },
  { x: 80, y: -40, r: 10, s: 0.82 },
];

const EDU_VECS: V[] = [
  { x: -80, y: -30, r: -8, s: 0.85 },
  { x: -60, y: 20, r: -6, s: 0.85 },
  { x: -70, y: -10, r: 5, s: 0.85 },
];

const SKILL_VECS: V[] = [
  { x: 70, y: -30, r: 8, s: 0.88 },
  { x: 80, y: 20, r: -6, s: 0.88 },
  { x: 60, y: -20, r: 7, s: 0.88 },
  { x: 90, y: 10, r: -8, s: 0.88 },
  { x: 65, y: -25, r: 6, s: 0.88 },
  { x: 75, y: 15, r: -5, s: 0.88 },
];

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        {/* Section header */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <motion.div variants={PIECE} custom={{ x: 0, y: -50, r: -4 }} className="overflow-hidden mb-4">
            <h2 className="text-3xl md:text-4xl font-serif font-medium">Education & Skills</h2>
          </motion.div>
          <motion.p variants={PIECE} custom={{ x: 0, y: 30, r: 3 }} className="text-muted-foreground text-lg">
            Academic background and technical expertise.
          </motion.p>
          <motion.div
            variants={PIECE}
            custom={{ x: 0, y: 20, r: 0, s: 1 }}
            className="w-12 h-[2px] bg-primary mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Certificates — fly from three different scattered positions */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16"
        >
          <motion.h3
            variants={PIECE}
            custom={{ x: -40, y: -20, r: -5 }}
            className="text-xl font-serif font-medium mb-6 text-foreground"
          >
            Certificates
          </motion.h3>

          <div className="grid sm:grid-cols-3 gap-4">
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={i}
                variants={PIECE}
                custom={CERT_VECS[i]}
                className="p-4 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <p className="text-sm font-medium text-foreground leading-snug mb-2">{cert.title}</p>
                <span className="text-xs text-primary/80 font-medium">{cert.issuer}</span>
                {cert.instructor && <span className="text-xs text-muted-foreground"> · {cert.instructor}</span>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16">

          {/* Education — assembles from the left */}
          <motion.div
            variants={CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.h3
              variants={PIECE}
              custom={{ x: -50, y: -20, r: -6 }}
              className="text-xl font-serif font-medium mb-8 text-foreground"
            >
              Education
            </motion.h3>

            <div className="space-y-8 relative">
              {/* Timeline line draws down */}
              <motion.div
                className="absolute left-2 top-0 w-0.5 h-full bg-gradient-to-b from-primary/40 via-border to-transparent"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />

              {EDUCATION.map((edu, i) => (
                <motion.div key={i} variants={PIECE} custom={EDU_VECS[i]} className="relative pl-10 group">
                  <motion.div
                    className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors"
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.4 + i * 0.15 }}
                  />
                  <div className="p-5 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                    {edu.period && <span className="text-sm font-medium text-primary block mb-1">{edu.period}</span>}
                    <h4 className="text-base font-serif font-medium text-foreground mb-0.5">{edu.degree}</h4>
                    <span className="text-sm text-muted-foreground block">{edu.school}</span>
                    <span className="text-xs text-primary/70 font-medium mt-1 block">{edu.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills — assembles from the right, tags scatter-pop */}
          <motion.div
            variants={CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.h3
              variants={PIECE}
              custom={{ x: 50, y: -20, r: 6 }}
              className="text-xl font-serif font-medium mb-8 text-foreground"
            >
              Skills
            </motion.h3>

            <div className="space-y-6">
              {SKILL_CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  variants={PIECE}
                  custom={SKILL_VECS[i]}
                  className="pl-4 border-l-2 border-border/50 relative before:absolute before:left-[-5px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-primary/40"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-primary/80 block mb-2">
                    {cat.label}
                  </span>
                  <motion.div
                    className="flex flex-wrap gap-1.5"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                  >
                    {cat.items.map((item, si) => (
                      <motion.span
                        key={item}
                        variants={TAG_PIECE}
                        custom={TAG_VECS[si % TAG_VECS.length]}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground hover:scale-105 transition-transform cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
