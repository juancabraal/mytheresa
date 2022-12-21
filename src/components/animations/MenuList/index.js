import { Children } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./style.scss";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const MenuList = ({ open, height, children }) => {
  const arrayChildren = Children.toArray(children);
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ height: 0 }}
          animate={{
            height,
          }}
          exit={{
            height: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
        >
          <motion.div
            className="menu-list-container"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {Children.map(arrayChildren, (child, index) => (
              <motion.div key={index} variants={itemVariants}>
                {child}
              </motion.div>
            ))}
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MenuList;
