import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">What's Next?</span>
          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-4xl md:text-6xl font-serif font-medium text-balance"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Let's work on something meaningful.
            </motion.h2>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl">
            I'm open to internships, project collaborations, and data challenges. Whether you have a question or just want to connect, I'd love to hear from you.
          </p>

          <a
            href="mailto:rohitbiswas1405@gmail.com"
            className="group relative inline-flex items-center justify-center text-xl md:text-3xl font-serif font-medium text-foreground hover:text-primary transition-colors pb-2"
          >
            rohitbiswas1405@gmail.com
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <ArrowUpRight className="ml-2 h-6 w-6 md:h-7 md:w-7 opacity-0 -translate-y-2 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
          </a>

          <a
            href="tel:+917044566300"
            className="mt-4 inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 70445 66300
          </a>
        </motion.div>

        <div className="mt-32 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rohit Biswas. Built with React & Tailwind.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Charmeer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rohit-biswas-a77429308"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-gradient-to-t from-primary/5 to-transparent blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
