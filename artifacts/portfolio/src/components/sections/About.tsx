import { motion } from "framer-motion";
import profilePhoto from "@assets/WhatsApp_Image_2025-03-09_at_18.52.41_cf10f3e6_1781072752881.jpg";

const SKILL_GROUPS = [
  { label: "Programming & DB", skills: ["Python", "SQL", "SQLite"] },
  { label: "Analysis & Viz", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Advanced Excel"] },
  { label: "Machine Learning", skills: ["Scikit-learn", "CatBoost", "SHAP", "Feature Engineering"] },
  { label: "Statistics", skills: ["Hypothesis Testing", "EDA", "Time Series", "Bootstrap CIs"] },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
              <img
                src={profilePhoto}
                alt="Rohit Biswas portrait"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 z-0 scale-105 transition-transform duration-500 hover:rotate-0" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Behind the data</h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                I'm a Data Science undergraduate at Techno India University with a strong interest in machine learning, statistical modelling, and analytics — focused on transforming complex datasets into actionable business insights.
              </p>
              <p>
                I've built end-to-end solutions spanning fraud detection with explainable AI, vendor profitability pipelines, and five-year market analytics studies. I care as much about the story the data tells as the model that reveals it.
              </p>
              <p>
                When I'm not training models or writing SQL, I'm exploring financial markets, reading about statistical theory, or figuring out why the last visualisation didn't quite land.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">Core Toolkit</h3>
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide mb-2 block">{group.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-background border border-border/50 rounded-md text-sm text-foreground/80 hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
