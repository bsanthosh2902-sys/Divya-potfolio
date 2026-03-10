import { motion } from "framer-motion";
import { Mail, MapPin, Heart } from "lucide-react";

const ContactPanel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <h2 className="text-4xl md:text-5xl font-display font-700 text-foreground mb-2">
          Get in Touch
        </h2>
        <div className="w-12 h-px bg-primary mx-auto mb-8" />

        <p className="text-muted-foreground font-body leading-relaxed mb-10">
          I'm always open to new opportunities, collaborations, and conversations. 
          Feel free to reach out!
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 text-foreground font-body">
            <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span className="text-sm">Ravi Degree College</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-foreground font-body">
            <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span className="text-sm">divyaprasanna@email.com</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-2 text-xs text-muted-foreground font-body"
        >
          <span>Made with</span>
          <Heart className="w-3 h-3 text-primary fill-primary" />
          <span>by Divya Prasanna</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPanel;
