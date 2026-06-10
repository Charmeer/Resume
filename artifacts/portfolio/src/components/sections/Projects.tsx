import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "Aura Analytics",
    description: "A comprehensive dashboard for e-commerce metrics featuring real-time data visualization, predictive inventory modeling, and customizable reporting widgets.",
    tags: ["React", "Recharts", "Node.js", "PostgreSQL"],
    image: "/project1.png",
    github: "#",
    live: "#"
  },
  {
    title: "Thread & Co. App",
    description: "Mobile-first shopping experience with fluid micro-interactions, seamless checkout flow, and integrated AR try-on for select apparel items.",
    tags: ["React Native", "TypeScript", "Zustand", "Stripe"],
    image: "/project2.png",
    github: "#",
    live: "#"
  },
  {
    title: "Lumina Brand Identity",
    description: "Complete digital identity system including generative abstract artwork, custom typography selection, and an immersive WebGL landing page.",
    tags: ["Three.js", "Framer Motion", "Figma", "GSAP"],
    image: "/project3.png",
    github: "#",
    live: "#"
  }
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
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A collection of projects bridging the gap between aesthetics and functionality.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary hover:bg-primary/5 rounded-full group">
            View All Projects <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
              <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'md:grid-cols-[1.2fr_1fr]' : 'md:grid-cols-[1fr_1.2fr]'}`}>
                
                <div className={`order-2 md:order-none ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 rounded-sm bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="rounded-full gap-2 border-border/60 hover:bg-muted" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-foreground" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> Source Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={`relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] md:aspect-[4/3] order-1 md:order-none ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        
        <Button variant="ghost" className="w-full mt-12 md:hidden text-primary hover:text-primary hover:bg-primary/5 rounded-full group">
          View All Projects <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
