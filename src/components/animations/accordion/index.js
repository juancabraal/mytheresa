import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./style.scss";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="accordion">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(!isOpen)}
        animate={isOpen ? "open" : "closed"}
        className="accordion-title"
      >
        {title}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
