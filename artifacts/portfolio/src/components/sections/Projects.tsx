import { motion } from "framer-motion";
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
      "Analysed 5 years of NSE and BSE OHLCV data covering volatility, drawdown, seasonality, and clustering. Applied ANOVA, Kruskal-Wallis testing, and bootstrap confidence intervals to validate market seasonality effects.",
    tags: ["Python", "Pandas", "Statistics", "Time Series", "ANOVA"],
    image: stockMarketImg,
    github: "https://github.com/Charmeer",
  },
];

type V = { x: number; y: number; r: number; s?: number };

const CARD_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
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
    transition: { type: "spring" as const, stiffness: 340, damping: 19 },
  },
};

const TAG_VECS: V[] = [
  { x: -15, y: -16, r: -8 }, { x: 12, y: -18, r: 6 }, { x: -20, y: 10, r: -5 },
  { x: 18, y: 14, r: 9 }, { x: -10, y: -12, r: -7 },
];

// Each card's image and text come from opposite scattered sides
const CARD_VECS = [
  { img: { x: -100, y: -30, r: -9, s: 0.82 }, text: { x: 80, y: 40, r: 7, s: 0.9 } },
  { img: { x: 100, y: -20, r: 8, s: 0.82 },  text: { x: -80, y: 30, r: -6, s: 0.9 } },
  { img: { x: -80, y: 40, r: -10, s: 0.82 }, text: { x: 90, y: -30, r: 8, s: 0.9 } },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Section header */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <motion.div variants={PIECE} custom={{ x: -60, y: -30, r: -5 }} className="overflow-hidden mb-4">
              <h2 className="text-3xl md:text-4xl font-serif font-medium">Selected Projects</h2>
            </motion.div>
            <motion.p
              variants={PIECE}
              custom={{ x: 50, y: 20, r: 3 }}
              className="text-muted-foreground text-lg max-w-xl"
            >
              End-to-end analytics and ML projects — from raw data to business decisions.
            </motion.p>
          </div>
          <motion.div variants={PIECE} custom={{ x: 40, y: -20, r: 4 }}>
            <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary hover:bg-primary/5 rounded-full group" asChild>
              <a href="https://github.com/Charmeer" target="_blank" rel="noopener noreferrer">
                View GitHub <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="space-y-24">
          {PROJECTS.map((project, index) => {
            const vecs = CARD_VECS[index];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={CARD_CONTAINER}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="group"
              >
                {/* Divider line assembles first */}
                <motion.div
                  variants={PIECE}
                  custom={{ x: 0, y: -20, r: 0, s: 1 }}
                  className="mb-10"
                >
                  <div className="h-px w-full bg-border/60" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

                  {/* Image — scatters from one side */}
                  <motion.div
                    variants={PIECE}
                    custom={vecs.img}
                    className={`${!isEven ? "md:order-2" : ""}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-[#0d0d0d] aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none rounded-2xl"
                        style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.5) 100%)" }}
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Text — scatters from the opposite side */}
                  <motion.div
                    variants={PIECE}
                    custom={vecs.text}
                    className={`flex flex-col justify-center ${!isEven ? "md:order-1" : ""}`}
                  >
                    {/* Index */}
                    <span className="text-xs font-mono text-muted-foreground/50 tracking-[0.25em] uppercase mb-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Tags — each one scatters individually */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-5"
                      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                    >
                      {project.tags.map((tag, ti) => (
                        <motion.span
                          key={tag}
                          variants={TAG_PIECE}
                          custom={TAG_VECS[ti % TAG_VECS.length]}
                          className="text-xs font-medium px-2 py-1 rounded-sm bg-muted text-muted-foreground"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-serif font-medium leading-snug mb-5 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-base leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Button */}
                    <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-foreground -ml-3" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> Source Code
                      </a>
                    </Button>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom divider */}
        <motion.div
          className="h-px w-full bg-border/60 mt-24"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />

        <Button variant="ghost" className="w-full mt-6 md:hidden text-primary hover:text-primary hover:bg-primary/5 rounded-full group" asChild>
          <a href="https://github.com/Charmeer" target="_blank" rel="noopener noreferrer">
            View GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
