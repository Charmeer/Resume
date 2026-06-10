import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Senior Frontend Engineer",
    company: "Nexus Systems",
    period: "2022 — Present",
    description: "Leading the architectural rebuild of the core SaaS platform. Transitioned legacy SPA to Next.js, improving initial load times by 45%. Established a comprehensive design system used across 4 product teams."
  },
  {
    role: "Full-Stack Developer",
    company: "Studio Variant",
    period: "2019 — 2022",
    description: "Built end-to-end bespoke digital experiences for boutique brands. Managed client communication, designed database schemas, and crafted fluid webGL animations."
  },
  {
    role: "Frontend Developer",
    company: "Acme Corp",
    period: "2018 — 2019",
    description: "Developed interactive dashboards for financial analysts. Collaborated closely with the design team to ensure pixel-perfect implementation of high-fidelity mockups."
  }
];

const EDUCATION = [
  {
    degree: "B.S. Computer Science",
    school: "University of Technology",
    period: "2014 — 2018"
  },
  {
    degree: "Interaction Design Certificate",
    school: "Design Institute",
    period: "2019"
  }
];

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg">My professional journey so far.</p>
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-16 md:gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-8 text-foreground">Work Experience</h3>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {EXPERIENCES.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary bg-background absolute left-0 md:left-1/2 -translate-x-[9.5px] md:-translate-x-1/2 z-10 transition-colors group-hover:bg-primary" />
                  
                  {/* Content Card */}
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-auto md:ml-0 p-6 rounded-2xl bg-background border border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                    <div className="flex flex-col gap-1 mb-3">
                      <span className="text-sm font-medium text-primary">{exp.period}</span>
                      <h4 className="text-lg font-serif font-medium text-foreground">{exp.role}</h4>
                      <span className="text-sm text-muted-foreground">{exp.company}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education list */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-8 text-foreground">Education</h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="pl-6 border-l-2 border-border/50 relative before:absolute before:left-[-5px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-muted-foreground"
                >
                  <span className="text-sm font-medium text-primary block mb-1">{edu.period}</span>
                  <h4 className="text-base font-serif font-medium text-foreground">{edu.degree}</h4>
                  <span className="text-sm text-muted-foreground">{edu.school}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
