import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", 
    "Tailwind CSS", "Figma", "PostgreSQL", "Framer Motion"
  ];

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
                src="/profile.png" 
                alt="Alex Chen portrait" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 z-0 scale-105 transition-transform duration-500 hover:rotate-0" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Behind the screen</h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                I believe that good design is invisible, and great engineering is invisible too. 
                My focus is on the intersection where intuitive interfaces meet robust architecture.
              </p>
              <p>
                With over 5 years of experience spanning early-stage startups and creative agencies, 
                I've developed a product-minded approach to building software. I don't just write code — 
                I think deeply about user flows, edge cases, and the underlying business value.
              </p>
              <p>
                When I'm not pushing pixels or wrangling state, you'll probably find me exploring specialty coffee shops, making ceramic mugs, or reading about urban design.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">Core Toolkit</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-background border border-border/50 rounded-md text-sm text-foreground/80 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
