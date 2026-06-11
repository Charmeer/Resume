import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Phone } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

type V = { x: number; y: number; r: number; s?: number };

const CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const PIECE = {
  hidden: ({ x, y, r, s = 0.88 }: V) => ({ x, y, rotate: r, opacity: 0, scale: s }),
  visible: {
    x: 0, y: 0, rotate: 0, opacity: 1, scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 13 },
  },
};

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">

        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* Label — drops from above */}
          <motion.span
            variants={PIECE}
            custom={{ x: 0, y: -40, r: -5, s: 0.85 }}
            className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block"
          >
            What's Next?
          </motion.span>

          {/* Heading — spins in from upper right */}
          <motion.div
            variants={PIECE}
            custom={{ x: 80, y: -50, r: 8, s: 0.8 }}
            className="overflow-hidden mb-6"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-balance">
              Let's work on something meaningful.
            </h2>
          </motion.div>

          {/* Description — from lower left */}
          <motion.p
            variants={PIECE}
            custom={{ x: -60, y: 40, r: -4 }}
            className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl"
          >
            I'm open to internships, project collaborations, and data challenges. Whether you have a question
            or just want to connect, I'd love to hear from you.
          </motion.p>

          {/* Email — slides from left side */}
          <motion.div variants={PIECE} custom={{ x: -70, y: 30, r: -5, s: 0.9 }}>
            <MagneticButton strength={0.22}>
              <a
                href="mailto:rohitbiswas1405@gmail.com"
                className="group relative inline-flex items-center justify-center text-xl md:text-3xl font-serif font-medium text-foreground hover:text-primary transition-colors pb-2"
              >
                rohitbiswas1405@gmail.com
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <ArrowUpRight className="ml-2 h-6 w-6 md:h-7 md:w-7 opacity-0 -translate-y-2 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Phone — pops up from below */}
          <motion.div variants={PIECE} custom={{ x: 0, y: 50, r: 4, s: 0.9 }}>
            <MagneticButton strength={0.25} className="mt-4">
              <a
                href="tel:+917044566300"
                className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 70445 66300
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-32 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <motion.p
            variants={PIECE}
            custom={{ x: -40, y: 20, r: -3 }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Rohit Biswas. Built with React & Tailwind.
          </motion.p>

          <div className="flex items-center gap-4">
            <motion.div variants={PIECE} custom={{ x: 40, y: 30, r: 8, s: 0.85 }}>
              <MagneticButton>
                <a
                  href="https://github.com/Charmeer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 block"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </MagneticButton>
            </motion.div>
            <motion.div variants={PIECE} custom={{ x: 60, y: 20, r: -6, s: 0.85 }}>
              <MagneticButton>
                <a
                  href="https://linkedin.com/in/rohit-biswas-a77429308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 block"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-gradient-to-t from-primary/5 to-transparent blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
