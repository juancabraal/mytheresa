import { motion } from "framer-motion";

const FadeUp = ({ children, ...rest }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
