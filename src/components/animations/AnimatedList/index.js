import { Children } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedList = ({ children }) => {
  const arrayChildren = Children.toArray(children);
  return (
    <AnimatePresence mode="sync">
      {Children.map(arrayChildren, (child) => (
        <motion.div
          key={child.props.movieId}
          layout
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring" }}
        >
          {child}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default AnimatedList;
