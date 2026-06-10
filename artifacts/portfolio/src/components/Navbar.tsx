import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_ITEMS.map((item) => item.href.slice(1)), 150);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // offset for sticky nav
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, "#hero")}
          className="font-serif text-xl font-medium tracking-tight text-foreground hover:text-primary transition-colors"
        >
          RB.
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-muted/30 backdrop-blur-sm rounded-full p-1 border border-border/50">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                  isActive
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button className="hidden sm:inline-flex rounded-full font-medium" variant="default" size="sm" asChild>
            <a href="/Rohit_Biswas_Resume.pdf" download="Rohit_Biswas_Resume.pdf">Download CV</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
