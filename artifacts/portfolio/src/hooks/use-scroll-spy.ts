import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      let currentActiveId = "";
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentActiveId = id;
          }
        }
      }
      
      // If we are at the bottom of the page, activate the last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        currentActiveId = ids[ids.length - 1];
      }
      
      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
