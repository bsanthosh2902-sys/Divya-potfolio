import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PanelNav from "@/components/PanelNav";
import WelcomePanel from "@/components/panels/WelcomePanel";
import EducationPanel from "@/components/panels/EducationPanel";
import SkillsPanel from "@/components/panels/SkillsPanel";
import HobbiesPanel from "@/components/panels/HobbiesPanel";
import ContactPanel from "@/components/panels/ContactPanel";

const sections = ["Welcome", "Education", "Skills", "Hobbies", "Contact"];
const panels = [WelcomePanel, EducationPanel, SkillsPanel, HobbiesPanel, ContactPanel];

const Index = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback(
    (index: number) => {
      if (index === active) return;
      setDirection(index > active ? 1 : -1);
      setActive(index);
    },
    [active]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        navigate(Math.min(active + 1, sections.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        navigate(Math.max(active - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, navigate]);

  // Wheel navigation with debounce
  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (wheelTimeout.current) return;
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 800);

      if (e.deltaY > 30) {
        navigate(Math.min(active + 1, sections.length - 1));
      } else if (e.deltaY < -30) {
        navigate(Math.max(active - 1, 0));
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [active, navigate]);

  // Touch navigation
  const touchStart = useRef(0);
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const delta = touchStart.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) {
        if (delta > 0) navigate(Math.min(active + 1, sections.length - 1));
        else navigate(Math.max(active - 1, 0));
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [active, navigate]);

  const ActivePanel = panels[active];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "60%" : "-60%",
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-60%" : "60%",
      opacity: 0,
      scale: 0.92,
    }),
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/30 rounded-bl-[200px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/20 rounded-tr-[150px]" />
      </div>

      {/* Panel edges (visible hints) */}
      <div className="absolute left-0 top-0 h-full w-12 md:w-20 z-10 flex items-center">
        {active > 0 && (
          <button
            onClick={() => navigate(active - 1)}
            className="w-full h-32 flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity"
          >
            <div className="w-px h-full bg-border" />
          </button>
        )}
      </div>
      <div className="absolute right-0 top-0 h-full w-12 md:w-20 z-10 flex items-center">
        {active < sections.length - 1 && (
          <button
            onClick={() => navigate(active + 1)}
            className="w-full h-32 flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity"
          >
            <div className="w-px h-full bg-border" />
          </button>
        )}
      </div>

      {/* Main content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={active}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <ActivePanel />
        </motion.div>
      </AnimatePresence>

      {/* Section indicator (top) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-1">
          {sections.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <PanelNav sections={sections} activeIndex={active} onSelect={navigate} />
    </div>
  );
};

export default Index;
