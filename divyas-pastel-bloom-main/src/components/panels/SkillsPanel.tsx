import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Proficient",
    skills: ["C Language", "C++"],
  },
  {
    category: "Familiar With",
    skills: ["Data Structures", "Problem Solving", "Computer Fundamentals"],
  },
];

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

const SkillsPanel = () => {
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-700 text-foreground mb-2">
          Skills
        </h2>
        <div className="w-12 h-px bg-primary mb-12" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        className="space-y-10"
      >
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="text-xs font-body tracking-[0.2em] uppercase text-primary font-500 mb-4">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={item}
                  whileHover={{ y: -2 }}
                  className="px-5 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground hover:border-primary hover:shadow-md transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsPanel;
