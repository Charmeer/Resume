import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import stockMarketImg from "@assets/image_1781093786738.png";
import vendorImg from "@assets/image_1781094562724.png";
import fraudSenseImg from "@assets/image_1781094781639.png";

const PROJECTS = [
  {
    title: "FraudSense — Explainable Fraud Detection",
    description:
      "Built a CatBoost-based fraud detection model achieving 88.3% Precision, 90.4% Recall, and 89.4% F1-score via threshold optimisation using Precision-Recall-F1 trade-off analysis. Applied SHAP explainability to surface key fraud drivers and feature importance rankings for stakeholder interpretation. Designed a multi-page interactive Power BI dashboard covering Executive Summary, Model Performance, SHAP Explainability, and Transaction Explorer.",
    tags: ["Python", "CatBoost", "SHAP", "Power BI", "Machine Learning"],
    image: fraudSenseImg,
    github: "https://github.com/Charmeer",
    live: null,
  },
  {
    title: "Vendor Performance Analysis",
    description:
      "Built a full analytics pipeline using SQL, SQLite, Python, and Power BI to evaluate vendor and brand profitability end-to-end. Conducted EDA, outlier detection, correlation analysis, and hypothesis testing to identify key profitability drivers. Developed KPI dashboards tracking sales, purchase contributions, and inventory turnover with actionable pricing recommendations.",
    tags: ["SQL", "SQLite", "Python", "Power BI", "EDA"],
    image: vendorImg,
    github: "https://github.com/Charmeer",
    live: null,
  },
  {
    title: "Indian Stock Market Analytics & EDA",
    description:
      "Analysed 5 years of NSE and BSE OHLCV data using Python, covering volatility, drawdown, seasonality, and clustering. Applied ANOVA, Kruskal-Wallis testing, and bootstrap confidence intervals to validate market seasonality effects. Identified momentum trends, diversification limitations, and top-performing equities across the Indian market.",
    tags: ["Python", "Pandas", "Statistics", "Time Series", "ANOVA"],
    image: stockMarketImg,
    github: "https://github.com/Charmeer",
    live: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <div className="overflow-hidden mb-4">
              <motion.h2
                className="text-3xl md:text-4xl font-serif font-medium"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Selected Projects
              </motion.h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-xl">
              End-to-end analytics and ML projects — from raw data to business decisions.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary hover:bg-primary/5 rounded-full group" asChild>
            <a href="https://github.com/Charmeer" target="_blank" rel="noopener noreferrer">
              View GitHub <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.2fr]"}`}>

                <div className={`order-2 md:order-none ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 rounded-sm bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-foreground" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> Source Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={`relative rounded-2xl overflow-hidden bg-[#0d0d0d] aspect-[16/10] order-1 md:order-none ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* warm vignette overlay */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                      background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                  {/* subtle terracotta tint on hover */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "rgba(166, 88, 55, 0.07)" }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <Button variant="ghost" className="w-full mt-12 md:hidden text-primary hover:text-primary hover:bg-primary/5 rounded-full group" asChild>
          <a href="https://github.com/Charmeer" target="_blank" rel="noopener noreferrer">
            View GitHub <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  );
}
