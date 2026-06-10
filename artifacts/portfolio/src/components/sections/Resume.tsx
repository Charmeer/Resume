import { motion } from "framer-motion";

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
  {
    label: "Programming & DB",
    items: ["Python", "SQL", "SQLite"],
  },
  {
    label: "Analysis & Viz",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Advanced Excel"],
  },
  {
    label: "Machine Learning",
    items: ["Scikit-learn", "CatBoost", "SHAP", "Feature Engineering", "Model Evaluation"],
  },
  {
    label: "Statistics",
    items: ["Hypothesis Testing", "EDA", "Time Series Analysis", "Bootstrap CIs"],
  },
  {
    label: "Excel",
    items: ["Pivot Tables", "Power Query", "XLOOKUP", "VLOOKUP"],
  },
  {
    label: "Languages",
    items: ["Bengali (Native)", "Hindi (Fluent)", "English (Fluent)"],
  },
];

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Education & Skills</h2>
          <p className="text-muted-foreground text-lg">Academic background and technical expertise.</p>
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-8 text-foreground">Education</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10 group"
                >
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />
                  <div className="p-5 rounded-2xl bg-background border border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                    {edu.period && <span className="text-sm font-medium text-primary block mb-1">{edu.period}</span>}
                    <h4 className="text-base font-serif font-medium text-foreground mb-0.5">{edu.degree}</h4>
                    <span className="text-sm text-muted-foreground block">{edu.school}</span>
                    <span className="text-xs text-primary/70 font-medium mt-1 block">{edu.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-8 text-foreground">Skills</h3>
            <div className="space-y-6">
              {SKILL_CATEGORIES.map((cat, index) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="pl-4 border-l-2 border-border/50 relative before:absolute before:left-[-5px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-primary/40"
                >
                  <span className="text-xs font-medium uppercase tracking-wider text-primary/80 block mb-2">{cat.label}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
