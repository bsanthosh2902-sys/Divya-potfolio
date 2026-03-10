import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    level: "Degree",
    institution: "Ravi Degree College",
    program: "BSC Computer Science",
    status: "Currently Pursuing",
  },
  {
    level: "Intermediate",
    institution: "Sai Junior College",
    program: "MPC / Science Stream",
    status: "Completed",
  },
  {
    level: "Schooling",
    institution: "Dreams Foundation High School",
    program: "Secondary Education",
    status: "Completed",
  },
];

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const EducationPanel = () => {
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-700 text-foreground mb-2">
          Education
        </h2>
        <div className="w-12 h-px bg-primary mb-12" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        className="space-y-8"
      >
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            variants={item}
            className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-card border-2 border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300" />
            <span className="text-xs font-body tracking-[0.2em] uppercase text-primary font-500">
              {edu.level}
            </span>
            <h3 className="text-xl font-display font-600 text-foreground mt-1">
              {edu.institution}
            </h3>
            <p className="text-sm font-body text-muted-foreground mt-1">
              {edu.program}
            </p>
            <span className="inline-block mt-2 text-xs font-body px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
              {edu.status}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EducationPanel;
