import { motion } from "framer-motion";
import { Music, BookOpen, Pen, Code, Plane } from "lucide-react";

const hobbies = [
  { name: "Reading", icon: BookOpen },
  { name: "Writing", icon: Pen },
  { name: "Music", icon: Music },
  { name: "Coding", icon: Code },
  { name: "Traveling", icon: Plane },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HobbiesPanel = () => {
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-700 text-foreground mb-2">
          Hobbies
        </h2>
        <div className="w-12 h-px bg-primary mb-12" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {hobbies.map((hobby) => (
          <motion.div
            key={hobby.name}
            variants={item}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-sm hover:border-primary hover:shadow-lg transition-all duration-300 cursor-default"
          >
            <hobby.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <span className="text-sm font-body text-foreground">{hobby.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HobbiesPanel;
