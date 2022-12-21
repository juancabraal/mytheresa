import { motion } from "framer-motion";

const Fade = ({ children, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
