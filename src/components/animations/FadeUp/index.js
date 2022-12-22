import { motion } from "framer-motion";

const variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 30, opacity: 0 },
};

const FadeUp = ({ children, animationKey, ...rest }) => {
  return (
    <motion.div
      key={animationKey}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5 }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
