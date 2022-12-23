import { Children, useState } from "react";
import { motion } from "framer-motion";

import "./style.scss";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Dropdown = ({ selected, children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrayChildren = Children.toArray(children);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`dropdown-menu ${isOpen ? "dropdown-open" : ""}`}
      {...rest}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-button"
      >
        {selected}
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
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="dropdown-list"
      >
        {Children.map(arrayChildren, (child, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="dropdown-list-item"
            onClick={() => setIsOpen(!isOpen)}
          >
            {child}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Dropdown;
