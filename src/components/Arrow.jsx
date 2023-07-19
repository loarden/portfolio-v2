import { RiArrowDownDoubleLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Arrow() {
  return (
    <div className="absolute bottom-2 md:bottom-4 w-full flex justify-center text-4xl md:text-5xl text-primary">
      <motion.a
        href="#about"
        whileHover={{ y: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
        whileTap={{ scale: 0.90 }}
      >
        <RiArrowDownDoubleLine />
      </motion.a>
    </div>
  );
}

export default Arrow;
