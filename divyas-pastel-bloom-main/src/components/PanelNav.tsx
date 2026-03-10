import { motion } from "framer-motion";

interface PanelNavProps {
  sections: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const PanelNav = ({ sections, activeIndex, onSelect }: PanelNavProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-card/80 backdrop-blur-md px-4 py-2 rounded-full border border-border shadow-lg">
      {sections.map((section, i) => (
        <button
          key={section}
          onClick={() => onSelect(i)}
          className="relative px-3 py-1.5 text-xs font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors"
        >
          {activeIndex === i && (
            <motion.div
              layoutId="activePanel"
              className="absolute inset-0 bg-primary/20 rounded-full"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{section}</span>
        </button>
      ))}
    </div>
  );
};

export default PanelNav;
