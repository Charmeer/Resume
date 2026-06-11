import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import stockMarketImg from "@assets/image_1781093786738.png";
import vendorImg from "@assets/image_1781094562724.png";
import fraudSenseImg from "@assets/image_1781094781639.png";

const PROJECTS = [
  {
    title: "FraudSense — Explainable Fraud Detection",
    description:
      "Built a CatBoost-based fraud detection model achieving 88.3% Precision, 90.4% Recall, and 89.4% F1-score via threshold optimisation. Applied SHAP explainability to surface key fraud drivers and designed a multi-page Power BI dashboard covering Executive Summary, Model Performance, and Transaction Explorer.",
    tags: ["Python", "CatBoost", "SHAP", "Power BI", "Machine Learning"],
    image: fraudSenseImg,
    github: "https://github.com/Charmeer",
  },
  {
    title: "Vendor Performance Analysis",
    description:
      "Built a full analytics pipeline using SQL, SQLite, Python, and Power BI to evaluate vendor and brand profitability end-to-end. Conducted EDA, outlier detection, correlation analysis, and hypothesis testing to identify key profitability drivers.",
    tags: ["SQL", "SQLite", "Python", "Power BI", "EDA"],
    image: vendorImg,
    github: "https://github.com/Charmeer",
  },
  {
    title: "Indian Stock Market Analytics & EDA",
    description:
      "Analysed 5 years of NSE and BSE OHLCV data covering volatility, drawdown, seasonality, and clustering. Applied ANOVA, Kruskal-Wallis testing, and bootstrap confidence intervals to validate market seasonality effects and identify momentum trends.",
    tags: ["Python", "Pandas", "Statistics", "Time Series", "ANOVA"],
    image: stockMarketImg,
    github: "https://github.com/Charmeer",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const isEven = index % 2 === 0;

  const reveal = (delay: number) => ({
    initial: { y: "105%", opacity: 0 },
    animate: inView ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: 0.65, delay, ease: EASE },
  });

  return (
    <div ref={ref} className="group">
      {/* Divider line */}
      <div className="overflow-hidden mb-10">
        <motion.div
          className="h-px w-full bg-border/60"
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0 }}
        />
      </div>

      <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-start`}>

        {/* Image — sohub-style clip wipe from bottom */}
        <div className={`${!isEven ? "md:order-2" : ""}`}>
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0d0d] aspect-[16/10]">
            <motion.div
              className="absolute inset-0"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { clipPath: "inset(0% 0 0 0)" } : { clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.05 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
                initial={{ scale: 1.12 }}
                animate={inView ? { scale: 1 } : { scale: 1.12 }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.05 }}
              />
            </motion.div>

            {/* vignette */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.5) 100%)" }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />
          </div>
        </div>

        {/* Text content — staggered reveals */}
        <div className={`flex flex-col justify-center ${!isEven ? "md:order-1" : ""}`}>

          {/* Index number */}
          <div className="overflow-hidden mb-5">
            <motion.span
              className="text-xs font-mono text-muted-foreground/50 tracking-[0.25em] uppercase"
              {...reveal(0.1)}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>
          </div>

          {/* Tags */}
          <motion.div className="flex flex-wrap gap-2 mb-5" {...fade(0.18)}>
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2 py-1 rounded-sm bg-muted text-muted-foreground">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title — word-by-word clip reveal */}
          <div className="mb-5">
            {project.title.split(" ").reduce<string[][]>((lines, word, i, arr) => {
              const chunkSize = Math.ceil(arr.length / 2);
              const lineIdx = Math.floor(i / chunkSize);
              if (!lines[lineIdx]) lines[lineIdx] = [];
              lines[lineIdx].push(word);
              return lines;
            }, []).map((lineWords, li) => (
              <div key={li} className="overflow-hidden">
                <motion.div
                  className="text-2xl md:text-3xl font-serif font-medium leading-snug group-hover:text-primary transition-colors"
                  initial={{ y: "100%" }}
                  animate={inView ? { y: "0%" } : { y: "100%" }}
                  transition={{ duration: 0.75, delay: 0.22 + li * 0.08, ease: EASE }}
                >
                  {lineWords.join(" ")}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-base leading-relaxed mb-8"
            {...fade(0.38)}
          >
            {project.description}
          </motion.p>

          {/* CTA */}
          <motion.div {...fade(0.46)}>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full gap-2 text-muted-foreground hover:text-foreground -ml-3"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" /> Source Code
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="overflow-hidden mb-4">
              <motion.h2
                className="text-3xl md:text-4xl font-serif font-medium"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                Selected Projects
              </motion.h2>
            </div>
            <motion.p
              className="text-muted-foreground text-lg max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              End-to-end analytics and ML projects — from raw data to business decisions.
            </motion.p>
          </div>
          <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary hover:bg-primary/5 rounded-full group" asChild>
            <a href="https://github.com/Charmeer" target="_blank" rel="noopener noreferrer">
              View GitHub <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Cards */}
        <div className="space-y-20 pb-4">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom divider */}
        <motion.div
          className="h-px w-full bg-border/60 mt-20"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        />

        <Button variant="ghost" className="w-full mt-6 md:hidden text-primary hover:text-primary hover:bg-primary/5 rounded-full group" asChild>
          <a href="https://github.com/Charmeer" target="_blank" rel="noopener noreferrer">
            View GitHub <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
}
