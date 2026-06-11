import { motion } from "framer-motion";
import { ArrowRight, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HEADLINE_LINES = [
  { words: ["Turning", "data", "into"], italic: false },
  { words: ["decisions"], italic: true },
  { words: ["that", "matter."], italic: false },
];

function WordReveal({ words, italic, lineDelay }: { words: string[]; italic: boolean; lineDelay: number }) {
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.22em] ${italic ? "text-muted-foreground italic font-light" : ""}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block" style={{ paddingBottom: "0.04em" }}>
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: lineDelay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              Open to internships & opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.12] tracking-tight text-foreground mb-8 flex flex-col gap-y-1">
            {HEADLINE_LINES.map((line, li) => (
              <span key={li} className="block">
                <WordReveal words={line.words} italic={line.italic} lineDelay={0.2 + li * 0.12} />
              </span>
            ))}
          </h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          >
            Hi, I'm <strong className="text-foreground font-medium">Rohit Biswas</strong> — a Data Science student from Kolkata with a passion for machine learning, predictive analytics, and building explainable AI systems that create real business value.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            <Button size="lg" className="rounded-full px-8 text-base h-12" asChild>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("#projects"); }}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-12 bg-transparent border-border/60 hover:bg-muted" asChild>
              <a href="/Rohit_Biswas_Resume.pdf" download="Rohit_Biswas_Resume.pdf">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-l-full blur-3xl -z-10 pointer-events-none" />

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer group"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
