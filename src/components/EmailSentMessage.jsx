import { motion } from "framer-motion";

function EmailSentMessage({ text }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute -bottom-10 text-primary"
    >
      {text}
    </motion.p>
  );
}

export default EmailSentMessage;
