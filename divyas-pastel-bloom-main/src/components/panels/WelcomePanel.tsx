import { motion } from "framer-motion";

const WelcomePanel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Portfolio
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-800 text-foreground leading-[0.9] mb-8">
          Divya
          <br />
          <span className="text-primary">Prasanna</span>
        </h1>
        <div className="w-16 h-px bg-primary mx-auto mb-6" />
        <p className="text-base font-body text-muted-foreground max-w-md mx-auto leading-relaxed">
          BSC Computer Science Student
          <br />
          <span className="text-primary">Ravi Degree College</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-body tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-primary/40"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomePanel;
